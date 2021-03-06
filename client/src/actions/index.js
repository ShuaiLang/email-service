import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => { // redux-thunk allows to receive an function and executes it.
		const res = await axios.get('/api/current_user');
		dispatch({ type: FETCH_USER, payload: res.data });
};
	
// relative path; use proxy in package.json (dev mode)
// But in production mode, there'll be no create-react server, nor proxy.
// It should go directly to the express server.

export const handleToken = (token) => async dispatch => {
	const res = await axios.post('/api/stripe', token);
	dispatch({ type: FETCH_USER, payload: res.data});
};