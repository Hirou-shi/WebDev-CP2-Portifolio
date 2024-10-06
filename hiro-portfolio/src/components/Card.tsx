import React from "react";

function Cards() {
  const cardData = [
    {
      id: 1,
      title: "Airbnb",
      description: "This is a project that copy the Airbnb site",
      imageUrl: "../src/assets/Airbnb.png",
      windowlink: '',
    },
    {
      id: 2,
      title: "Global",
      description: "This have CSS, Javascripts and HTML basics functions.",
      imageUrl: "../src/assets/Global.png",
      windowlink: '',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs"
        >
          <img
            src={card.imageUrl}
            alt={card.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-700">{card.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;