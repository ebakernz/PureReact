import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Time = ({ time, format }) => {
	const timeString = moment(time).format(format);
	return (
		<span className="time">{timeString}</span>
	);
}

Time.propTypes = {
	time: PropTypes.string
}

export default Time;