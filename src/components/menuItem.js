import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToCart} from "../actions/index";

class MenuItem extends Component {
  render() {
    return (
      <div className="row item-row">
        <div className="col-xs-5">
          <p className="item-name">{this.props.item.name}</p>
        </div>
        <div className="col-xs-3">
          <span className="item-price">$ {this.props.item.price}</span>
        </div>
        <div className="col-xs-4 text-right">
          	<button className="btn btn-success" onClick={() => {
                this.props.addToCart(this.props.index)
            }}>Add</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart : (index) => dispatch(addToCart(index))
    };
}

export default connect(null,mapDispatchToProps)(MenuItem);
