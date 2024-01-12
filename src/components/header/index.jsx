import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import UserActionTypes from '../../redux/user/action-types'
// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)
  const dispatch = useDispatch()

  console.log({currentUser})

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  // The reducer will be called when the user click on the login button
  const handleLoginClick = () =>{
    dispatch({
      type: UserActionTypes.LOGIN,
      payload: { name: 'Erika', email: 'test@gmail.com'}
    })
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        <div onClick={handleLoginClick}>Login</div>
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
