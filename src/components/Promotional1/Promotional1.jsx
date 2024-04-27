import Camada from "../../assets/images/Camada_1.png";
import Capa from "../../assets/images/Capa.png";
import Capa1 from "../../assets/images/Capa_1.png";
import Layer from "../../assets/images/Layer.png";
import Vector from "../../assets/images/Vector.png";
import Arrow from "../../assets/images/Arrow.png";

const people = [
  {
    image: Camada,
  },
  {
    image: Capa,
  },
  {
    image: Capa1,
  },
  {
    image: Layer,
  },
  {
    image: Layer,
  },
  {
    image: Vector,
  },
];

export default function Promotional1() {
  return (
    <div className="promotional-section">
      <div className="text-center text-[#fff]">
        <h className="font-tek font-[400] text-[111px]">
          PROMOTIONAL VIDEOS services
        </h>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-64  "
      >
        {people.map((person, ind) => (
          <li key={ind} className="col-span-1 flex flex-col">
            <div className="	">
              <div className="flex flex-1 flex-col p-8 bg-slate-800 rounded-[34px] border-[8px]	border-sky-700 	">
                <img
                  className="mx-auto h-32 w-32"
                  src={person.image}
                  alt=" im cannot export"
                />
              </div>
              <div className="px-7 cursor-pointer">
                <div className=" flex flex-1 justify-between px-5 py-4   rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4] relative bottom-6 hover:bg-gray-700">
                  <button>Ad design</button>
                  <span>
                    <img src={Arrow} alt="" />
                  </span>
                </div>
              </div>
              <div>
                <p className="px-7 font-Rubik font-light	text-base text-[#E4E4E4] py-6 ">
                  Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae
                  eget tempus donec pellentesque vivamus felis.
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
