/** @format */

import { Fragment, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProfile from './AddProfile';
import MainHeader from './components/mainheader';
import MainText from './mainText';
import ProfileList from './ProfileList';
import TestuseEffect from './testPages/TestuseEffect';
import Calculator from './calculator/Calculator';
import TestuseReducer from './testPages/TestuseReducer';

const App = () => {
	const [proList, setProList] = useState([]);
	/** vv 逐個parameter對 vv */
	/* enteredName -> uName, enteredPhone -> uPhone, enteredMail -> uMail */
	const addProfileHandler = (uName, uPhone, uMail) => {
		setProList((list) => {
			return [
				{
					id: Math.random().toString(),
					mail: uMail,
					phone: uPhone,
					nameX: uName,
				},
				...list,
			];
		});
	};

	const removeItemHandler = (idRIH) => {
		setProList(proList.filter((xx) => xx.id !== idRIH));
		console.log('remove');
	};

	return (
		<Fragment>
			<MainHeader />
			<Routes>
				<Route
					path='/'
					element={
						<>
							<MainText />
							<AddProfile onAddProfile={addProfileHandler} />
							<ProfileList
								users={proList}
								onRemoveProfile={removeItemHandler}
							/>
						</>
					}
				/>
				<Route path='/useeffecttest' element={<TestuseEffect />} />
				<Route path='/useReducer' element={<TestuseReducer />} />
				<Route path='/calculator' element={<Calculator />} />
			</Routes>
		</Fragment>
	);
};
export default App;
