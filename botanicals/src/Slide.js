import React from 'react';

function Slide({ slide, numSlides, currentSlide }) {

	let isBeforeCurrent = slide.id < currentSlide + 1;
	let isAfterCurrent = slide.id > currentSlide + 1;
	let isActive = slide.id === currentSlide + 1;
	let isLast = slide.id === numSlides;

	return (
		<div className={`slide${isLast ? ' slide_video_full' : ''}${isActive ? ' active' : ''}${isBeforeCurrent ? ' down-scroll' : ''}${isAfterCurrent ? ' up-scroll' : ''}`}>

	        <SlideImage background={slide.backgroundImage} video={slide.backgroundVideo} />

	        <div className="slide_right">

	        	<div className="slide_content">
	            									
					<h1 className="slide_title title_one">{slide.title1}</h1>
					<h1 className="slide_title title_two">{slide.title2}</h1>
				
					<div className="slide_text">
						<p>{slide.content}</p>
					</div>

				</div>				
				
	        </div>

	    </div>
	);
}

const SlideImage = ({ background, video }) => (
	<div className="slide_image" style={{ backgroundImage: `url(${background})` }}>	
		{ video !== '' && 
			<SlideVideo poster={background} video={video} />
		}
	</div>
);

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