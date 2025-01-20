import Footer from './components/Footer/Footer'
import Header from './components/Navbar/Header'
import Menu from './components/Menu/Menu'
function App() {
  
  return (
    <>
        <div className="nav-content">
          <Header />
          <Menu />
          <Footer />
        </div>
      <footer className="footer">
        <p>&copy; 2024 Sweet Delights Bakery. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App