import React from "react";

const HomeHeroComp: React.FC = () => {
  return (
    <section
      id="home"
      className="py-24 bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Ekam Cowork</h1>
        <p className="text-xl text-gray-700 mb-8">
          Your productive space awaits. (Catchy tagline placeholder)
        </p>
        <img
          src="/vite.svg"
          alt="Coworking"
          className="mx-auto w-48 h-48 object-contain"
        />
      </div>
    </section>
  );
};

export default HomeHeroComp;
