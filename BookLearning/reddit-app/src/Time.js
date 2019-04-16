import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Time = ({ time, isUnixTime }) => {
	return (
		<span className="post-time">{computeTimestring(time, isUnixTime)}</span>
	);
}
Time.propTypes = {
	time: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	isUnixTime: PropTypes.bool
}

const computeTimestring = ({ time, isUnixTime }) => {
	if(isUnixTime) {
		return moment.unix(time).fromNow();
	} else {
		return moment(time).fromNow();
	}
}

export default Time;