import React, { useState } from 'react';
import Rectangle from '../../../assets/images/Rectangle (2).png';
import Rectangle1 from '../../../assets/images/Rectangle (1).png';
import Rectangle3 from '../../../assets/images/Rectangle (3).png';
import Rectangle4 from '../../../assets/images/Rectangle (4).png';
import Rectangle5 from '../../../assets/images/Rectangle (5).png';
import Rectangle6 from '../../../assets/images/Rectangle (6).png';
import InfoCard from './InfoCard';
import Modal from './Modal/Modal';

const InfoCards = () => {

    const [treatments, setTretment] = useState(null);
    const cardData = [
        {
            id: 1,
            name: 'Chicken Hands',
            nam: 'Category : Chicken',
            description: 'There are many variations of passages of available, but the majority have suffered',
            icon: Rectangle,
        },
        {
            id: 2,
            name: 'Chicken Hands',
            nam: 'Category : Chicken',
            description: 'There are many variations of passages of available, but the majority have suffered',
            icon: Rectangle1,
        },
        {
            id: 3,
            name: 'Chicken Hands',
            nam: 'Category : Chicken',
            description: 'There are many variations of passages of available, but the majority have suffered',
            icon: Rectangle6,
        },
        {
            id: 4,
            name: 'Chicken Hands',
            nam: 'Category : Chicken',
            description: 'There are many variations of passages of available, but the majority have suffered',
            icon: Rectangle4,
        },
        {
            id: 5,
            name: 'Chicken Hands',
            nam: 'Category : Chicken',
            description: 'There are many variations of passages of available, but the majority have suffered',
            icon: Rectangle5,
        },
        {
            id: 6,
            name: 'Chicken Hands',
            nam: 'Category : Chicken',
            description: 'There are many variations of passages of available, but the majority have suffered',
            icon: Rectangle3,
        },
    ]

    return (
        <div>
            <h1 className=' text-center text-3xl font-bold mt-20 ml-14'>Your Favourite Food</h1>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    cardData.map(card => <InfoCard
                        key={card.id}
                        card={card}
                        setTretment={setTretment}
                    ></InfoCard>)
                }
            </div>
            {
                treatments &&
                <Modal
                    treatments={treatments}
                ></Modal>
            }
        </div>
    );
};

export default InfoCards;