import React from "react"
import './Travel.css'

export default class Travel extends React.Component {
  render() {
    return (
      <div className="travel-component-container"> 
          <div className="travel-emoji">
            {this.props.emoji}
          </div>
          {this.props.type}
      </div> 
    )
  }
}
