import React from 'react';
import {render} from 'react-dom';
import Login from './Login';
import List from './list';

class App extends React.Component {
    constructor(props) {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            name:[],
            products: [
                {
                    id: "P1",
                    ProductName : "Mobile",
                    ProductDescription : "this is a cell phone",
                    emailId : "a@a.com",
                    imageUrl : "high"
                },
                {
                    id: "P2",
                    ProductName : "car",
                    ProductDescription : "This is a car",
                    emailId : "b@b.com",
                    imageUrl : "low"
                },
                {
                    id: "P3",
                    ProductName : "TV",
                    ProductDescription : "This is a TV",
                    emailId : "c@c.com",
                    imageUrl : "low"
                },
                {
                    id: "P4",
                    ProductName : "DeskTop",
                    ProductDescription : "This is a desktop",
                    emailId : "a@a.com",
                    imageUrl : "medium"
                }
            ],
        };
    }

    handleInputChange(e) {
        let arrPush = [];
        if(e.target.value) {
            const val = this.state.products.map((val) => {
                if (val.imageUrl === e.target.value) {
                    arrPush.push(val);
                    this.setState({ name: arrPush })

                }
            });
        }
    }



    render () {

            return(
                <div>

                    <Login triggerParent={this.handleInputChange}/>
                    <div>
                        {this.state.name}
                        {this.state.products.map(function(item) {
                            return <p>{item.ProductName}</p>;
                        })}
                    </div>
                </div>
            )



    }
}

render(<App/>, document.getElementById('app'));