import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { DOG_API_BASE_URL } from "../constants/common";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const Header = () => {
  const [images, setImages] = useState([]);

  const getRandomImages = async () => {
    const responses = await Promise.all(
      new Array(3)
        .fill(null)
        .map(() => fetch(`${DOG_API_BASE_URL}image/random`))
    );
    const data = await Promise.all(responses.map((el) => el.json()));
    setImages(
      data.map((el) => ({
        id: uuid(),
        url: el.message,
      }))
    );
  };

  useEffect(() => {
    getRandomImages();
  }, []);

  return (
    <div className="header">
      <Grid
        container
        spacing={{ xs: 8, md: 8, lg: 8 }}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      >
        {images.map((image) => (
          <Grid item xs={4} key={image.id}>
            <Card>
              <CardMedia
                sx={{ height: 250 }}
                image={image.url}
                title="green iguana"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Header;
