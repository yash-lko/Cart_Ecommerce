import { createContext, useReducer } from "react";
import { toast } from "react-toastify";



export const CartContext = createContext();


const initialState = {
  cartItems: [],
}

const CartReducer = (state, action) => {
  switch (action.type) {
    case 'Add_to_Cart': {
      const existing = state.cartItems.find(
        item => item.id === action.payload.id
      );

      if (existing) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
      };
    }

    case 'RemoveItem': {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.id !== action.payload.id
        ),
      };
    }

    default:
      return state;
  }
};




export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const AddToCart = (product) => {
    dispatch({ type: "Add_to_Cart", payload: product });
    toast.success(`Product added to cart!`);
  };
  const RemoveItems = (product) => {
    dispatch({ type: "RemoveItem", payload: product });
    toast.error(`Product Removed!`);
  };
  return (
    <CartContext.Provider value={{
      cartItems: state.cartItems,
      AddToCart,
      RemoveItems,
    }}>
      {children}
    </CartContext.Provider>
  )
}


