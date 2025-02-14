import React from 'react'
import { useParams } from 'react-router-dom'
import foodItems from './FoodItems'

const MenuPage = () => {
    const {id} = useParams();
    const food = foodItems.find((item)=> item.id === parseInt(id));
    if(!food){
        return <h2>Food not found!</h2>
    }
  return (
    <div className="container mt-5 text-center">
            <h1>{food.title}</h1>
            <img src={food.src} alt={food.alt} className="img-fluid" style={{ maxWidth: "500px" }} />
            <p className="mt-3">{food.description}</p>
        </div>
  )
}

export default MenuPage
