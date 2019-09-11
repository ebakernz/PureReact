import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage';
import './index.scss';

const slides = [
	{
		id: 1,
		title1: 'For your',
		title2: 'soul',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, nisl vel pellentesque imperdiet, risus tortor dictum erat, sed lacinia elit augue nec felis.',
		buttonText: '',
		buttonLink: '',
		backgroundVideo: '/src/videos/stillbotanicals_video_half.mp4',
		backgroundImage: '/assets/video-leaf.png',
		productBgImage: ''
	},
	{
		id: 2,
		title1: 'Irresistable',
		title2: 'aroma',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, nisl vel pellentesque imperdiet, risus tortor dictum erat, sed lacinia elit augue nec felis.',
		buttonText: '',
		buttonLink: '',
		backgroundVideo: '',
		backgroundImage: '/assets/iStock-946028290-2__ScaleWidthWzUwMF0.png',
		productBgImage: '/assets/product-cutout-large.png'
	},
	{
		id: 3,
		title1: 'Infused by',
		title2: 'steam',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, nisl vel pellentesque imperdiet, risus tortor dictum erat, sed lacinia elit augue nec felis.',
		buttonText: '',
		buttonLink: '',
		backgroundVideo: '',
		backgroundImage: '/assets/iStock-1159966852-2__ScaleWidthWzUwMF0.png',
		productBgImage: ''
	},
	{
		id: 4,
		title1: 'View our',
		title2: 'range',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, nisl vel pellentesque imperdiet, risus tortor dictum erat, sed lacinia elit augue nec felis.',
		buttonText: 'View all products',
		buttonLink: 'http://shopify.com',
		backgroundVideo: '/src/videos/stillbotanicals_video.mp4',
		backgroundImage: 'assets/video-leaf-fullscreen.png',
		productBgImage: ''
	}
];

ReactDOM.render(<Homepage slides={slides} />, document.querySelector('#root'));

export default Homepage;