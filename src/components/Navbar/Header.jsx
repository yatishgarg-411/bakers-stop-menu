// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Header.css";

// function Header() {
//   const navigate = useNavigate();

//   return (
//     <header>
//       <nav>
//         <a href="#features" className="nav-link">Menu</a>
//         <div className="logo">
//           <img src="./Logo2.png" alt="Baker's Stop Logo" />
//         </div>
//         <a href="#footer" className="nav-link contact-link">Contact Us</a>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">
      {/* Header Section */}
      <header className="hero-header">
        <nav>
          {/* Left Aligned Link */}
          <a href="#features" className="nav-link">Menu</a>
          
          {/* Center Aligned Logo */}
          <div className="logo">
            <img src="./Logo2.png" alt="Baker's Stop Logo" />
          </div>
          
          {/* Right Aligned Link */}
          <a href="#footer" className="nav-link contact-link">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero-content">
        <h1 className="slider-content__title">THE<br /> BAKER'S <br />STOP</h1>
        <h2>We seek to satisfy the world's appetite</h2>
      </div>
    </section>
  );
}

export default Header;
