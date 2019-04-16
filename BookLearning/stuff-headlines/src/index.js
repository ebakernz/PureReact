import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Time from './time.js';
import './index.css';

function Headlines({ files }) {
	return (
		<div className="news-list">
			<h2>latest news headlines</h2>

			{files.map(file => (
				<HeadlineListItem key={file.id} file={file} />
			))}

		</div>
	);
}
Headlines.propTypes = {
	files: PropTypes.array
}

function HeadlineListItem({ file }) {
	return (
		<li className="headline-item">
			<Time time={file.published_at} format='h:mm a' />
			<Link text={file.title} url={file.url} />
			<Author name={file.author} />
			<FileIcon type={file.type} />
		</li>
	);
}
HeadlineListItem.propTypes = {
	file: PropTypes.object.isRequired
}

const Link = ({text, url}) => (
	<a className="title" href={url}>
		{text}
	</a>
);
Link.propTypes = {
	text: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
}


const Author = ({ name }) => (
	<span className="author">
		{name}
	</span>
);
Author.propTypes = {
	name: PropTypes.string
}

function FileIcon({ type }) {
	let iconType = 'file';
	if(type === 'video') {
		iconType = 'play-circle';
	}
	if(type === 'images') {
		iconType = 'images';
	}
	return (
		<span className="icon">
			<i className={`fa fa-${iconType}`} />
		</span>
	);
}

const newsFeed = [
	{
		id: 1,
		title: 'An alcohol experiment worth trying',
		link: 'https://www.stuff.co.nz/life-style/well-good/inspire-me/109792044/the-alcohol-experiment-how-to-fix-your-relationship-with-booze-in-30-days',
		type: 'video',
		published_at: "2019-01-08 14:17:00",
		author: 'Judith Woods'
	},
	{
		id: 2,
		title: 'Freedom camping chaos calmed',
		link: 'https://www.stuff.co.nz/taranaki-daily-news/news/109783402/new-restrictions-calm-freedom-camping-chaos-around-new-plymouth-district',
		type: 'images',
		published_at: "2019-01-08 14:10:00",
		author: 'Leighton Keith'
	},
	{
		id: 3,
		title: 'Space junk Saturday',
		link: 'https://www.stuff.co.nz/national/109785238/the-reason-behind-the-meteor-that-lit-up-new-zealand-skies',
		type: 'video',
		published_at: "2019-01-08 13:57:00"
	}
];

ReactDOM.render(<Headlines files={newsFeed}/>, document.getElementById('root'));