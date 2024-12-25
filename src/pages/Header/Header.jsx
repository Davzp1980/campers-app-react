import { NavLink } from 'react-router';
import css from './Header.module.css';
import clsx from 'clsx';
function Header() {
  function activeLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }
  return (
    <>
      <div className={css.container}>
        <div className={css.mainContainer}>
          <a href="/">
            <svg className={css.logoSVG}>
              <use href="../../../public/sprite.svg#icon-Logo"></use>
            </svg>
          </a>
          <div className={css.linksContainer}>
            <NavLink className={activeLink} to="/">
              Home
            </NavLink>
            <NavLink className={activeLink} to="/catalog">
              Catalog
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
