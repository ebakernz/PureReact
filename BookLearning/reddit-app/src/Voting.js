import React from 'react';
import PropTypes from 'prop-types';

const Voting = ({ post, onAddVote, onRemoveVote }) => (
	<div className="post-votes float-left">
		<i className="fa vote-arrow fa-arrow-up" onClick={onAddVote} />
		<p className="vote-num">{post.score}</p>
		<i className="fa vote-arrow fa-arrow-down" onClick={onRemoveVote} />
	</div>
);
Voting.propTypes = {
	post: PropTypes.object.isRequired,
	onAddVote: PropTypes.func.isRequired,
	onRemoveVote: PropTypes.func.isRequired
}

export default Voting;