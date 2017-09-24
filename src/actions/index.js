

export function addToCart(index) {
	return {
        type : "ADD_TO_CART",
        index
    }
}

export function removeFromCart(index) {
	return {
        type : "REMOVE_FROM_CART",
        index
    }
}

