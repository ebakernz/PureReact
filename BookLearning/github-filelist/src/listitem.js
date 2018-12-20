import React from 'react';
import PropTypes from 'prop-types';
import Time from './time';

const FileListItem = ({ file }) => (
	<tr className="file-list-item">		
		<td className="file-icon"><FileIcon file={file} /></td>
		<td><FileName file={file} /></td>
		<td className="commit-message"><CommitMessage commit={file.latestCommit} /></td>
		<td className="age"><Time time={file.updated_at} /></td>
	</tr>
);
FileListItem.propTypes = {
	file: PropTypes.object.isRequired
}

function FileIcon({ file }) {
	let icon = 'fa-file';
	if(file.type === 'folder') {
		icon = 'fa-folder';
	}

	return (		
		<i className={`fa ${icon}`} />
	);
}

function FileName({ file }) {
	return (
		<span>{file.name}</span>
	);
}
FileName.propTypes = {
	file: PropTypes.object.isRequired
};

const CommitMessage = ({ commit }) => (
	<span>
		{commit.message}
	</span>
);
CommitMessage.propTypes = {
	commit: PropTypes.object.isRequired
}

export default FileListItem;