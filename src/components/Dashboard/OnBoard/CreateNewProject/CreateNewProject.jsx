import React from "react";
import "./CreateNewProject.css";
import bg1 from "../../../../assets/holographic_fluid_drop_shapes_illustration_02 copy 3 (1).png";
import { FaArrowRight } from 'react-icons/fa';
import project from "../../../../assets/Rectangle 130.png"
const CreateNewProject = () => {

    
        const categories = [
          {
            category: "Brands & Visual Identity",
            image: project
          },
          {
            category: "User Experience Design",
            image: project
          },
          {
            category: "Digital Marketing",
            image: project
          },
          {
            category: "Web Development",
            image: project
          },
          {
            category: "Mobile App Development",
            image: project
          },
          {
            category: "Graphic Design",
            image: project
          },
          
        ]
      
      
  return (
    <div className="create-new-project">
      <div className="flex w-full">
        <div className="w-1/2 flex items-center justify-center px-44">
          <div className="create-new-project-border text-white pl-16 pr-16 py-20">
            <div className=" uppercase flex flex-col">
              <h1 className="font-tek text-[50px]">Find your team</h1>
              <span className="font-tek font-semibold">Welcome to Aim Fx, User!</span>
            </div>
            <div className="flex flex-col mt-6 gap-y-10">
              <span className="flex gap-x-2 items-center"><FaArrowRight /> Join your organization's team</span>
              <span className="text-[#A5A5A5] ml-8">Create new team</span>
              <p className="font-light text-sm w-2/3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores itaque sit, voluptate necessitatibus quo officia
                veritatis aliquid, ex quaerat laboriosam excepturi dignissimos
                iusto, eos officiis at doloremque? Dolorem, obcaecati aliquam.
              </p>
            </div>
            <div className="flex justify-end mt-10">
              <span className="underline text-[#00FFFF]">
                Skip this step
              </span>
            </div>
          </div>
        </div>
        <img
          src={bg1}
          alt="bg-image "
          className="bg-image absolute -z-10 bottom-0"
        />
        <div className="w-1/2 form-border-2 ">
          <div className="text-white  flex items-start justify-center flex-col mx-auto h-screen px-[8rem] ">
            <h1 className="uppercase text-[40px] font-tek leading-tight">
              Create Your Brief
            </h1>

            <div className="flex flex-wrap gap-x-4 gap-y-4">
                {categories?.map((item) => 
                <div className="flex flex-col items-start gap-y-2 border border-white rounded-2xl card-background pt-2 pb-5 px-2">
                    <img src={item?.image} alt="project" className="w-64 max-h-32"/> 
                    <div>
                        <span className="text-white uppercase text-xs ml-1.5 font-semibold">
                            {item.category}
                        </span>
                    </div>
                </div>
            )}
                
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewProject;
