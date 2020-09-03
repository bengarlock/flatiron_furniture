import React from 'react'
import ItemContainer from './ItemContainer'
import CartContainer from './CartContainer'
import Checkout from '../Components/Checkout'
import {Route} from 'react-router-dom'


 class ShopContainer extends React.Component {

    state={
        listOfItems:[]   
    }

    componentDidMount(){
        fetch("http://localhost:3000/items")
        .then(resp=>resp.json())
        .then(data=> this.setState({listOfItems:data})
        )
    }

     render(){
         return(
             <div>
             <ItemContainer listOfItems={this.state.listOfItems} />
             <CartContainer/>
             <Checkout/>
             </div>
            )
        }
    }
      
export default ShopContainer