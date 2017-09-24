import React, { Component } from 'react';
import {connect} from 'react-redux';
import CartItem from './cartItem';

class Cart extends Component {
  render() {
  	var total = 0;
  	for(var i =0; i<this.props.items.length;i++){
     	total += this.props.items[i].quantity*this.props.items[i].price;
   	}
    return (
      <div className="row">
        <div className="col-xs-12 col-md-offset-1 col-md-10">
          <div className="panel panel-primary">
          	<div className="panel-heading text-center">
          		<h4>Cart</h4>
          	</div>
          	<div className="panel-body">
          		{
                    this.props.items.map((todo,index) => {
                        return(
                            <CartItem
                                key={index}
                                item={todo}
                                index={index}
                            />
                        );
                    })
                }
          	</div>
          	<div className="panel-footer text-center">
          		<h4>Total: $ {total}</h4>
          	</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {items:state.cart};
}

export default connect(mapStateToProps)(Cart);
