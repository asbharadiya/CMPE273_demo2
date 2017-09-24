
const initialState= {
  "menu" : [
    {
      "id" : 1,
      "name" : "Pizza",
      "price" : 25
    },
    {
      "id" : 2,
      "name" : "Pasta",
      "price" : 10
    },
    {
      "id" : 3,
      "name" : "Burger",
      "price" : 6
    },
  ],
  "cart" : []
}

const OrderApp = (state = initialState, action) => {
  var _obj; 
  switch (action.type) {
    case "ADD_TO_CART" :
      if(!state.menu[action.index].purchased){
        _obj = {...state.menu[action.index],quantity:1}
        return Object.assign({}, state, {
          cart: [
            ...state.cart,
            _obj
          ],
          menu: state.menu.map((menuItem, index) => {
            if (menuItem.id === _obj.id) {
              return Object.assign({}, menuItem, {
                purchased: true
              })
            }
            return menuItem;
          })
        })
      } else {
        _obj = state.menu[action.index];
        return Object.assign({}, state, {
          cart: state.cart.map((cartItem, index) => {
            if (cartItem.id === _obj.id) {
              return Object.assign({}, cartItem, {
                quantity: cartItem.quantity+1
              })
            }
            return cartItem;
          })
        })
      }
    case "REMOVE_FROM_CART" : 
      _obj = state.cart[action.index];
      return Object.assign({}, state, {
        cart: state.cart.filter(function(cartItem) {
          return cartItem.id !== _obj.id;
        }),
        menu: state.menu.map((menuItem, index) => {
          if (menuItem.id === _obj.id) {
            return Object.assign({}, menuItem, {
              purchased: false
            })
          }
          return menuItem;
        })
      })
    default : 
      return state;
  }
};

export default OrderApp;
