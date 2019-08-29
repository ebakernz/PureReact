import React from 'react';

const Thumbnail = ({ story }) => (
	<img className="thumbnail"
		alt="thumbnail"
		src={story.thumbnail} />
);

export default Thumbnail;