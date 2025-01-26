
// import React, { useState, useEffect } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// const navItems = [
//   { label: 'Home', href: '#home' },   // Link to hero section
//   { label: 'Menu', href: '#menu1' },   // Link to menu section
//   { label: 'Blog', href: '#blog1' },   // Link to blog section
//   { label: 'Contact', href: '#contact1' }, // Link to contact section
// ];

// function StickyHeader() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         zIndex: (theme) => theme.zIndex.drawer + 1,
//         backgroundColor: '#0b3527',
//         boxShadow: isScrolled ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
//         borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
//         transition: 'all 0.3s ease-in-out',
//       }}
//     >
//       <Toolbar sx={{ justifyContent: 'center' }}>
//       <img src='/font.png'></img>
//       {/* <p>THE BAKER'S STOP</p> */}

//         <Box
//           sx={{
//             boxShadow: '0 .5rem 1rem rgba(0, 0, 0, 0.15)',
//             display: 'flex',
//             gap: 7,
//             backgroundColor: 'white',
//             borderRadius: 20,
//             px: 6,
//             py: 1,
//             margin: 3,
//           }}
//         >
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href} // Use href instead of Link for scrolling
//               style={{ textDecoration: 'none' }}
//             >
//               <Button
//                 sx={{
//                   color: '#555555',
//                   textTransform: 'capitalize',
//                   fontSize: 16,
//                   fontWeight: 600,
//                   '&:hover': {
//                     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                   },
//                 }}
//               >
//                 {item.label}
//               </Button>
//             </a>
//           ))}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default StickyHeader;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Import the custom CSS file

function StickyHeader() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav>
        <div className="logo">
          <img
            src="./logo2.png"
            alt="Baker's Stop Logo"
          />
          <img
            src="./font.png"
            alt="THE BAKER'S STOP"
            className='bks'
          />
        </div>
        
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#menu1">Menu</a>
          <a href="#blog1">Blog</a>
          <a href="#contact-container">Contact Us</a>
        </div>
      </nav>
    </header>
  );
}

export default StickyHeader;
