export const random = (min, max) => {
	return Math.floor(min + Math.random() * (max + 1 - min));
};

export const toLocalStorage = state => {
	const user = state.username;
	if (localStorage.getItem(user)) {
		const oldState = JSON.parse(localStorage.getItem(user));
		const newState = JSON.stringify([...oldState, state.points]
			.sort(sortNumbers)
		);
		localStorage.setItem(state.username, newState);
	} else {
		const newState = JSON.stringify([state.points]);
		localStorage.setItem(state.username, newState);
	}
};

export const sortNumbers = (a, b) => {
	return b - a;
}
