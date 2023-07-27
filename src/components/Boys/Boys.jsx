import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const imageNumberMapping = {};

// Initialize the imageNumberMapping object with values from 220001 to 221238, all set to 0
for (let i = 220001; i <= 221238; i++) {
  imageNumberMapping[`${i}`] = 0;
}

const Boys = () => {
  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [selectedImageNumber, setSelectedImageNumber] = useState(null);

  // Function to get a random number between 1 and 1238
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 1238) + 1;
  };

  // Function to check if a photo exists in the folder
  const doesPhotoExist = (photoName) => {
    try {
      // Assuming photos have a .jpg extension
      require(`./photos/${photoName}.png`);
      return true;
    } catch (error) {
      return false;
    }
  };

  // Function to select two random photos
  const selectRandomPhotos = async () => {
    let randomNumber1, randomNumber2, photo1Name, photo2Name;

    // Loop until we find two valid photo names
    do {
      randomNumber1 = getRandomNumber();
      randomNumber2 = getRandomNumber();
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
      <div>
        <button onClick={selectRandomPhotos}>Select Random Photos</button>
        <div className="imgContainer">
          <div className="disImg1Container">
            {photo1 && (
              <img
                className="disImg1"
                src={require(`./photos/${photo1}.png`)}
                alt="Random 1"
                onClick={() => handleImageSelection(photo1)}
              />
            )}
          </div>
          <div className="disImg2Container">
            {photo2 && (
              <img
                className="disImg2"
                src={require(`./photos/${photo2}.png`)}
                alt="Random 2"
                onClick={() => handleImageSelection(photo2)}
              />
            )}
          </div>
        </div>
      </div>
      {selectedImageNumber !== null && (
        <p>Selected Image Number: {selectedImageNumber}</p>
      )}
    </>
  );
};

export default Boys;
