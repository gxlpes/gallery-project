import { useState, useEffect } from "react";
import { Photo } from "./types/Photo";
import * as C from "./App.styles";
import * as Photos from "./services/photos";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    };
    getPhotos();
  }, []);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Gallery</C.Header>
        {loading && (
          <C.ScreenLoading>
            <div className="emoji">👾</div>
            <div>Loading...</div>
          </C.ScreenLoading>
        )}

        {!loading && photos.length > 0 && (
          <C.PhotoList>
            <>
              {photos.map((item, index) => {
                <div>{item.name}</div>;
              })}
            </>
          </C.PhotoList>
        )}
      </C.Area>
    </C.Container>
  );
};

export default App;
