-- ==============================================================================
-- GRACE CITY INTERNATIONAL SCHOOL PORTAL — MYSQL DATABASE SCHEMA
-- Engine: MySQL 8.0+
-- Covers: RBAC/Users, Academics, CBT/JAMB, Finance, Public CMS, Notifications, Audit
-- ==============================================================================

CREATE DATABASE IF NOT EXISTS grace_city_portal
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE grace_city_portal;

-- ------------------------------------------------------------------------------
-- 1. CORE: ROLES, USERS, SECTIONS
-- ------------------------------------------------------------------------------

CREATE TABLE roles (
    role_id       INT AUTO_INCREMENT PRIMARY KEY,
    role_name     ENUM('super_admin','section_head','teacher','student','parent','auditor','public_visitor') NOT NULL UNIQUE
);

CREATE TABLE sections (
    section_id    INT AUTO_INCREMENT PRIMARY KEY,
    name          ENUM('creche','nursery','primary','secondary','tertiary') NOT NULL UNIQUE
);

CREATE TABLE users (
    user_id       INT AUTO_INCREMENT PRIMARY KEY,
    username      VARCHAR(50)  NOT NULL UNIQUE,
    email         VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role_id       INT NOT NULL,
    section_id    INT NULL,
    status        ENUM('active','suspended','pending') NOT NULL DEFAULT 'pending',
    created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (role_id) REFERENCES roles(role_id),
    FOREIGN KEY (section_id) REFERENCES sections(section_id)
) ENGINE=InnoDB;

-- ------------------------------------------------------------------------------
-- 2. PEOPLE: STUDENTS, STAFF, PARENTS
-- ------------------------------------------------------------------------------

CREATE TABLE classes (
    class_id      INT AUTO_INCREMENT PRIMARY KEY,
    section_id    INT NOT NULL,
    name          VARCHAR(50) NOT NULL,        -- e.g. "JSS1A", "Reception 2"
    FOREIGN KEY (section_id) REFERENCES sections(section_id)
) ENGINE=InnoDB;

CREATE TABLE students (
    student_id      INT AUTO_INCREMENT PRIMARY KEY,
    user_id         INT NOT NULL UNIQUE,
    admission_no    VARCHAR(30) NOT NULL UNIQUE,
    section_id      INT NOT NULL,
    class_id        INT NULL,
    first_name      VARCHAR(80) NOT NULL,
    last_name       VARCHAR(80) NOT NULL,
    date_of_birth   DATE,
    gender          ENUM('male','female') NULL,
    enrollment_date DATE NOT NULL,
    status          ENUM('active','graduated','withdrawn','suspended') NOT NULL DEFAULT 'active',
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (section_id) REFERENCES sections(section_id),
    FOREIGN KEY (class_id) REFERENCES classes(class_id)
) ENGINE=InnoDB;

CREATE TABLE staff (
    staff_id      INT AUTO_INCREMENT PRIMARY KEY,
    user_id       INT NOT NULL UNIQUE,
    staff_no      VARCHAR(30) NOT NULL UNIQUE,
    first_name    VARCHAR(80) NOT NULL,
    last_name     VARCHAR(80) NOT NULL,
    department    VARCHAR(100),
    position      VARCHAR(100),
    hire_date     DATE,
    status        ENUM('active','on_leave','terminated') NOT NULL DEFAULT 'active',
    show_public   BOOLEAN NOT NULL DEFAULT TRUE,   -- listed in public staff directory
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE parents (
    parent_id     INT AUTO_INCREMENT PRIMARY KEY,
    user_id       INT NOT NULL UNIQUE,
    first_name    VARCHAR(80) NOT NULL,
    last_name     VARCHAR(80) NOT NULL,
    phone         VARCHAR(30),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE student_parent (
    student_id    INT NOT NULL,
    parent_id     INT NOT NULL,
    relationship  VARCHAR(30),
    PRIMARY KEY (student_id, parent_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE,
    FOREIGN KEY (parent_id) REFERENCES parents(parent_id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ------------------------------------------------------------------------------
-- 3. ACADEMIC MANAGEMENT
-- ------------------------------------------------------------------------------

CREATE TABLE academic_sessions (
    session_id    INT AUTO_INCREMENT PRIMARY KEY,
    name          VARCHAR(20) NOT NULL UNIQUE,   -- e.g. "2025/2026"
    start_date    DATE NOT NULL,
    end_date      DATE NOT NULL
) ENGINE=InnoDB;

CREATE TABLE terms (
    term_id       INT AUTO_INCREMENT PRIMARY KEY,
    session_id    INT NOT NULL,
    name          VARCHAR(30) NOT NULL,          -- e.g. "First Term"
    start_date    DATE,
    end_date      DATE,
    FOREIGN KEY (session_id) REFERENCES academic_sessions(session_id)
) ENGINE=InnoDB;

CREATE TABLE subjects (
    subject_id    INT AUTO_INCREMENT PRIMARY KEY,
    section_id    INT NOT NULL,
    name          VARCHAR(100) NOT NULL,
    FOREIGN KEY (section_id) REFERENCES sections(section_id)
) ENGINE=InnoDB;

CREATE TABLE class_subject_teacher (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    class_id      INT NOT NULL,
    subject_id    INT NOT NULL,
    staff_id      INT NOT NULL,
    term_id       INT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES classes(class_id),
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id),
    FOREIGN KEY (staff_id) REFERENCES staff(staff_id),
    FOREIGN KEY (term_id) REFERENCES terms(term_id)
) ENGINE=InnoDB;

CREATE TABLE results (
    result_id     INT AUTO_INCREMENT PRIMARY KEY,
    student_id    INT NOT NULL,
    subject_id    INT NOT NULL,
    term_id       INT NOT NULL,
    ca_score      DECIMAL(5,2) DEFAULT 0,
    exam_score    DECIMAL(5,2) DEFAULT 0,
    total_score   DECIMAL(5,2) GENERATED ALWAYS AS (ca_score + exam_score) STORED,
    grade         VARCHAR(5),
    remarks       VARCHAR(255),
    entered_by    INT NULL,                      -- staff_id
    created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id),
    FOREIGN KEY (term_id) REFERENCES terms(term_id),
    UNIQUE KEY uniq_result (student_id, subject_id, term_id)
) ENGINE=InnoDB;

-- ------------------------------------------------------------------------------
-- 4. JAMB CBT / EXAM CENTER MODULE
-- ------------------------------------------------------------------------------

CREATE TABLE exams (
    exam_id       INT AUTO_INCREMENT PRIMARY KEY,
    title         VARCHAR(150) NOT NULL,
    exam_type     ENUM('mock_utme','school_exam','practice') NOT NULL,
    subject_id    INT NULL,
    duration_min  INT NOT NULL,
    total_marks   DECIMAL(6,2) NOT NULL,
    status        ENUM('draft','pending_approval','approved','archived') NOT NULL DEFAULT 'draft',
    created_by    INT NOT NULL,                  -- staff_id
    approved_by   INT NULL,                      -- staff_id (Section Head/Admin)
    created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id),
    FOREIGN KEY (created_by) REFERENCES staff(staff_id),
    FOREIGN KEY (approved_by) REFERENCES staff(staff_id)
) ENGINE=InnoDB;

CREATE TABLE questions (
    question_id     INT AUTO_INCREMENT PRIMARY KEY,
    exam_id         INT NOT NULL,
    question_text   TEXT NOT NULL,
    option_a        VARCHAR(255),
    option_b        VARCHAR(255),
    option_c        VARCHAR(255),
    option_d        VARCHAR(255),
    correct_option  ENUM('A','B','C','D') NOT NULL,
    marks           DECIMAL(5,2) NOT NULL DEFAULT 1,
    FOREIGN KEY (exam_id) REFERENCES exams(exam_id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE cbt_sessions (
    cbt_session_id  INT AUTO_INCREMENT PRIMARY KEY,
    exam_id         INT NOT NULL,
    student_id      INT NOT NULL,
    ip_address      VARCHAR(45),
    start_time      DATETIME,
    end_time        DATETIME,
    score           DECIMAL(6,2),
    status          ENUM('not_started','in_progress','submitted','terminated') NOT NULL DEFAULT 'not_started',
    FOREIGN KEY (exam_id) REFERENCES exams(exam_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id)
) ENGINE=InnoDB;

CREATE TABLE cbt_anticheat_logs (
    log_id          INT AUTO_INCREMENT PRIMARY KEY,
    cbt_session_id  INT NOT NULL,
    event_type      ENUM('tab_switch','copy_attempt','paste_attempt','disconnect','ip_mismatch') NOT NULL,
    event_time      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cbt_session_id) REFERENCES cbt_sessions(cbt_session_id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ------------------------------------------------------------------------------
-- 5. FINANCE
-- ------------------------------------------------------------------------------

CREATE TABLE fees (
    fee_id        INT AUTO_INCREMENT PRIMARY KEY,
    name          VARCHAR(100) NOT NULL,         -- e.g. "Tuition - Term 1"
    section_id    INT NOT NULL,
    term_id       INT NOT NULL,
    amount        DECIMAL(12,2) NOT NULL,
    installment_allowed BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (section_id) REFERENCES sections(section_id),
    FOREIGN KEY (term_id) REFERENCES terms(term_id)
) ENGINE=InnoDB;

CREATE TABLE invoices (
    invoice_id    INT AUTO_INCREMENT PRIMARY KEY,
    student_id    INT NOT NULL,
    fee_id        INT NOT NULL,
    amount_due    DECIMAL(12,2) NOT NULL,
    amount_paid   DECIMAL(12,2) NOT NULL DEFAULT 0,
    status        ENUM('unpaid','partial','paid','overdue') NOT NULL DEFAULT 'unpaid',
    due_date      DATE,
    created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (fee_id) REFERENCES fees(fee_id)
) ENGINE=InnoDB;

CREATE TABLE payments (
    payment_id      INT AUTO_INCREMENT PRIMARY KEY,
    invoice_id      INT NOT NULL,
    amount_paid     DECIMAL(12,2) NOT NULL,
    payment_method  ENUM('paystack','flutterwave','remita','bank_transfer','cash') NOT NULL,
    transaction_ref VARCHAR(100) UNIQUE,
    paid_at         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    receipt_qr_code VARCHAR(255),
    FOREIGN KEY (invoice_id) REFERENCES invoices(invoice_id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ------------------------------------------------------------------------------
-- 6. PUBLIC WEBSITE / CMS
-- ------------------------------------------------------------------------------

CREATE TABLE news (
    news_id       INT AUTO_INCREMENT PRIMARY KEY,
    title         VARCHAR(200) NOT NULL,
    category      ENUM('general','academics','sports','alumni','cbt_updates') NOT NULL,
    content       TEXT NOT NULL,
    featured      BOOLEAN NOT NULL DEFAULT FALSE,
    author_id     INT NOT NULL,                  -- staff_id
    published_at  DATETIME NULL,
    status        ENUM('draft','published','archived') NOT NULL DEFAULT 'draft',
    FOREIGN KEY (author_id) REFERENCES staff(staff_id)
) ENGINE=InnoDB;

CREATE TABLE events (
    event_id      INT AUTO_INCREMENT PRIMARY KEY,
    title         VARCHAR(200) NOT NULL,
    description   TEXT,
    section_id    INT NULL,
    start_datetime DATETIME NOT NULL,
    end_datetime   DATETIME,
    location      VARCHAR(255),
    rsvp_enabled  BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (section_id) REFERENCES sections(section_id)
) ENGINE=InnoDB;

CREATE TABLE gallery_albums (
    album_id      INT AUTO_INCREMENT PRIMARY KEY,
    title         VARCHAR(150) NOT NULL,
    description   TEXT,
    created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE gallery_media (
    media_id      INT AUTO_INCREMENT PRIMARY KEY,
    album_id      INT NOT NULL,
    media_type    ENUM('image','video') NOT NULL,
    url           VARCHAR(500) NOT NULL,
    alt_text      VARCHAR(255),
    FOREIGN KEY (album_id) REFERENCES gallery_albums(album_id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE admission_inquiries (
    inquiry_id    INT AUTO_INCREMENT PRIMARY KEY,
    full_name     VARCHAR(150) NOT NULL,
    email         VARCHAR(150) NOT NULL,
    phone         VARCHAR(30),
    section_id    INT NULL,
    message       TEXT,
    status        ENUM('new','contacted','converted','closed') NOT NULL DEFAULT 'new',
    submitted_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (section_id) REFERENCES sections(section_id)
) ENGINE=InnoDB;

-- ------------------------------------------------------------------------------
-- 7. COMMUNICATIONS & NOTIFICATIONS
-- ------------------------------------------------------------------------------

CREATE TABLE notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id         INT NOT NULL,
    channel         ENUM('sms','email','push') NOT NULL,
    message         TEXT NOT NULL,
    status          ENUM('pending','sent','failed') NOT NULL DEFAULT 'pending',
    sent_at         DATETIME NULL,
    created_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE notice_board (
    notice_id     INT AUTO_INCREMENT PRIMARY KEY,
    section_id    INT NOT NULL,
    title         VARCHAR(200) NOT NULL,
    content       TEXT NOT NULL,
    posted_by     INT NOT NULL,                  -- user_id
    posted_at     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (section_id) REFERENCES sections(section_id),
    FOREIGN KEY (posted_by) REFERENCES users(user_id)
) ENGINE=InnoDB;

CREATE TABLE internal_messages (
    message_id    INT AUTO_INCREMENT PRIMARY KEY,
    sender_id     INT NOT NULL,
    recipient_id  INT NOT NULL,
    body          TEXT NOT NULL,
    sent_at       DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    read_at       DATETIME NULL,
    FOREIGN KEY (sender_id) REFERENCES users(user_id),
    FOREIGN KEY (recipient_id) REFERENCES users(user_id)
) ENGINE=InnoDB;

-- ------------------------------------------------------------------------------
-- 8. AUDIT LOGGING (Immutable)
-- ------------------------------------------------------------------------------

CREATE TABLE audit_logs (
    log_id        BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id       INT NULL,
    action        VARCHAR(100) NOT NULL,         -- e.g. "RESULT_UPDATED"
    entity_type   VARCHAR(50) NOT NULL,          -- e.g. "results"
    entity_id     INT NULL,
    details        JSON NULL,
    ip_address    VARCHAR(45),
    created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
) ENGINE=InnoDB;

-- ------------------------------------------------------------------------------
-- SEED: base roles and sections
-- ------------------------------------------------------------------------------

INSERT INTO roles (role_name) VALUES
 ('super_admin'), ('section_head'), ('teacher'), ('student'),
 ('parent'), ('auditor'), ('public_visitor');

INSERT INTO sections (name) VALUES
 ('creche'), ('nursery'), ('primary'), ('secondary'), ('tertiary');

-- ------------------------------------------------------------------------------
-- USEFUL INDEXES
-- ------------------------------------------------------------------------------

CREATE INDEX idx_results_student ON results(student_id);
CREATE INDEX idx_invoices_student ON invoices(student_id);
CREATE INDEX idx_cbt_sessions_student ON cbt_sessions(student_id);
CREATE INDEX idx_audit_user ON audit_logs(user_id);
CREATE INDEX idx_news_status ON news(status, published_at);
