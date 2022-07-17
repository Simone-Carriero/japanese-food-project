import React from 'react'
import FoodCard from '../../components/food-card/food-card.component'

import './menu.style.scss'

import { data as Data } from '../../data/data'

const mappedFood = Data.map((food, index) => (
    <FoodCard
        key={index}
        image={food.image}
        title={food.title}
        price={food.price}
    />
))

const Menu = () => {
  return (
      <div className='menu'>
          <h2 className='menu-title'>Our Menu</h2>
          <div className='menu-item'>
                {mappedFood}
                
          </div>
          
      </div>
  )
}

export default Menu