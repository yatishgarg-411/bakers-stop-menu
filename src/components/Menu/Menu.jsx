// import React from 'react';
// import BakeryCard from '../Card/BakeryCard';
// import './Menu.css';

// const items = [
//   { id: 1, image: '/images/cupcake.jpg', name: 'Cupcake', price: 4.99 },
//   { id: 2, image: '/images/muffin.jpg', name: 'Muffin', price: 3.49 },
//   { id: 3, image: '/images/croissant.jpg', name: 'Croissant', price: 5.99 },
//   { id: 4, image: '/images/donut.jpg', name: 'Donut', price: 2.99 },
// ];

// const Menu = () => {
//   return (
//     <div className="menu">
//       <h2 className="section-title_title">OUR PRODUCTS</h2>
//       <div className="menu-grid">
//         {items.map((item) => (
//           <BakeryCard
//             key={item.id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;
import React, { useState } from 'react';
import BakeryCard from '../Card/BakeryCard';
import './Menu.css';

const items = [
  { id: 1, image: '/images/cupcake.jpg', name: 'Cupcake', price: 4.99, category: 'Cupcake' },
  { id: 2, image: '/images/muffin.jpg', name: 'Muffin', price: 3.49, category: 'Muffin' },
  { id: 3, image: '/pastry.jpeg', name: 'Croissant', price: 5.99, category: 'Pastry' },
  { id: 4, image: '/images.jpeg', name: 'Donut', price: 2.99, category: 'Waffle' },
  { id: 5, image: '/images/tart.jpg', name: 'Tart', price: 6.49, category: 'Tart' },
  { id: 6, image: '/b.png', name: 'Cake', price: 6.49, category: 'Cake' },
];

const categories = ['All', 'Cupcake', 'Pastry', 'Muffin', 'Waffle', 'Tart'];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="menu" id="menu1">
      <h2 className="section-title_title">OUR PRODUCTS</h2>

      {/* Filter Bar */}
      <div className="filter-bar">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${
              selectedCategory === category ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Scrollable Menu Grid */}
      <div className="menu-grid">
        {filteredItems.map((item) => (
          <BakeryCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
