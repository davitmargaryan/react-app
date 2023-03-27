import { useState } from "react";
import Breed from "./Breed";
import BreedList from "./BreedList";

const Content = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <div className="content">
      <BreedList setSelectedBreed={setSelectedBreed} />
      <Breed breed={selectedBreed} />
    </div>
  );
};

export default Content;
