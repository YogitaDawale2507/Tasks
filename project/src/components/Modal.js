import React from 'react'
import closeModal from "../img/icon-close-modal.svg"

const Modal = () => {
  return (
  <>
    <section className="bg-white mx-5 py-10 px-5 rounded-lg border-2 mt-5">
        <div className="flex justify-between">
        <div>
        <h4 className="font-bold text-xl">Back this project</h4>
            <p className="mb-5">
            Want to support us in bringing Mastercraft
            Bamboo Monitor Riser
            out in the world?
            </p>
        </div>
        <div className="mt-2">
        <img src={closeModal} alt="" ClassName="w-6" />


        </div>
        </div>
    <Pledges />
    </section>
  </>
  )
}

export default Modal
