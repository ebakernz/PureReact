import React from 'react';
import throttle from 'lodash.throttle';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Homepage from './Homepage';
import Shop from './Shop';

import { slides } from './static-data';

class App extends React.Component {

	state = {
		activeTab: 0,
		currentSlide: 0,
		numSlides: slides.length,
		showMenu: false
	}

	componentDidMount() {
		window.addEventListener('wheel', throttle(this.handleScroll, 1000));
	}

	componentWillUnmount() {
		window.addEventListener('wheel', throttle(this.handleScroll, 1000));
	}

	handleTabChange = (index) => {
		this.setState({
			activeTab: index
		});
	}

	handleMenuToggle = () => {
		this.setState({
			showMenu: !this.state.showMenu
		});
	}

	// Handle click on the slide nav
	handleClickEvent = (index) => {
		this.setState({
			currentSlide: index
		});
	}

	handleScroll = (e) => {
		let scrollSensitivitySetting = 20; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
		let delta = 0;
		let { currentSlide, numSlides } = this.state;
		const isFirefox = window.navigator.userAgent.indexOf('Firefox') != -1;

		if(e.type === 'wheel') {
			if( isFirefox ) {
				delta = e.deltaY * (-120);
			} else {
				delta = e.wheelDelta;
			}
		}

		if(e.type === 'scroll') {
			// for touch devices
			// set delta to next or previous slide based on direction of scroll
		}

		if(delta <= -scrollSensitivitySetting) {
			// down scroll
			if( currentSlide !== numSlides - 1 ) {
				currentSlide++;
				this.setState({
					currentSlide: currentSlide++
				});
			}
		}

		if(delta >= scrollSensitivitySetting) {
			// up scroll
			if(currentSlide !== 0) {
				currentSlide--;
				this.setState({
					currentSlide: currentSlide--
				});

			}
		}
		
	}

	renderContent() {
		let { currentSlide, numSlides } = this.state;

		switch(this.state.activeTab) {
			case 0: return <Homepage slides={slides} numSlides={numSlides} currentSlide={currentSlide} onClickChange={this.handleClickEvent} />;
			case 1: return <Shop />;
		}
	}

	render() {
		let { activeTab, currentSlide, numSlides } = this.state;
		let isBottom = currentSlide === numSlides - 1;

		const { showMenu } = this.state;

		return (

			<div className="page-wrapper">

				<Header activeTab={activeTab} onTabChange={this.handleTabChange} menuTrigger={this.handleMenuToggle} isBottom={isBottom} showMenu={showMenu} />
				
				<main className="page-body">
					<div className="page-body__inner">
						{this.renderContent()}
					</div>
				</main>

				<Footer />
				
			</div>
		);
	}
}

export default App;