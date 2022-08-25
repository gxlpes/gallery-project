import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase"; //firebase storage location
import { ref, listAll, getDownloadURL } from "firebase/storage";

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
