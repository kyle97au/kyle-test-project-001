/** @format */

import Card from "./UI/Card";
import classes from "./ProfileList.module.css";

const ProfileList = (props) => {
	const removeHandler = (idRH) => {
		props.onRemoveProfile(idRH);
	};

	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map((info) => (
					<li key={info.id} onClick={() => removeHandler(info.id)}>
						Name: {info.nameX}
						<br />
						Phone:{info.phone}
						<br />
						Email: {info.mail}
					</li>
				))}
			</ul>
		</Card>
	);
};
export default ProfileList;
