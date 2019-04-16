import React from 'react';
import PropTypes from 'prop-types';

function FileNameIcon({ name, type }) {
	return (
		<React.Fragment>
			<FileIcon type={type} />
			<td className="file-name">{name}</td>
		</React.Fragment>
	);
}
FileNameIcon.propTypes = {
	file: PropTypes.object.isRequired
}

function FileIcon({ type }) {
	let icon = 'fa-file';
	if(type === 'folder') {
		icon = 'fa-folder';
	}

	return (
		<td className="file-icon">
			<i className={`fa ${icon}`} />
		</td>
	);
}

export default FileNameIcon;