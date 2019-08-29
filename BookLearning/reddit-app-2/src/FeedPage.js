import React from 'react';
import Story from './Story';
import PropTypes from 'prop-types';

function FeedPage({ stories, onAddVote, onRemoveVote }) {
	return(
		<div className="stories">
         
			{stories
				.sort( (p1, p2) => p2.score - p1.score)
				.map( story =>
				<div className="story" key={story.id}>
			    	<Story 
			        	story={story} 
			        	onAddVote={onAddVote}
			        	onRemoveVote={onRemoveVote} />
			    </div>
			)}

        </div>
	);
}
FeedPage.propTypes = {
	stories: PropTypes.array.isRequired,
	onAddVote: PropTypes.func.isRequired,
	onRemoveVote: PropTypes.func.isRequired
}

export default FeedPage;