import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostsPage({ posts, onAddVote, onRemoveVote }) {
	return (
		<div className="posts">

			{posts.map( post => 
				<div className="post"  key={post.id}>
					<Post post={post} onAddVote={onAddVote} onRemoveVote={onRemoveVote}  />
				</div>
			)}
		</div>
	);
}
PostsPage.propTypes = {
	posts: PropTypes.array.isRequired,
	onAddVote: PropTypes.func.isRequired,
	onRemoveVote: PropTypes.func.isRequired
}

export default PostsPage;