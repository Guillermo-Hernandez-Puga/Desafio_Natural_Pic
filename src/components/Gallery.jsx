import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(MyContext);
  console.log(photos);
  const addFav = (id) => {
    const photoLike = photos.map((photo) => {
      console.log(photo.id);
      if (photo.id === id) {
        return {
          ...photo,
          isFav: !photo.isFav,
        };
      }
      return photo;
     
    });
    setPhotos(photoLike);

  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {console.log(photos)}
      {photos.map((photo, i) => (
        <div
          key={i}
          onClick={() => addFav(photo.id)}
          className="photo"
          style={{
            backgroundImage: `url(${photo.src.large})`,
          }}
        >
          <IconHeart filled={photo.isFav} />
          {""}
          <section>
            <p>{photo.alt}</p>
            <h4>{photo.photographer}</h4>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Gallery;