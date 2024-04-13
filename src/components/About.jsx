import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-[50vh] w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="flex flex-col space-y-5 py-5 items-baseline max-w-7xl mx-auto space-x-8 lg:space-x-12">
        <h1 className="text-4xl">About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius
          ratione vitae, eveniet excepturi ullam molestias facilis architecto
          vel iusto officiis illo officia beatae accusantium labore nam? Totam,
          nobis optio!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quae
          quisquam, provident magni quidem explicabo, maiores odit quos vitae
          sit rerum quod laborum ratione soluta dolorem sapiente! Architecto,
          fugiat rerum.
        </p>
      </div>
    </div>
  );
};

export default About;
