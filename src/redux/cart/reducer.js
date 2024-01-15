import CartActionTypes from './action-types'

const initialState = {
  products: [],
  productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case CartActionTypes.ADD_PRODUCT:
      // verify if the product is at cart
      const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id)

      // if the product is at cart, increment  the quantity in 1
      if(productIsAlreadyInCart){
        return {
          ...state,
          products: state.products.map((product) => product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
          )
        }
      }

      // if else add the product at the cart
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }]
      }
    default:
      return state
  }
}

export default cartReducer
