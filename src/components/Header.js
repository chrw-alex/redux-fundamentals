import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import classes from "./Header.module.css";

const Header = () => {

  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  const logoutHandler = () => {
    dispatch(authActions.logOut())
  }

  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/">О нас</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
          {isLoggedIn
            && <li>
              <a href="/">Корзина</a>
            </li>}
          {isLoggedIn && <li>
            <button onClick={logoutHandler}>Выйти</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
