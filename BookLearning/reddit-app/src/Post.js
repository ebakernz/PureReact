import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Voting from './Voting';
import Time from './Time';
import Thumbnail from './Thumbnail';

class Post extends React.Component {

	static propTypes = {
		post: PropTypes.object.isRequired,
		onAddVote: PropTypes.func.isRequired,
		onRemoveVote: PropTypes.func.isRequired
	}

	handleAddVoteClick = () => {
		this.props.onAddVote(this.props.post.id);
	}

	handleRemoveVoteClick = () => {
		this.props.onRemoveVote(this.props.post.id);
	}

	render() {
		const { post } = this.props;

		return (
			<Fragment>
				<Voting post={post} onAddVote={this.handleAddVoteClick} onRemoveVote={this.handleRemoveVoteClick} />
				<div className="post-avatar float-left">
					<Thumbnail post={post} />
				</div>

				<div className="post-details float-left">
					<h3><a href={post.url}>{post.title}</a></h3>
					<p>{post.text}</p>
					<p className="time">Submitted <Time time={post.created} isUnixTime={true} /></p>
					<p className="comments">
						<a href={`https://www.reddit.com${post.permalink}`}>
							{post.num_comments} {post.numComments === 1 ? 'comment' : 'comments' }
						</a>
					</p>
					<p className="interaction">share save hide report pocket</p>
				</div>
			</Fragment>
		)
	}
	
}

export default Post;