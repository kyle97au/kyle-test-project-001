/** @format */

const Buttons = ({ dispatch, digit }) => {
	return (
		<button
			onClick={() =>
				dispatch({
					// type: ACTIONS.ADD_DIGIT,
					type: "add",
					payload: { digit },
				})
			}>
			{digit}
		</button>
	);
};
export default Buttons;
