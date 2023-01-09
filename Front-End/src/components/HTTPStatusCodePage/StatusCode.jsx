import React, { useState } from "react";

const CatImage = () => {
    const [statusCode, setStatusCode] = useState("");
    const [imageURL, setImageURL] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://http.cat/' + statusCode);

            if (!response.ok) {
                // If the status code is not found, you can return a default image
                setImageURL("https://http.cat/404");
            } else {
                // If the status code is found, set the imageURL state to the URL of the image
                const imageBlob = await response.blob();
                const imageURL = URL.createObjectURL(imageBlob);
                setImageURL(imageURL);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex items-center h-screen w-full justify-center">
            <div className="max-w-xs">
                <h2 className="text-2xl font-bold text-center mb-4">HTTP Status Code</h2>
                <p className="text-gray-600 text-center mb-6">Digite o código de status HTTP para ver qual gato deseja:</p>
                <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg py-3 px-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="statusCode">
                            HTTP Status Code:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="statusCode"
                            type="text"
                            value={statusCode}
                            onChange={(event) => setStatusCode(event.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
                {imageURL ? (
                    <img src={imageURL} alt={`HTTP status code: ${statusCode}`} className="w-full h-auto object-cover mt-6" />
                ) : null}
            </div>
        </div>
    );
};

export default CatImage;
