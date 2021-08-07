import React from 'react'

function Sidebar(props) {
    return (
        <div className="w3-sidebar w3-light-grey w3-bar-block" style={{width:"10%"}}>
        <h3 className="w3-bar-item">Menu</h3>
        <a href="#" className="w3-bar-item w3-button">Link 1</a>
        <a href="#" className="w3-bar-item w3-button">Link 2</a>
        <a href="#" className="w3-bar-item w3-button">Link 3</a>
      </div>
    )
}

export default Sidebar