/** @format */
import { useState, useEffect } from "react";
import Helmet from "react-helmet";

const TestuseEffect = () => {
	const [count, setCount] = useState(0);
	const [age, setAge] = useState(20);
	useEffect(() => {
		console.log("useEffect count=", count);
		return () => {
			console.log("componentWillUnmount");
		};
	}, [count, age]);
	return (
		<>
			<Helmet>
				<title>useEffect</title>
			</Helmet>

			<h2>effect</h2>
			<h2>{age}</h2>
			<h2>{count}</h2>
			<button
				onClick={(onClick) => {
					setAge(age + 1);
				}}>
				age+1
			</button>
			<button
				onClick={(onClick) => {
					setCount(count + 1);
					console.log("NOT useEffect =", count + 1);
				}}>
				count+1
			</button>
		</>
	);
};
export default TestuseEffect;
