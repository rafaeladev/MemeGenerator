import React, { useState } from "react";
import memesData from "../../memesDatas.js";

const Form = () => {
    //const [memeImage, setMemeImage] = useState("");
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button onClick={getMemeImage} className="form--button">
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} alt="meme" className="meme--image" />
        </main>
    );
};

export default Form;
