import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
// import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  return (
    <header className={classes.header}>
        {/* <div className={classes.logo} >
          <h4><span>V</span>ision <span>M</span>edia <span>C</span>onsultancy</h4>
        </div> */}
      <nav>
        <ul className={classes.list}>
          <li className={classes.logo}>
           
          <span>V</span>ision <span>M</span>edia <span>C</span>onsultancy
           
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/casestudies"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Case Studies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contactus"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Contact US
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <NewsletterSignup /> */}
    </header>
  );
}

export default MainNavigation;