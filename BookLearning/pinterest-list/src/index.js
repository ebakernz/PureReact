import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './index.css';

function HomePage({ content }) {
	return (
		<div className="container">
		
		<div className="header">

			<div className="banner" style={{backgroundImage: 'url(' + content.banner + ')'}}>
			</div>

			<div className="inner">

				<div className="branding">
					<div className="logo">
						<img src={content.logo} />
					</div>
					<h1>{content.title}</h1>
					<h4><strong>{content.monthlyView}</strong> monthly viewers</h4>
					
					<h4 className="website">
						<i className="fa fa-globe" />
						<strong>{content.website}</strong>
					</h4>
					<h4 className="slogan">{content.slogan}</h4>
					
					<Nav>
						<NavItem url="/">Overview</NavItem>
						<NavItem url="/boards">Boards</NavItem>
						<NavItem url="/pins" active="current">Pins</NavItem>
						<NavItem url="/followers">Followers</NavItem>
						<NavItem url="/following">Following</NavItem>
					</Nav>

					<h5>{content.pinsTotal} Pins</h5>

				</div>
			
			</div>
		</div>
		<div className="content">

			<Pins pins={content.pins} />

		</div>
		<div className="footer">

		</div>

		</div>
	);
}

function Pins({ pins }) {
	return (
		<div className="pins">
			{pins.map(pin => (
				<a href={pin.link} className="pin" key={pin.id}>
					<div className="pin_image">
						<img src={pin.imageUrl} />
					</div>
					<h1>{pin.title.substring(0, 49)}...</h1>
				</a>
			))}		
		</div>
	);
}

function Nav({ children }) {
	let items = React.Children.toArray(children);
	return (
		<nav>
			<ul>
				{items}
			</ul>
		</nav>
	);
}

function NavItem({ children, url, active }) {
	return (
		<li><a href={url} className={active}>{children}</a></li>
	);
}

var pinPage = {
	id: 1,
	title: 'Apartment Therapy',
	website: 'apartmenttherapy.com',
	logo: 'images/Apartment_Therapy_Logo.png',
	banner: 'https://static.adweek.com/adweek.com-prod/wp-content/uploads/2017/08/apartment-therapy-PAGE-2017.jpg',
	slogan: 'Saving the world, one room at a time',
	pinsTotal: '95,772',
	monthlyView: '10m+',
	pins: [
		{
			id: 1,
			title: 'How to Design Your Home\'s Interiors to Positively Affect You',
			link: 'https://www.pinterest.nz/pin/55028426682304229/',
			imageUrl: 'https://i.pinimg.com/564x/39/e5/9c/39e59c80d8b3b2bbf24d4bf9eaf5feb1.jpg'
		},
		{
			id: 2,
			title: 'A DIY Remodeled RV Is a Cute Bohemian Bungalow on Wheels',
			link: 'https://www.pinterest.nz/pin/55028426682304075/',
			imageUrl: 'https://i.pinimg.com/564x/53/87/04/5387046c1753b0a50925165a6bb1ddff.jpg'
		},
		{
			id: 3,
			title: 'This Fun Home Has a Pink Kitchen and an Indoor Skate Ramp',
			link: 'https://www.pinterest.nz/pin/55028426682303823/',
			imageUrl: 'https://i.pinimg.com/564x/49/11/67/491167a3dfad1e71a2e3cd6f16738617.jpg'
		},
		{
			id: 4,
			title: 'This Fun Home Has a Pink Kitchen and an Indoor Skate Ramp',
			link: 'https://www.pinterest.nz/pin/55028426682303691/',
			imageUrl: 'https://i.pinimg.com/564x/89/dd/62/89dd6204a4c2c6b481750f0071576704.jpg'
		}
	]
}



ReactDOM.render(<HomePage content={pinPage} />, document.getElementById('root'));