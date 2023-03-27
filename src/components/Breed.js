import { useEffect, useState } from "react";

const Breed = ({ breed }) => {
  console.log(breed);
  const [breedUrls, setBreedUrls] = useState([]);

  const getBreedImages = async (breed) => {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    setBreedUrls(data.message.slice(0, 5));
  };

  useEffect(() => {
    if (breed) {
      getBreedImages(breed);
    }
  }, [breed]);

  return (
    <div style={{ flex: 1, overflow: "hidden" }}>
      {breedUrls.map((url) => (
        <img width={300} src={url} />
      ))}
    </div>
  );
};

export default Breed;
