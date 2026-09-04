import React from 'react';

const SchoolMealsPage = () => {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>School <span className="accent">Meals</span></h1>
          <p>Nutritious and delicious meals prepared fresh daily for our students.</p>
        </div>
      </div>

      <section style={{ padding: 'var(--section-py) 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div style={{ marginBottom: '60px' }}>
            <span className="section-label">Nutrition & Dining</span>
            <h2 style={{ marginBottom: '24px' }}>Fueling Young <span className="accent">Minds</span></h2>
            <p style={{ marginBottom: '16px', lineHeight: '1.8' }}>
              At Grace City International School, we understand that a balanced diet is essential for physical development and cognitive function. Our culinary team prepares fresh, healthy, and culturally diverse meals daily in our state-of-the-art kitchens.
            </p>
            <p style={{ marginBottom: '16px', lineHeight: '1.8' }}>
              We cater to various dietary requirements including vegetarian, vegan, gluten-free, and specific allergies. If your child has special dietary needs, please register this information with the school office at the beginning of the term.
            </p>
          </div>

          <div>
            <h2 style={{ marginBottom: '24px', color: 'var(--primary)' }}>Sample Weekly Menu</h2>
            <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'var(--primary)', color: 'var(--white)' }}>
                    <th style={{ padding: '16px', borderBottom: '1px solid var(--border)' }}>Day</th>
                    <th style={{ padding: '16px', borderBottom: '1px solid var(--border)' }}>Mid-Morning Snack</th>
                    <th style={{ padding: '16px', borderBottom: '1px solid var(--border)' }}>Lunch (Main)</th>
                    <th style={{ padding: '16px', borderBottom: '1px solid var(--border)' }}>Vegetarian / Alternative</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px', fontWeight: 600 }}>Monday</td>
                    <td style={{ padding: '16px' }}>Fresh Fruit Salad & Yogurt</td>
                    <td style={{ padding: '16px' }}>Jollof Rice with Grilled Chicken & Plantains</td>
                    <td style={{ padding: '16px' }}>Vegetable Fried Rice with Tofu</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-light)' }}>
                    <td style={{ padding: '16px', fontWeight: 600 }}>Tuesday</td>
                    <td style={{ padding: '16px' }}>Oatmeal Cookies & Milk</td>
                    <td style={{ padding: '16px' }}>Spaghetti Bolognese with Garlic Bread</td>
                    <td style={{ padding: '16px' }}>Lentil & Mushroom Bolognese</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px', fontWeight: 600 }}>Wednesday</td>
                    <td style={{ padding: '16px' }}>Apple Slices & Cheese</td>
                    <td style={{ padding: '16px' }}>Pounded Yam with Egusi Soup & Fish</td>
                    <td style={{ padding: '16px' }}>Egusi Soup with Assorted Mushrooms</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-light)' }}>
                    <td style={{ padding: '16px', fontWeight: 600 }}>Thursday</td>
                    <td style={{ padding: '16px' }}>Carrot Sticks & Hummus</td>
                    <td style={{ padding: '16px' }}>Roast Beef with Mashed Potatoes & Gravy</td>
                    <td style={{ padding: '16px' }}>Stuffed Bell Peppers with Quinoa</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px', fontWeight: 600 }}>Friday</td>
                    <td style={{ padding: '16px' }}>Banana Bread</td>
                    <td style={{ padding: '16px' }}>Fish and Chips with Garden Peas</td>
                    <td style={{ padding: '16px' }}>Crispy Halloumi & Sweet Potato Fries</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              * A fresh salad bar and a selection of seasonal fruits are available every day at lunchtime.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default SchoolMealsPage;
