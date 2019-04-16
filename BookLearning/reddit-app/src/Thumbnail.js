import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ post }) => {
	if(post.is_self) {
		return <span className="thumbnail self"></span>;
	} else if( post.thumbnail === "default" ) {
		return <span className="thumbnail default"></span>;
	} else {
		return (
			<img className="thumbnail"
				alt="thumbnail"
				src={post.thumbnail} />
		);
	}
};
Thumbnail.propTypes = {
	post: PropTypes.object.isRequired
};

export default Thumbnail;