import React from 'react'
import icon1 from "../../assets/solutionIcons/calendar-svgrepo-com-4 2 (1).png"
import icon2 from "../../assets/solutionIcons/calendar-svgrepo-com-4 5.png"
import icon3 from "../../assets/solutionIcons/calendar-svgrepo-com-4 6.png"
import icon4 from "../../assets/solutionIcons/calendar-svgrepo-com-4 7.png"
import icon5 from "../../assets/solutionIcons/icon (1).png"
import icon6 from "../../assets/solutionIcons/Vector (4).png"
import Heading from '../Heading/Heading'

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
        <div className="mt-8 flex flex-wrap justify-center md:justify-start">
            {services?.map((service, index) => (
                <div className='flex flex-col items-center '>
                    <img src={service.icon} />
                    <Heading>{service.title}</Heading>
                </div>
            ))}
        </div>
    );
}

export default ServiceIcon