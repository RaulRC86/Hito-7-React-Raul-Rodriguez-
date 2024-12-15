import { useEffect, useState } from "react"
import {CardPizza} from "../../components/CardPizza/CardPizza"



export const Pizza = () => {

  const [pizzas, setPizzas] = useState([])
  const backEnd= "http://localhost:5000/api/pizzas/p001"

  useEffect(() => {
    const consultaApi = async () => {
      const res = await fetch(backEnd)
      const data= await res.json()
      setPizzas([data]) 
    }
    consultaApi()
  }, [])
  return (
    <>
 <div className="pizzaContainer">
    {pizzas.map(
      (pizza) => (
        <CardPizza
        key={pizza.id}
        name={pizza.name}
        desc={pizza.desc}
        img={pizza.img}
        ingredients={pizza.ingredients}
        price={pizza.price}
        />
      )
    )}</div>
    </>
  )
}

