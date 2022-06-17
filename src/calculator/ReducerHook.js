/** @format */

/*  type => case ADD, CHOOSE, CLEAR, DELETE, EVALUATE
    payload => current input **/

const ReducerHook = (state, { type, payload }) => {
	console.log(state, type, payload);

	if ({ type, payload }.type === 'add') {
		if (state.overwrite) {
			return {
				...state,
				currentOperand: payload.digit,
				overwrite: false,
				history: state.history + payload.digit,
			};
		}

		if (payload.digit === '0' && state.currentOperand === '0') {
			return state;
		}
		if (payload.digit === '.' && state.currentOperand.includes('.')) {
			return state;
		}

		return {
			...state,
			currentOperand: `${state.currentOperand || ''}${payload.digit}`,
			history: state.history + payload.digit,
		};
	}
	if ({ type, payload }.type === 'operation') {
		if (state.currentOperand == null && state.previousOperand == null) {
			// when there was not operand before
			// e.g. "+"
			return state;
		}

		if (state.currentOperand == null) {
			// no current operand, but there is already a operator
			// e.g. 1+ del "+"
			return {
				...state,
				operation: payload.operation,
				history:
					state.history.slice(0, state.history.length - 1) + payload.operation,
			};
		}

		if (state.previousOperand == null) {
			// when evluated and user does not input operand, use previous answer as operand
			// e.g. 1+1=2 "+"
			if (state.overwrite) {
				return {
					...state,
					operation: payload.operation,
					previousOperand: state.currentOperand,
					currentOperand: null,
					history: state.history + state.currentOperand + payload.operation,
				};
			}
			// when there is current operand but not previous operand
			// e.g. 1 "+"
			else
				return {
					...state,
					operation: payload.operation,
					previousOperand: state.currentOperand,
					currentOperand: null,
					history: state.history + payload.operation,
				};
		}
		// when ther is previous operand
		// e.g. 1 + 1 "+"
		return {
			...state,
			previousOperand: evaluate(state),
			operation: payload.operation,
			currentOperand: null,
			history: state.history + payload.operation,
		};
	}
	if ({ type, payload }.type === 'clear') {
		return {
			history: state.history.endsWith('\n')
				? state.history
				: state.history + '\n',
		};
	}
	if ({ type, payload }.type === 'delete') {
		if (state.overwrite) {
			return {
				...state,
				overwrite: false,
				currentOperand: null,
				history: state.history.splice(0, state.history.length - 1),
			};
		}
		if (state.currentOperand == null) return state;
		if (state.currentOperand.length === 1) {
			return { ...state, currentOperand: null };
		}

		return {
			...state,
			currentOperand: state.currentOperand.slice(0, -1),
		};
	}
	if ({ type, payload }.type === 'evaluate') {
		if (
			state.operation == null ||
			state.currentOperand == null ||
			state.previousOperand == null
		) {
			return state;
		}
		let answer = evaluate(state);
		return {
			...state,
			overwrite: true,
			previousOperand: null,
			operation: null,
			currentOperand: answer,
			history: state.history + '=' + answer + '\n',
		};
	}
};

/* evaluate => running in the reducer **/

const evaluate = ({ currentOperand, previousOperand, operation }, state) => {
	const prev = parseFloat(previousOperand);
	const current = parseFloat(currentOperand);

	if (isNaN(prev) || isNaN(current)) return '';
	let computation = '';
	// eslint-disable-next-line
	switch (operation) {
		case '+':
			computation = prev + current;
			break;
		case '-':
			computation = prev - current;
			break;
		case '*':
			computation = prev * current;
			break;
		case '÷':
			computation = prev / current;
			break;
	}

	console.log('previousOperand:', previousOperand);
	console.log('operation:', operation);
	console.log('currentOperand:', currentOperand);
	// console.log("computation:", computation);
	return computation.toString();
};

export default ReducerHook;
