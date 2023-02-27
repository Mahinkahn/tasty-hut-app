import React from 'react';

const Modal = ({ treatments }) => {
    const { name, icon, nam } = treatments;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-full h-[840px]">
                    <label htmlFor="booking-modal" className="btn btn-sm bg-white border-none text-gray-500 btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <hr className='mt-5 bg-black w-full mb-6' />
                    <img src={icon} alt="" className='w-full h-[409px]  rounded-lg' />
                    <p className="py-2">{nam}</p>
                    <p className="py-2">Area : Japanese</p>
                    <p className="py-2">Instructions : AThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-2">Youtube : https://www.youtube.com/watch?v=WnpbKoYhTEY</p>
                    <label htmlFor="booking-modal" className="btn btn-error normal-case ml-96 w-[90px]  mt-3 font-bold text-white">Close</label>
                </div>
            </div>
        </>
    );
};

export default Modal;