import React from "react"
import Mastercraft from "../img/logo-mastercraft.svg"
import Bookmark from "../img/icon-bookmark.svg"
const section1 = () => {
  return (
    <>
        <section className="relative bg-white mx-5 px-5 pb-10 rounded-lg -mt-20 border-20 lg:w-2/3 lg:mx-auto ">
        <img src ={Mastercraft} alt =""className="Mastercraft-logo"/>
            <div className = "pt-10 pb-3">
                <h2 className="text-center font-bold text-xl pb-2"> Mastercraft Bamboo Monitor Riser</h2>
                <p className="text-center"> A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            </div>
            <div className="flex justify-between">
            <button className = "btn rounded-full py-1 px-6 text-white"> Back this project</button>
            <img src ={Bookmark} alt =""/>
            </div>
        </section>
    </>
  )
}

export default section1
