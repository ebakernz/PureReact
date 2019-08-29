import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Voting from './Voting';
import Thumbnail from './Thumbnail';
import Time from './Time';

class Story extends React.Component {

	static propTypes = {
		story: PropTypes.object.isRequired,
		onAddVote: PropTypes.func.isRequired,
		onRemoveVote: PropTypes.func.isRequired
	}

	handleAddVoteClick = () => {
		this.props.onAddVote(this.props.story.id);
	}

	handleRemoveVoteClick = () => {
		this.props.onRemoveVote(this.props.story.id);
	}

	render() {
		const { story } = this.props;
		
		return(
			<Fragment>
		        <Voting story={story} onAddVote={this.handleAddVoteClick} onRemoveVote={this.handleRemoveVoteClick} />

		        <div className="avatar">
					<Thumbnail story={story} />
				</div>

		        <div className="details">
		          <h3><a href={story.url}>{story.title}</a></h3>
		          <p className="text">{story.text}</p>
		          <p className="date">Submitted <Time time={story.created} isUnixTime={true} /> by <span>{story.author_fullname}</span></p>
		          <p className="actions">
		          	<span className="comments">
		          		<a href={`https://www.reddit.com${story.permalink}`}>
		          			{story.num_comments} {story.num_comments === 1 ? 'comment' : 'comments'}
		          		</a>
		          	</span>
		            <span>share  save  hide  report  pocket</span>
		          </p>              
		        </div>

		        <div className="clearfix"></div>
		    </Fragment>
		)

	}
}

export default Story;