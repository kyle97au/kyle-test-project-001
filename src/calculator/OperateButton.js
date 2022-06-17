/** @format */

const OperateButton = ({ dispatch, operation }) => {
	return (
		<button
			onClick={() => dispatch({ type: 'operation', payload: { operation } })}>
			{operation}
		</button>
	);
};

export default OperateButton;
