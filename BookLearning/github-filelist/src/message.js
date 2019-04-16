import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ text }) => (
	<td className="commit-message">{text.message}</td>
);
Message.propTypes = {
	commit: PropTypes.object.isRequired
}

export default Message;