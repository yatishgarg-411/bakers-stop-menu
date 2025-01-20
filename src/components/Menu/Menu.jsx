import React, { useState } from 'react';
import './Menu.css'
const Menu = () => {
  const [menuItems] = useState([
    {
      id: 1,
      name: 'Chocolate Croissant',
      price: '$4.50',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      name: 'Sourdough Bread',
      price: '$6.00',
      image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      name: 'Blueberry Muffin',
      price: '$3.50',
      image: 'https://images.unsplash.com/photo-1587830506148-b5671c85f074?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      name: 'Apple Pie',
      price: '$18.00',
      image: 'https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ]);

  return (
    <div>
      <section id="menu" className="menu">
        <h2 className="section-title">Our Menu</h2>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} />
              <div className="menu-item-content">
                <h3 className="menu-item-title">{item.name}</h3>
                <p className="menu-item-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
