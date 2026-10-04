import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Contact.css'
import SmallB1 from './assets/smallb1.jpg'
import SmallB2 from './assets/smallb2.jpg'
import BigB from './assets/bigb1.jpg'


function Contact() {
  return (<>
    <section id="contact" className="contact">

	  <div style={{marginBottom: '30px'}}> ...one of my lovely secretaries will get back to you very soon: </div>
	  <div>
	  	<img src={SmallB1} className='cat'/>
		<img src={SmallB2} className='cat' />
		<img src={BigB} className='bigcat' />

	  </div>

      <div className="contactIcons">
        <a
          href="https://www.linkedin.com/in/zi-wang-bb4b3169/?isSelfProfile=true"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:zeewang24@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>

    </section>
	<footer className="footer">
		© 2026 Zi Wang
	</footer>
	</>
  )
}

export default Contact