import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const waterExpense = store.dispatch(
	addExpense({
		description: 'Water Bill',
		amount: 500,
		createdAt: 2000
	})
);

const gasExpense = store.dispatch(
	addExpense({
		description: 'Gas bill',
		amount: 700,
		createdAt: 2100
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

	console.log(visibleExpenses);
});

store.dispatch(setTextFilter('bill'));

store.dispatch(setTextFilter('water'));

setTimeout(() => {
	store.dispatch(setTextFilter('rent'));
}, 3000);

console.log(store.getState());

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
