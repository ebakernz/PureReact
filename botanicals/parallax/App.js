import React from 'react';

import { ParallaxProvider } from 'react-scroll-parallax';
import { slides } from './static-data';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Homepage from './Homepage';
import Shop from './Shop';

class App extends React.Component {

	state = {
		activeTab: 0,
		prevScrollpos: window.pageYOffset,
		scrolled: false,
		atBottom: false
	}

	handleTabChange = (index) => {
		this.setState({
			activeTab: index
		});
	}

	componentDidMount() {
		window.addEventListener('wheel', this.handleScroll);
	}

	componentWillUnmount() {
		window.addEventListener('wheel', this.handleScroll);
	}

	handleScroll = (e) => {

	//	const { prevScrollpos } = this.state;

		console.log(e.wheelDelta);

		const currentScrollpos = window.pageYOffset;

	//	console.log(currentScrollpos);
		const scrolled = currentScrollpos > 100;

	//	console.log(scrolled);

		this.setState({
			prevScrollpos: currentScrollpos,
			scrolled
		});

		if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
		//	console.log('bottom');
			this.setState({
				atBottom: true
			});
		}

		if(window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
		//	console.log('not bottom');
			this.setState({
				atBottom: false
			});
		}
	}

	renderContent() {

		switch(this.state.activeTab) {
			case 0: return <Homepage slides={slides} />;
			case 1: return <Shop />;
		}
	}

	render() {
		let { activeTab, atBottom } = this.state;

		return (
			<ParallaxProvider>

				<div className="page-wrapper">

					<Header activeTab={activeTab} onTabChange={this.handleTabChange} isBottom={atBottom} />
					
					<main className="page-body">
						<div className="page-body__inner">
							{this.renderContent()}
						</div>
					</main>

					<Footer />
					
				</div>

			</ParallaxProvider>
		);
	}
}

export default App;