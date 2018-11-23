import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
	<div>
		<p>List Item</p>
		<p>{description}</p>
		<p>
			{amount} - {createdAt}
		</p>
		<button
			onClick={(e) => {
				dispatch(removeExpense({ id }));
			}}
		>
			Remove
		</button>
	</div>
);

export default connect()(ExpenseListItem);
