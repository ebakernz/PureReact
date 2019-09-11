import React from 'react';

function Slide({ slide }) {
	return (
		<div className="slide cf">
			<SlideImage background={slide.backgroundImage} video={slide.backgroundVideo} />

			<div className="slide_right">
				<div className="slide_content">
					<h1>{slide.title1}</h1>
					<h1>{slide.title2}</h1>
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

const SlideVideo = ({ video, background }) => (
	<div className="video_container">
		<video className="bg-video" preload="auto" autoPlay="autoplay" loop="loop" muted="muted" playsInline="playsinline" volume="0" poster={background} height="100%">
			<source src={video} type="video/mp4" />
			Your browser does not support the video tag.		
		</video>
	</div>
);

export default Slide;