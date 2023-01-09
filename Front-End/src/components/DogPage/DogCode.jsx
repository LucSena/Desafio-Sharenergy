import React, { useState } from "react";

const DogCode = () => {
  const [imageURL, setImageURL] = useState("");

  const getRandomDog = async () => {
    try {
      const response = await fetch("https://random.dog/woof.json");
      const data = await response.json();
      setImageURL(data.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="max-w-xs">
        <h2 className="text-xl font-medium text-center my-4">Random Dog</h2>
        <p className="text-sm text-gray-600 text-center mb-4">
        Clique no botão abaixo para obter uma imagem aleatória de um doguinho.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={getRandomDog}
        >
          Atualizar
        </button>
        {imageURL ? <img src={imageURL} alt="Random Dog" className="w-full h-auto object-cover mx-auto my-4" /> : null}
      </div>
    </div>
  );
};

export default DogCode;
