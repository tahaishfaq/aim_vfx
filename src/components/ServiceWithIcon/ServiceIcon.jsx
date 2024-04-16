import React from 'react';
import icon1 from "../../assets/solutionIcons/calendar-svgrepo-com-4 2 (1).png";
import icon2 from "../../assets/solutionIcons/calendar-svgrepo-com-4 5.png";
import icon3 from "../../assets/solutionIcons/calendar-svgrepo-com-4 6.png";
import icon4 from "../../assets/solutionIcons/calendar-svgrepo-com-4 7.png";
import icon5 from "../../assets/solutionIcons/icon (1).png";
import icon6 from "../../assets/solutionIcons/Vector (4).png";
import Heading from '../Heading/Heading';

const ServiceIcon = () => {
    const services = [
        { title: "consistent content & quick delivery", icon: icon1 },
        { title: "more engagement on your content", icon: icon2 },
        { title: "have time to work on your business", icon: icon3 },
        { title: "flexibility", icon: icon4 },
        { title: "content curation", icon: icon5 },
        { title: "dedicated editors", icon: icon6 }
    ];

    return (
        <div className="py-10">
            <div className="flex gap-y-10  flex-wrap justify-center">
                {services.map((service, index) => (
                    <div key={index} className='flex flex-col gap-y-1.5 items-start w-1/3'>
                        <img src={service.icon} className='w-20 h-20' alt={`icon-${index}`} />
                        <Heading className="font-tek text-3xl w-60 uppercase text-[#56BEC2]">{service.title}</Heading>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServiceIcon;
