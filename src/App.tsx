import { useState, useEffect, FormEvent } from "react";
import { Photo } from "./types/Photo";
import * as C from "./App.styles";
import * as Photos from "./services/photos";
import { PhotoItem } from "./components/PhotoItem";

const App = () => {
  const [uploading, setUploading] = useState(false);
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

  const FormSubmithandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;

    // verify if there is a file
    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insertPhotos(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Gallery</C.Header>

        <C.UploadForm method="POST" onSubmit={FormSubmithandler}>
          <input type="file" name="image" />
          <input type="submit" value="Send" />
          {uploading && "Enviando..."}
        </C.UploadForm>

        {loading && (
          <C.ScreenLoading>
            <div className="emoji">👾</div>
          </C.ScreenLoading>
        )}

        {!loading && photos.length > 0 && (
          <C.PhotoList>
            {photos.map((item, index) => (
              <PhotoItem key={index} url={item.url} name={item.name} />
            ))}
          </C.PhotoList>
        )}

        {!loading && photos.length === 0 && (
          <C.ScreenLoading>
            <div>No images uploaded</div>
          </C.ScreenLoading>
        )}
      </C.Area>
    </C.Container>
  );
};

export default App;
