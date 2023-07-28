import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";

const imageNumberMapping = {};

// Initialize the imageNumberMapping object with values from 220001 to 221238, all set to 0
for (let i = 220001; i <= 2201238; i++) {
  imageNumberMapping[`${i}`] = 0;
}

const Boys = () => {
  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [selectedImageNumber, setSelectedImageNumber] = useState(null);

  useEffect(() => {
    selectRandomPhotos();
  }, []);

  // Function to get a random number between 1 and 1238
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 1238) + 1;
  };

  // Function to make number to 4 digit format 42 --> 0042
  function formatToFourDigits(number) {
    return number.toString().padStart(4, "0");
  }

  // Function to check if a photo exists in the folder
  const doesPhotoExist = (photoName) => {
    try {
      // Assuming photos have a .jpg extension
      require(`./photos/${photoName}.jpg`);
      return true;
    } catch (error) {
      return false;
    }
  };

  //Function for flip the image if rejected
  const fliptheimage = async (value) => {
    let randomNumber1, randomNumber2, photo1Name, photo2Name;

    if (value === 1) {
      do {
        randomNumber2 = formatToFourDigits(getRandomNumber());
        photo2Name = `22${randomNumber2}`;
      } while ((!(await doesPhotoExist(photo2Name)))&&(photo2Name != photo1));
      setPhoto2(photo2Name);
    } else if (value === 2) {
      do {
        randomNumber1 = formatToFourDigits(getRandomNumber());
        photo1Name = `22${randomNumber1}`;
      } while ((!(await doesPhotoExist(photo1Name)))&&(photo1Name != photo2));
      setPhoto1(photo1Name);
    }
  };
  // Function to select two random photos
  const selectRandomPhotos = async () => {
    let randomNumber1, randomNumber2, photo1Name, photo2Name;

    // Loop until we find two valid photo names
    do {
      randomNumber1 = formatToFourDigits(getRandomNumber());
      randomNumber2 = formatToFourDigits(getRandomNumber());
      photo1Name = `22${randomNumber1}`;
      photo2Name = `22${randomNumber2}`;
    } while (
      !(await doesPhotoExist(photo1Name)) ||
      !(await doesPhotoExist(photo2Name))
    );

    setPhoto1(photo1Name);
    setPhoto2(photo2Name);
  };

  const handleImageSelection = (imageName) => {
    setSelectedImageNumber((prevNumber) => prevNumber + 1);
    // You can use the 'imageName' and 'imageNumberMapping' to update the mapping accordingly
    imageNumberMapping[imageName] = imageNumberMapping[imageName] + 1;
    console.log(imageName);
    console.log(imageNumberMapping);
  };

  return (
    <>
      <Navbar />
      <div className="choice-container">
        <div className="choice-heading" >
          <h1>Which one is Hotter?</h1>
        </div>
        <div className="panel1">
          <button
            className="img-button"
            onClick={() => {
              fliptheimage(1);
              handleImageSelection(photo1);
            }}
          >
            {/* <img className="home-img" src={p1} /> */}
            {photo1 && (
              <img
                className="home-img"
                src={require(`./photos/${photo1}.jpg`)}
                alt="Random 1"
              />
            )}
          </button>
        </div>
        <div className="panel2">
          <button
            className="img-button"
            onClick={() => {
              fliptheimage(2);
              handleImageSelection(photo2);
            }}
          >
            {/* <img className="home-img" src={p2} /> */}
            {photo2 && (
              <img
                className="home-img"
                src={require(`./photos/${photo2}.jpg`)}
                alt="Random 2"
              />
            )}
          </button>
        </div>
        <div className="seperator">
          <h1>OR</h1>
        </div>
      </div>
      {/* {selectedImageNumber !== null && (
        <p>Selected Image Number: {selectedImageNumber}</p>
      )} */}
    </>
  );
};

export default Boys;
