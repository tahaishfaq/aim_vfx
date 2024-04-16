import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import ServivePageVideo from '../CustomVideo/ServicePageVideo'
import Button from "../../components/Button/Button";
import shape7 from "../../assets/video bubbles (1).png";
import shape2 from "../../assets/127_arrow_icon_logo_with_3d_modern_style copy 1.png";
import shape4 from "../../assets/holographic_fluid_drop_shapes_illustration_02 copy 4.png";
import "./team.css";
import Heading from '../Heading/Heading';
import LetsTalk from './LetsTalk';

export const TeamPage = () => {
  
    const callouts = [
       
        {
          name: 'Self-Improvement',
          description: 'Journals and note-taking',
          imageSrc: shape2,
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
        },
      
      ]
      

  return (
    <div className="solution-page">
     <div className="flex items-center p-32">
          <div className="flex flex-col gap-y-3">
            <span className="team-hero-heading">
            Title text block
            </span>
            <div className="w-96">
              <p className="text-white">
              JUST THE SUBHEAD HERE:<br />
Freezing 2 times for two weeks a year
If one video editor is not enough, then you need to buy another package. You need to pay monthly. You need to pay with monthly, quarterly and annual discounts.
              </p>
            </div>
            <div className="flex gap-y-5 mt-10">
              {/* <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
               choice your plan
              </Button> */}
              <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              choice your plan
              </Button>
            </div>
          </div>
          {/* ------------ Right Side Hero Section --------------- */}
          <div className="relative">
            <img src={shape7} alt="img" className="" />
            <div className="absolute top-10">
              <ServivePageVideo />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
            <h2 id="details-heading" className="text-3xl font-bold tracking-tight uppercase text-white sm:text-5xl">
            who are us?
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-white">
            Lorem ipsum dolor sit amet consectetur. Scelerisque habitant elementum lectus quis risus viverra. Commodo sit imperdiet consectetur fermentum non nunc. In et quam vehicula lectus sed leo hac lectus. Pretium et egestas nisi in.
            </p>
          </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex justify-center items-center max-w-3xl py-10 sm:py-10 lg:max-w-none lg:py-10">
          {/* <h2 className="text-2xl font-bold text-gray-900">Collections</h2> */}
           
              <div  className="group relative">
                <div className="relative  w-full overflow-hidden rounded-lg  ">
                  <img
                    src={shape2}
                    alt="shape2"
                    className="h-[40rem] w-full object-cover  object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm absolute  text-white top-48 ">
                  <h1 className='pb-4 text-4xl uppercase'>
                  mission
                  </h1>
                <p className="text-base w-64 font-semibold ">Lorem ipsum dolor sit amet consectetur. Scelerisque habitant elementum lectus quis risus viverra. Commodo sit imperdiet consectetur fermentum non nunc. In et quam vehicula lectus sed leo hac lectus. Pretium et egestas nisi in.</p>
                </h3> 
                <h3 className="mt-6 text-sm absolute right-[-99px] text-white top-48 ">
                  <h1 className='pb-4 text-4xl uppercase'>
                  vision
                  </h1>
                <p className="text-base w-64 font-semibold ">Lorem ipsum dolor sit amet consectetur. Scelerisque habitant elementum lectus quis risus viverra. Commodo sit imperdiet consectetur fermentum non nunc. In et quam vehicula lectus sed leo hac lectus. Pretium et egestas nisi in.</p>
                </h3>
              </div>
        </div>
      </div> 
      <div className=" pb-16 pt-24 px-44 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-[#2EABAF] rounded-xl pb-20 sm:pb-0 pt-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center  gap-x-8 gap-y-2 pr-6 sm:gap-y-2 lg:pr-8 xl:flex-row ">
        
            <div className="relative w-full">
             {/* <div className=''> */}
             <img
                className="  w-full absolute top-[-20rem]  object-cover"
                src={shape4}
                alt=""
              />
                {/* </div>  */}
            </div>
         
          <div className="w-full max-w-2xl py-[58px] xl:px-0 ">
            <figure className=" ">
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <Heading className="text-5xl uppercase">Let’s create our future together</Heading>
                <p className='pt-4'>
                Don’t forget to check out our career page to see available positions
                </p>
              </blockquote>
              <figcaption className="mt-10 text-base">
              <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Available positions
              </Button>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <LetsTalk/>
    </div>
  )
}
