import React, {useState} from "react"
import data from "../data"

const Pledges = () => {
    const [cards] = useState(data)
  return (
   <>
    <div className ="data grid grid-cols-1 gap-5">
     { cards.map((card) => {
     const { id,title,pledge,desc,left,button } = card

     return (
        <article key = {id} className ="border-2 p-5 rounded-lg"> 
        <h3 className ="font-bold text-lg">{title}</h3>
        <p className="desc font-bold">{pledge}</p>
        <p className="desc-inner my-5">{desc}</p>
        <p className="desc-inner font-bold text-4xl flex items-center mb-5">{left}{" "}
        <span className="font-light text-base text-gray-600 ml-3">left</span></p>
        <button className="btn py-2 px-6 rounded-full text-white">{button}</button>
      </article>   
     )
     })} 
     </div>  
   </>
  )
}

export default Pledges
