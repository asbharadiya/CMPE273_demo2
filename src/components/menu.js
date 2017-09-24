import React, { Component } from 'react';
import {connect} from 'react-redux';
import MenuItem from './menuItem';

class Menu extends Component {
	render() {
	    return (
	      <div className="row">
	        <div className="col-xs-12 col-md-offset-1 col-md-10">
	          <div className="panel panel-primary">
	          	<div className="panel-heading text-center">
	          		<h4>Menu</h4>
	          	</div>
	          	<div className="panel-body">
	          		{
                        this.props.items.map((todo,index) => {
                            return(
                                <MenuItem
                                    key={index}
                                    item={todo}
                                    index={index}
                                />
                            );
                        })
                    }
	          	</div>
	          </div>
	        </div>
	      </div>
	    );
  	}
}

function mapStateToProps(state) {
    return {items:state.menu};
}

export default connect(mapStateToProps)(Menu);