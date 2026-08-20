# Grace-City-International-School
A school College Website/Portal
# Grace City International School Portal
### Role Function Reference — Admin, Staff & Student

This README summarizes the functions available to the **Admin**, **Staff (Teacher)**, and **Student** roles within the Grace City International School Portal, derived from the system requirements specification. The portal spans five levels (Creche, Nursery, Primary, Secondary, Tertiary) and uses Role-Based Access Control (RBAC) to isolate what each user type can see and do.

---

## 1. Admin (Super Admin / Section Head)

Admins have the highest level of access, covering system configuration, academics, finance, HR, and public-facing content.

### System & Security
- Manage Role-Based Access Control (assign permissions for Section Head, Teacher, Student, Parent, Auditor, Public Visitor)
- View immutable audit logs for all academic, financial, and administrative actions
- Manage data encryption/SSL settings and certificate renewal status
- Configure and monitor automated daily backups (30-day retention) and disaster recovery
- Generate inspection-ready compliance and Quality Assurance (QA) reports

### Academic Administration
- Access unified, longitudinal student profiles (Creche through Tertiary)
- Manage multi-semester result records and generate transcripts (WAEC/IGCSE for Secondary, Credit Units for Tertiary)
- Access the Central Academic Records Archive (digital vault for past students)
- View real-time academic performance dashboards (pass/fail ratios, subject trends, teacher performance)
- Configure the early warning system for at-risk students
- Approve/reject uploaded question papers via examination workflow controls
- Customize grading scales per school section
- Manage the JAMB CBT Question Bank and configure Mock Exam sessions
- Set IP restrictions, anti-cheat logging, and lockdown browser rules for CBT exam centers
- Run digital QA checklists for classroom inspections

### HR, Finance & Assets
- Manage staff recruitment, onboarding, payroll, and performance appraisals
- Track CBT hardware and general school asset inventory
- Configure fee structures (one-off and installment plans)
- Manage online payment gateway integration (Paystack, Flutterwave, Remita)
- Generate automated invoices/receipts with QR codes
- View real-time revenue dashboards and financial audit trails

### Communications & Public Website
- Publish and manage homepage hero slider content (images, videos, CTAs)
- Create, categorize, and feature News & Announcements (with archive/search)
- Manage the interactive event calendar (color-coded by section, RSVP forms)
- Upload and organize Media Gallery albums (photos, YouTube/Vimeo videos)
- Manage admissions inquiry forms, auto-responses, and downloadable prospectus/brochures
- Configure virtual tour content (360° photos/video walkthroughs)
- Manage multilingual toggle and auto-translation settings
- Manage social media feed integrations and sharing buttons
- Maintain the public staff directory
- Manage department-specific contact forms and Google Maps/location info
- Send bulk SMS, email, and push notifications for emergencies or announcements
- Post to the section-specific Digital Notice Board
- Access onboarding/training materials and manage staged deployments

---

## 2. Staff (Teacher)

Staff accounts are scoped to their assigned classes/subjects, with access to teaching, grading, and communication tools.

### Academic Functions
- View and update student profiles for assigned classes
- Enter and manage results/grades within the multi-semester result system
- Upload examination question papers for approval
- Use automated grading tools for objective (multiple-choice) tests
- View performance analytics for their own classes/subjects (pass/fail ratios, trends)
- Flag or receive alerts from the early warning system for at-risk students
- Access the Question Bank Manager to build/select CBT-style questions (where permitted)
- Proctor/monitor Mock Exam sessions and view anti-cheat logs (tab-switching, copy-paste attempts)

### Communication
- Post announcements to the Digital Notice Board (section-specific)
- Use Internal Messaging for secure chat with other staff/administration
- Communicate with parents/students through the Parent/Student Portal messaging tools
- Contribute content to News & Announcements (subject to admin approval, where configured)

### Training & Tools
- Access onboarding video tutorials and digital user manuals
- Access CBT Center training modules (for staff managing JAMB CBT operations)
- Access Content Management training (for staff who update News/Events/Galleries)

---

## 3. Student

Students access a mobile-responsive personal portal plus the CBT exam environment.

### Academic Access
- View personal unified student profile and academic history
- View results/grades across semesters
- Download/view transcripts (where enabled for their level)
- View performance feedback and early-warning notices addressed to them

### JAMB CBT & Exams
- Take timed exams via the secure lockdown CBT browser
- Attempt Mock Exams simulating the real JAMB UTME environment
- Continue exams using offline-first local caching during internet fluctuations
- Operate within IP-restricted, anti-cheat-monitored exam sessions (tab-switch detection, copy-paste disabled)

### Portal & Communication
- View fees, invoices, and payment status; pay fees via the online payment gateway
- Download auto-generated receipts (with QR codes)
- View homework and class updates via the Parent/Student Portal
- Receive bulk SMS, email, and push notifications
- View the Digital Notice Board for their section
- Use secure internal messaging to communicate with staff (where enabled)
- View public-facing content: news, events, calendar, and media gallery

### Admissions (Prospective Students)
- Submit online inquiry/application forms
- Receive auto-response confirmation emails
- Download prospectus/brochure (PDF)
- Access virtual tour content (360° photos/video walkthroughs)

---

## Notes
- **Parent** and **Auditor** roles exist in the system's RBAC model but are outside the scope of this document, which focuses on Admin, Staff, and Student functions only.
- Feature availability may vary slightly by school level (Creche, Nursery, Primary, Secondary, Tertiary) due to the multi-tenant, level-isolated data architecture.
- This document is derived from the project's requirements specification and reflects planned/intended functionality, not a confirmed built feature list.
