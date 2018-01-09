import React, { Component } from 'react';

class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:this.props.stateValue
        };
        console.log(this.props.stateValue.name.length);
        console.log('');
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.products.products.map(function(item) {
                        return <p>{item.ProductName}</p>;
                    })}
                </div>
            </div>
        );
    }
}
export default list;