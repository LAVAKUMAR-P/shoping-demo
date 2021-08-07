import React from 'react'

function CartItem(props) {
    return (
        <ul class="list-group">
        <li class="list-group-item">{props.data.title} price {props.data.price} <div onClick={()=>{props.handleRemove(props.data.id)}} className="btn btn-primary">X</div></li>
      </ul>
    )
}
/*  <div class="w3-dropdown-hover">
      <button class="w3-button">Dropdown</button>
      <div class="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="#" class="w3-bar-item w3-button">{props.data.title} price {props.data.price} </a>
      </div>
      </div> */
     
export default CartItem