import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${this.props.id}?size=200x200`} alt='' />
        <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.email}</p>
            <p>{this.props.username}</p>
        </div>
      </div>
    )
  }
}

export default Card

// const { name, email, id} = props
