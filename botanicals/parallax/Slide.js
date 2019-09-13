import React from 'react';
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';

function Slide({ slide, index, length }) {

	let backgroundWidth = (index + 1 === length ? '100%': '50%');
	let isLast = index + 1 === length;

	return (
		<div className={
			isLast ? 'slide slide_video_full' : 'slide'
		}>

	        <ParallaxBanner 
	        	className="slide_image" 
	        	layers={[
	        		{
	        			image: slide.backgroundImage,
	        			amount: 0.5
	        		},
	        		{
	        			children: <SlideVideo video={slide.backgroundVideo} background={slide.backgroundImage} />,
	        			amount: 0.5
	        		}
        		]} 
        		style={{
        			height: '100%',
        			width: backgroundWidth
        		}}
        	>
	        </ParallaxBanner>

	        <div className="slide_right">

	        	<div className="slide_content">
	            
		            <Parallax y={[-50,50]}>										
						<h1 className="slide_title title_one">{slide.title1}</h1>
						<h1 className="slide_title title_two">{slide.title2}</h1>
					</Parallax>
						
					<Parallax y={[-60,60]} className="slide_text">
						<p>{slide.content}</p>
					</Parallax>

				</div>				
				
	        </div>

	    </div>
	);
}

const SlideVideo = ({ video, background }) => {
	if( video !== '' ) {
		return (
			<div className="video_container">
				<video className="bg-video" preload="auto" autoPlay="autoplay" loop="loop" muted="muted" playsInline="playsinline" volume="0" poster={background} height="100%">
					<source src={video} type="video/mp4" />
					Your browser does not support the video tag.		
				</video>
			</div>
		);
	} else {
		return (null);
	}
}

export default Slide;