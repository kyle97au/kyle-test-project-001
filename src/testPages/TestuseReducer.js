/** @format */

import { useReducer } from "react";
import Helmet from "react-helmet";

const initState = { count: 1013 };
const initFn = (initCount) => {
	return initState;
};

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1 };
		case "reset":
			return initFn(action.payload);
		default:
			throw new Error();
	}
};

const TestuseReducer = ({ initCount }) => {
	const [state, dispatch] = useReducer(reducer, initState, initFn);
	return (
		<>
			<Helmet>
				<title>useReducer</title>
			</Helmet>
			<h1>Count: {state.count}</h1>
			<button onClick={() => dispatch({ type: "reset", payload: initCount })}>
				Reset
			</button>
			<button onClick={() => dispatch({ type: "decrement" })}>-</button>
			<button onClick={() => dispatch({ type: "increment" })}>+</button>
			<br />
			case 'reset': return init(action.payload);
			<br />
			<p>
				- useState 進階版: suits for more complex & logical states <br />
				<b>
					<u>useReducer vs useState:</u>
				</b>
				<br />
				useReducer = 鳴人, 成套嘢都係dispatch 螺旋丸 呢個function嚟做變化
				<br />
				useState = 三代火影, 好多唔同屬性嘅簡單function, 但每招淨係會用幾次
				==================================================
				<p
					style={{
						color: "red",
					}}>
					const [state, dispatchFn] = useReducer(reducerFn, initState, initFn)
				</p>
				==================================================
				<li>dispatchFn: 發動條件 → 通常dispatch action.type</li>
				<li>reducerFn: 發動後的fn, & 變為new updated state</li>
				<li>initFn: initial state’s function</li>
			</p>
		</>
	);
};

export default TestuseReducer;
