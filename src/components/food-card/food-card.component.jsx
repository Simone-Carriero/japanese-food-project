import React from 'react'
import './food-card.style.scss'

const FoodCard = ({image, title, price}) => {
  return (
      <div className='food-card'>
      <img src={image} alt={`${title}`} />
      <div className='food-card-text-container'>
        <h2>{ title }</h2>
        <span>${ price }</span>
      </div>
      </div>
  )
}

export default FoodCard