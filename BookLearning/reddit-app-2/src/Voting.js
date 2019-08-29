import React from 'react';

const Voting = ({ story, onAddVote, onRemoveVote }) => (
	<div className="votes">
      <i className="fa fa-angle-double-up" onClick={onAddVote} />
      <p>{story.score}</p>
      <i className="fa fa-angle-double-down" onClick={onRemoveVote} />
    </div>
);

export default Voting;