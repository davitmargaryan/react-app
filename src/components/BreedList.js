import { useEffect, useState } from "react";
import { DOG_API_BASE_URL } from "../constants/common";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const BreedList = ({ setSelectedBreed }) => {
  const [breedList, setBreedList] = useState([]);

  const [expanded, setExpanded] = useState([]);

  const getAllBreeds = async () => {
    const response = await fetch(`${DOG_API_BASE_URL}list/all`);
    const data = await response.json();
    setBreedList(data.message);
  };

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  useEffect(() => {
    getAllBreeds();
  }, []);

  return (
    <div style={{ flex: 1, overflowY: "auto" }}>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        onNodeToggle={handleToggle}
        multiSelect
      >
        {Object.keys(breedList).map((breed) => (
          <TreeItem
            onClick={() => setSelectedBreed(breed)}
            nodeId={breed}
            label={breed}
          >
            {breedList[breed].map((subBreed) => (
              <TreeItem nodeId={subBreed} label={subBreed} />
            ))}
          </TreeItem>
        ))}
      </TreeView>
    </div>
  );
};

export default BreedList;
