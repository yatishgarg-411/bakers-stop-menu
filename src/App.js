import Header from './components/Navbar/Header'
import Menu from './components/Menu/Menu'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  
  return (
    <div className='app-container'> 
        <div className="nav-content">
          <Header />
          <Hero />
          <Menu />
          <Blog />
          <Contact />
        </div>
        <footer className="f1">
          <p style={{ color: 'black', zIndex: 7 }}>
            &copy; 2024 Sweet Delights Bakery. All rights reserved.
          </p>
        </footer>
       

    </div>
  )
}

export default App