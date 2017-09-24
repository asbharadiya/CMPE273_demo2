import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from "../actions/index";

class CartItem extends Component {
  render() {
    return (
      <div className="row item-row">
        <div className="col-xs-5">
          <p className="item-name">{this.props.item.name}</p>
        </div>
        <div className="col-xs-3">
          <span className="item-price">$ {this.props.item.price}</span>
          <span className="item-qty">Qty: {this.props.item.quantity}</span>
        </div>
        <div className="col-xs-4 text-right">
          	<button className="btn btn-danger" onClick={() => {
                this.props.removeFromCart(this.props.index)
            }}>Remove</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart : (index) => dispatch(removeFromCart(index))
    };
}

export default connect(null,mapDispatchToProps)(CartItem);
