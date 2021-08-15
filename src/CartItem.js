import React from 'react'

function CartItem(props) {
    return (
        <ul class="list-group">
        <li class="list-group-item">{props.data.title} price {props.data.price} <div onClick={()=>{props.handleRemove(props.data.id)}} className="btn btn-primary">X</div></li>
      </ul>
    )
}

export default CartItem