/** @format */

import classes from './Calculator.module.css';
import Buttons from './Buttons';
import ReducerHook from './ReducerHook';
import { useReducer } from 'react';
import OperateButton from './OperateButton';

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
	maximumFractionDigits: 0,
});
const formatOperand = (operand) => {
	if (operand == null) return;
	const [integer, decimal] = operand.split('.');
	if (decimal == null) return INTEGER_FORMATTER.format(integer);
	return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
};

const DUMMY_DIG = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'];
const DUMMY_OPE = ['+', '-', '*', '÷'];

export const Calculator = (state) => {
	const [{ currentOperand, previousOperand, operation, history }, dispatch] =
		useReducer(ReducerHook, { history: '' });

	// const onKeyboardEvent = async ({ key }) => {
	// if
	// reducer(key)
	// console.log("onKeyboardEvent");
	// console.log(key);
	// };

	// static display onscreen
	console.log('history', history);
	return (
		<div>
			<div className={classes.grid}>
				<div className={classes.output}>
					<div className={classes['previous-operand']}>
						{/* pervious screen */}
						{formatOperand(previousOperand)}
						{operation}
					</div>
					<div className={classes['current-operand']}>
						{/* current screen */}
						{formatOperand(currentOperand)}
					</div>
				</div>

				{/* + - * / */}
				<div className={classes['operate']}>
					{DUMMY_OPE.map((y, index) => (
						<OperateButton key={index} operation={y} dispatch={dispatch} />
					))}
				</div>
				{/* AC DEL */}
				<div className={classes['operate']}>
					<button
						style={{
							color: 'rgb(136, 46, 46)',
							backgroundColor: 'rgb(100, 100, 100)',
						}}
						className={classes['span-two']}
						onClick={() => dispatch({ type: 'clear' })}>
						AC
					</button>
					<button onClick={() => dispatch({ type: 'delete' })}>DEL</button>
				</div>

				<div className={classes['digits']}>
					{/* 123456789.0 */}
					{DUMMY_DIG.map((x, index) => (
						<Buttons key={index} digit={x} dispatch={dispatch} />
					))}

					{/* = */}
					<button
						onClick={() => {
							dispatch({ type: 'evaluate' });
							// dispatch({ compChangeHandler });
						}}>
						=
					</button>
				</div>
			</div>
			<div className={classes.history}>
				<pre>{history}</pre>
			</div>
		</div>
	);
};

export default Calculator;
