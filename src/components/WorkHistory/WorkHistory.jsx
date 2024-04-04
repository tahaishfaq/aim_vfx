import React from 'react';
import { FaStar } from 'react-icons/fa'; 

const WorkHistoryItem = ({ title, dateRange, description, price, hours }) => {
  return (
    <div className=" flex flex-col gap-y-1 text-white px-4 py-10 border-b border-[#15B8C7]">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex justify-start gap-x-2 items-center">
      <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
           <FaStar className='text-[#15B8C7]'/>
          ))}
        </div>
        <p className="text-gray-300">{dateRange}</p>
        
      </div>
      <p className="text-sm my-2 text-gray-300">{description}</p>
      <div className="flex justify-between items-center font-semibold">
        <p>{price}</p>
        {hours && <p>{hours}</p>}
      </div>
    </div>
  );
};

const WorkHistory = () => {
  const jobs = [
    {
      title: 'Camtasia video editor needed to edit coding videos',
      dateRange: 'Nov 29, 2022 - Dec 4, 2022',
      description: 'As usual, Petr did a great, top-quality job and, not only that, but he also delivered ahead of time, which I really appreciate. I’m super pleased with the results!',
      price: '$1,052.50, Fixed Price',
    },
    {
      title: 'Core Video Editing',
      dateRange: 'Jan 31, 2022 - Dec 2, 2022',
      description: '7 hours',
      price: '',
    },
    {
      title: 'Camtasia video editor needed to edit coding videos',
      dateRange: 'May 9, 2022 - Nov 4, 2022',
      description: '',
      price: '$1,283.32, $25.00 / hr, 47 hours',
    },
    // ... more jobs
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-4xl font-tek italic font-medium text-white mb-4">WORK HISTORY</h2>
      {jobs.map((job, i) => (
        <WorkHistoryItem key={i} {...job} />
      ))}
    </div>
  );
};

export default WorkHistory;
