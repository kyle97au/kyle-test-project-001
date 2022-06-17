/** @format */

import { NavLink } from 'react-router-dom';
import classes from './mainheader.module.css';

const MainHeader = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						<NavLink
							className={(xx) => (xx.isActive ? classes.active : '')}
							to='/'>
							Maintest!
						</NavLink>
					</li>
					<li>
						<NavLink
							className={(yy) => (yy.isActive ? classes.active : '')}
							to='/useeffecttest'>
							useEffect
						</NavLink>
					</li>
					<li>
						<NavLink
							className={(zz) => (zz.isActive ? classes.active : '')}
							to='/useReducer'>
							useReducer
						</NavLink>
					</li>
					<li>
						<NavLink
							className={(zz) => (zz.isActive ? classes.active : '')}
							to='/calculator'>
							calculator
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
