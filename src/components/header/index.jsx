import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { loginUser, logoutUser } from "../../redux/user/slice";
import { selectProductsCount } from '../../redux/cart/cart.selector'

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)

  const productsCount = useSelector(selectProductsCount)

  const dispatch = useDispatch()

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  // The reducer will be called when the user click on the login button
  const handleLoginClick = () => {
    dispatch(loginUser({ name: 'Erika', email: 'test@gmail.com'}))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        { currentUser ?
          <div onClick={handleLogoutClick}>Sign out</div> :
          <div onClick={handleLoginClick}>Login</div>
        }
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
