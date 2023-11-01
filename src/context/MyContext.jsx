import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const MyContext = createContext();

const photo_Url = "/public/photos.json";

const DataProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(photo_Url);
      console.log(response);
      if (response.status !== 200) {
        throw new error("No hay Data que mostrar");
      }
      const { photos: photosDB } = response.data;
      console.log(photos);
      setPhotos(photosDB.map((photo) => ({ ...photo, isFav: false })));
      console.log(photosDB);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <MyContext.Provider
      value={{
        photos,
        setPhotos,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default DataProvider;