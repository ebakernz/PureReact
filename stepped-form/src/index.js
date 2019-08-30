import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

const Filename = ({ file }) => {
	const typeIcon = getFileIcon(file.type);
	const faIcon = `fa ${typeIcon}`;
	return (
		<h3><i className={faIcon} />{file.name}</h3>
	);
};

function getFileIcon(type) {
	if(type == 'pdf') {
		return (
			'fa-file-pdf-o'
		);
	} else {
		return null;
	}
}

const Time = ({ time }) => {
	const timeString = moment(time).fromNow();
	return (
		<span className="time">{timeString}</span>
	);
}

const ListItem = ({ listItem }) => {
	return (
		<div className="file-list-item">
			<div className="col w1x4">
				<Filename file={listItem.file} />
			</div>
			<div className="col w1x2">
				<p>{listItem.message}</p>
			</div>
			<div className="col w1x4">
				<Time time={listItem.timestamp} />
			</div>
		</div>
	);
}

function FileList({ list }) {
	return (
		<div className="file-list">
			<ListItem listItem={list} />
		</div>
	);
}

const sampleList = {
	file: {
		type: 'pdf',
		name: 'Example'
	},
	message: 'Update doc to use new structure.',
	timestamp: "2016-07-30 21:24:37"
}

ReactDOM.render(<FileList list={sampleList} />, document.querySelector('#root'));