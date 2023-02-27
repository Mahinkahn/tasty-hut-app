import React from 'react';

const InfoCard = ({ card, setTretment }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`card  w-[558px] h-[300px] ml-10 text-accent p-6 md:card-side  ${bgClass}`}>
            <img src={icon} alt="Movie" className=' w-[230px] h-[300px]' />
            <div className="card-body w-[277px] h-[200px] mt-8">
                <h2 className="card-title font-bold">{name}</h2>
                <p>{description}</p>
                <label htmlFor="booking-modal" className="btn btn-link normal-case font-bold ml-[-125px]" onClick={() => setTretment(card)}>View Details</label>
            </div>
        </div>
    );
};

export default InfoCard;