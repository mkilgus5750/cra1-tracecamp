import React from "react"
import './Destination.css'


export default class Destination extends React.Component {
  render() {
    return (
      <div className="destination">
        <img src={this.props.img} /> 
        <p className="location-text">{this.props.location}</p>
        <p className="must-see-photos">{this.props.photos} must see photos</p>
      </div>
    )
  }
}
