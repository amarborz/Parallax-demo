import './App.css'

// images
import moon from './assets/images/moon.png'
import mountainsBack from './assets/images/mountains_behind.png'
import mountainsFront from './assets/images/mountains_front.png'
import stars from './assets/images/stars.png'

// Rellax
import Parallax from 'react-rellax'

import About from './components/About'

function App() {
	return (
		<>
			<div className="parallax">
				<div className="text">
					<h1>A Short Story...</h1>
				</div>
				<Parallax speed={-5}>
					<img src={moon} alt="moon" />
				</Parallax>
				<Parallax speed={1}>
					<img src={mountainsBack} alt="mountains" />
				</Parallax>
				<Parallax speed={-0.2}>
					<img src={mountainsFront} alt="mountains" />
				</Parallax>
				<img src={stars} alt="stars" />
			</div>
			<div className="about">
				<About />
			</div>
		</>
	)
}

export default App
