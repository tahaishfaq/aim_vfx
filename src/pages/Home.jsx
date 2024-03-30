import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import shape1 from "../assets/127_arrow_icon_logo_with_3d_modern_style copy 2.png";
import shape2 from "../assets/127_arrow_icon_logo_with_3d_modern_style copy 3.png";
import shape3 from "../assets/1.png";
import shape4 from "../assets/5.png";
import shape5 from "../assets/holographic_fluid_drop_shapes_illustration_02 copy 3.png";
import shape6 from "../assets/holographic_fluid_drop_shapes_illustration_02 copy 3.png";
import creativity from "../assets/Creativity.png";
import excellence from "../assets/EXCELLENCE.png";
import shape7 from "../assets/127_arrow_icon_logo_with_3d_modern_style copy 1.png";
import Button from "../components/Button/Button";
const Home = () => {
  return (
    <div className="hero-section">
      <Navbar />
      <img src={shape1} alt="Image 1" class="image1" />
      <img src={shape2} alt="Image 2" class="image2" />
      <img src={shape3} alt="Image 3" class="image3" />
      <img src={shape4} alt="Image 4" class="image4" />
      <img src={shape5} alt="Image 5" class="image5" />
      <img src={shape6} alt="Image 6" class="image6" />
      <img src={creativity} alt="Image 7" class="creativityText" />
      <img src={excellence} alt="Image 8" class="excellenceText" />
      <img src={shape7} alt="Image 9" class="image7" />
      <p className="hero-section-heading">
        Where Creativity Meets Visual Excellence on a Monthly Basis
      </p>
      <p className="hero-section-description">
        Unleash the creative potential of your videos through our monthly
        subscription model, powered by AIM VFX a video production agency
        proficient in video editing, motion graphics, branding, and VFX.
      </p>
      <div className="hero-section-buttons flex flex-col gap-y-5 b">
        <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
          Pricing
        </Button>
        <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
          book a call
        </Button>
      </div>
    </div>
  );
};

export default Home;
