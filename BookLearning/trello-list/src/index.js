import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';


function TrelloList({ lists }) {
	return (
		<div className="lists">
			{lists.map(list => (

				<SingleList list={list} />

			))}
		</div>
	);
}

function SingleList({ list }) {
	return (
		<div className="single-list">
			
			<a href="#" className="modify"><i className="fa fa-ellipsis-h" /></a>
			
			<h3>{list.title}</h3>

			<Cards cardlist={list.cards} />

			<a className="add-more-button" href="test">Add a card...</a>

		</div>
	);
}

function Cards({ cardlist }) {
	return (
		<div className="card-list">
		{cardlist.map(card => (
		
			<div className="card">
				{card.title}
			</div>

		))}
		</div>
	);
}

var trelloList = [
	{
		id: 1,
		title: 'Phone features',
		cards: [
			{
				id: 1,
				title: 'Subwoofer'
			},
			{
				id: 2,
				title: 'Non-porous, washable'
			},
			{
				id: 3,
				title: 'Wings'
			},
			{
				id: 4,
				title: 'Beveled Bezel'
			},
			{
				id: 5,
				title: 'Seedless'
			}
		]
	},
	{
		id: 2,
		title: 'Testing',
		cards: [
			{
				id: 1,
				title: 'Attachment preview icon'
			},
			{
				id: 2,
				title: 'Waterproofing'
			},
			{
				id: 3,
				title: 'Minsix Corp'
			},
			{
				id: 4,
				title: 'Clicking icon should open pop-over'
			},
			{
				id: 5,
				title: 'Test new messaging for SMB market'
			},
			{
				id: 6,
				title: 'Fill in paperwork'
			}
		]
	}
]


ReactDOM.render(<TrelloList lists={trelloList} />, document.getElementById('root'));