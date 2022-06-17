/** @format */

import Helmet from "react-helmet";

const MainText = () => {
	return (
		<>
			<Helmet>
				<title>add & remove profile</title>
			</Helmet>
			<div
				style={{
					color: "white",
					backgroundColor: "rgb(100, 100, 100)",
				}}>
				<h4>We used...</h4>
				<h3>
					error --> UseState <br />
					add contacts --> UseState & UseRef
				</h3>
				<h4>assume Name inputs Boo</h4>
				<h4
					style={{
						color: "yellow",
					}}>
					Boo -> nameInputRef -> enteredName -> uName -> namex -> info.namex
				</h4>
			</div>
			<h1>Contact me</h1>
		</>
	);
};

export default MainText;
