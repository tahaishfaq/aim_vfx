import React from "react";

const Location = () => {
  const mainHeading = "Location";
  const subHeading =
    "Take a look at all the countries that AIM FX team members are based in.";

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="mt-8 flex flex-col items-center">
        <h2 className="text-[60px] text-white font-tek leading-tight">Location</h2>
        <p className="text-gray-200 text-sm">
          Take a look at all the countries that AIM FX team members are based
          in.
        </p>
      </div>

      <div className="mt-8 w-full">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52813741.10308215!2d-161.48407864661795!3d36.1057979664017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1713190560678!5m2!1sen!2s"
            width="1500"
            height="450"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
