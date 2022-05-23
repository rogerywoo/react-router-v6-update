import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* React-Router-Dom 6 Navlink has navData that can be execite a function */}
            <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink  className={(navData) => navData.isActive ? classes.active : ''} to='/products'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
