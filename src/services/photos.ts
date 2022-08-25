import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase"; //firebase storage location
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as createId } from "uuid";

export const getAll = async () => {
  let list: Photo[] = [];

  const imagesFolder = ref(storage, "images"); // main location, subfolder
  const photoList = await listAll(imagesFolder); // read all files in the subfolder

  for (let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i]); //generate the url download

    list.push({
      name: photoList.items[i].name,
      url: photoUrl,
    });
  }

  return list;
};

export const insertPhotos = async (file: File) => {
  if (["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
    let randomName = createId(); // generate the random name of the file
    let newFileFolder = ref(storage, `images/${randomName}`);
    let upload = await uploadBytes(newFileFolder, file); // upload ref file and the original file
    let photoUrl = await getDownloadURL(upload.ref); // generate the link of the photo file

    return {
      // return a photo item
      name: upload.ref.name,
      url: photoUrl,
    } as Photo;
  } else {
    return new Error("Type of file not permitted");
  }
};
