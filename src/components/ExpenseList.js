import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
	<div>
		<h1>Expense List</h1>
		{props.expenses.map((expense, index) => {
			return <ExpenseListItem key={index} {...expense} />;
		})}
	</div>
);

// to enable filtering
const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

// without filtering

// const mapStateToProps = (state) => {
// 	return {
// 		expenses: state.expenses,
// 		filters: state.filters
// 	};
// };

export default connect(mapStateToProps)(ExpenseList);
