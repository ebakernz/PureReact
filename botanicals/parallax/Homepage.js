import React from 'react';
import Slide from './Slide';

function Homepage({ slides }) {

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
					{slides.map((slide, index, {length}) => (
						<Slide 
							key={slide.id} 
							slide={slide} 
							index={index} 
							length={length} />
					))}
				</div>

			</div>

			<div className="slide_nav">
				{slides.map(slide=> (
					<span key={slide.id} className="slide_button<% if First %> active<% end_if %>"></span>
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

export default Homepage;