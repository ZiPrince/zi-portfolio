import './Header.css'
import duck from './assets/duck.gif'
function Header() {
  return (
	<>

    <header className="header">
	  <img src={duck} alt="duck" className="duck" />
	  <img src={duck} alt="duck" className="duck2" />
	  <img src={duck} alt="duck" className="duck3" />


      <div className="logo">ZW</div>

      <nav className="nav">
        <a href="#projects">Projects</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact Me</a>
      </nav>
    </header>
	</>
  )
}

export default Header