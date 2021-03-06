import React from 'react';
import Slide from './Slide';

function Homepage({ slides, numSlides, currentSlide, onClickChange }) {

	let productImg = '/assets/product-bottles.png';

	return (
		<div className="Homepage">

			<div className="slide_holder">
			
				<div className="slide_product">
					<div className="product_image" style={{backgroundImage: `url(${productImg})` }}></div>
					{slides.map(slide => (
						<ProductBackground key={slide.id} id={slide.id} productBg={slide.productBgImage} />								
					))}
				</div>
				
				<div className="slide_track">
					{slides.map(slide => (
						<Slide 
							key={slide.id} 
							slide={slide} 
							numSlides={numSlides} 
							currentSlide={currentSlide} />
					))}
				</div>

			</div>

			<div className="slide_nav">
				{slides.map(slide=> (
					<SlideNav key={slide.id} index={slide.id - 1} current={currentSlide} onClick={onClickChange}>{slide.id}</SlideNav>
				))}
			</div>

		</div>
	);
	
}

const ProductBackground = ({ id, productBg }) => {
	if(productBg !== '') {
		return (
			<div className="product_bg" data-slide={id} style={{ backgroundImage: `url(${ productBg })` }}></div>
		);
	} else {
		return (
			null
		);
	}
}

class SlideNav extends React.Component {

	handleClick = () => {
		this.props.onClick(this.props.index);
	}

	render() {
		let { current } = this.props;
		let slideID = this.props.children;
		let isCurrent = slideID === current + 1;

		return (
			<a onClick={this.handleClick} className={`slide_button${isCurrent ? ' active' : ''}`}></a>
		);
	}
}

export default Homepage;