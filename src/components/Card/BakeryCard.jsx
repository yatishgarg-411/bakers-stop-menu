// import React, { useState } from 'react';
// import './BakeryCard.css';

// const BakeryCard = ({ image, name, price }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className="bakery-card"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <img src={image} alt={name} className="bakery-card-image" />
//       {hovered && (
//         <div className="bakery-card-overlay">
//           <h3>{name}</h3>
//           <p>${price.toFixed(2)}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BakeryCard;
// import React, { useState } from 'react';
// import './BakeryCard.css';

// const BakeryCard = ({ image, name, description }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className="bakery-card"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <img src={image} alt={name} className="bakery-card-image" />
//       {hovered && (
//         <div className="bakery-card-overlay">

//           <h3>{name}</h3>
//           <p>{description}</p>
//         </div>
//       )}
//       {!hovered && (
//         <button className="bakery-card-button">ORDER NOW</button>
//       )}
//     </div>
//   );
// };

// export default BakeryCard;
import React from 'react';
import './BakeryCard.css';

const BakeryCard = ({ image, name, price }) => {
  return (
    <div className="card-container">
      <div className="card-box">
        <div className="card-content">
          <h3 className="card-title">{name}</h3>
        </div>
        <img src={image} alt={name} className="card-image" />
        <button className="order-button">${price.toFixed(2)}</button>
      </div>
    </div>
  );
};

export default BakeryCard;
