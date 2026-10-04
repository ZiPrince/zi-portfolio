import { useState, useEffect} from 'react'
import './App.css'
import Zi from './assets/headshot.jpg'
import Header from './Header'
import CharlieVid from './assets/cxmPreview-DcNfuDgd.mp4'
import LukeVid from './assets/rootedstrength-Dqw_8IGy.mp4'
import kirby from './assets/kirby.png'

function App() {

	const [showKirby, setShowKirby] = useState(false)

	useEffect(() => {
	const observer = new IntersectionObserver(([entry]) => {
		if (entry.isIntersecting) setShowKirby(true)
	})

	const el = document.querySelector('.kirby')
	if (el) observer.observe(el)

	return () => observer.disconnect()
	}, [])


  return (
    <>
	
		<div className='container'>
			<div className='innerContainer'>
				<Header />
				<div className='nameJobPicContainer'>
					<div className='nameAndTitle nameAnimation'>
						Zi Wang
						<div className='heading'>React Web Developer</div>	
					</div>
					<div className='flex'>
						<img className='profilePicSize profilePic' src={Zi} /> 
					</div>
				</div>
				

				<div className='innerContainer2'>

					<section id="projects">
						<div className='headingBig'>Projects</div>

						<div className='videoBackground'>
						
							<div className='heading'>CXM Law Office</div>
							<div>		
								<a
									className="projectLink"
									href="https://cxmlaw.com"
									target="_blank"
									rel="noopener noreferrer"
								>
								Visit Website 💖 
							</a></div>
								<video
									className="charlie"
									src={CharlieVid}
									controls
									preload="metadata"
								/>
						</div>

						<div className='heading'>Rooted Strength </div>
						<div>		
							<a
								className="projectLink"
								href="https://rootedstrength.ca"
								target="_blank"
								rel="noopener noreferrer"
							>
								Visit Website 💖 
							</a>
						</div>
						<video 
							src={LukeVid} 
							className='charlie'
							autoPlay muted loop playsInline 
						/>

					</section>

					<section id="about">
						<div className='heading'>About Me</div>
						<div className='flex' style={{margin: '0px 30px 20px 30px'}}>
							<img
								src={kirby}
								className={`kirby ${showKirby ? 'showKirby' : ''}`}
							/>
							<div>Currently playing: Little Witch in the Woods, and Kirby & the Forgotten Land.</div>
						</div>

						<div style={{margin: '0px 30px 10px 30px', lineHeight: '2.4' }}>
							<div>I build React websites that are clean, interactive, and a little more fun than they need to be. </div>
							<div>Previously at OMERS building financial/data apps; 10/10 experience. Made many new friends.</div>
							<div>(That's also where I got my cool headshot from)...</div>
							<div>Now teaching at TDSB and building sites for small businesses for fun.</div>
						</div>
					</section>

					<section id="contact">
						<div className='heading'>Contact Me</div>
					</section>
				</div>

			</div>
		</div>
    
    </>
  )
}

export default App
