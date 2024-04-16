import React from "react";
import KnowUsCard from "./KnowUsCard";
import TeamMembers from "./TeamMembers";
import team from "../../assets/team/retrato-de-um-jovem-com-cabelos-encaracolados-contra-um-fundo-amarelo 1.png";
import './GetToKnow.css'

const GetToKnowUs = () => {
  const teamMembers = [
    { name: "Smith", position: "Video Editor", imageUrl: team },
    { name: "Smith", position: "Video Editor", imageUrl: team },
    { name: "Smith", position: "Video Editor", imageUrl: team },
    { name: "Smith", position: "Video Editor", imageUrl: team },
    { name: "Smith", position: "Video Editor", imageUrl: team },
    { name: "Smith", position: "Video Editor", imageUrl: team },
    { name: "Smith", position: "Video Editor", imageUrl: team },
    { name: "Smith", position: "Video Editor", imageUrl: team },
  ];
  return (
    <div className="gettoknow-section">
    <div className="flex justify-between mx-auto max-w-5xl ">
      <div className="w-1/2 p-8">
        <KnowUsCard
          imageSrc={team}
          title="Smith"
          subTitle="3 random facts about:"
          chipText="Video Editor"
          paragraph="Lorem ipsum dolor sit amet consectetur. Hendrerit varius neque mauris nisi malesuada eget tellus vitae porta."
        />
      </div>
      <div className="w-1/2 p-8 mt-10 flex flex-col items-start gap-y-14">
        <div>
          <h2 className="text-[60px] font-normal font-tek uppercase text-white leading-tight">
            Get to Know us
          </h2>
          <p className="text-white text-sm">
            Find out 3 random facts about our team
          </p>
        </div>
        <div className="flex gap-x-10 gap-y-4 flex-wrap"> 
        {teamMembers?.map((teamMember) => (
          <TeamMembers
            name={teamMember?.name}
            position={teamMember.position}
            imageUrl={teamMember.imageUrl}
          />
        ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default GetToKnowUs;
