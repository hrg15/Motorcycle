import {
  ref,
  getStorage,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { app } from "../Firebase/Firebase";
import { replaceMotor, isLoadingHandler, removeMotor } from "./MotorReducer";

export const reciveMotorData = () => {
  return async (dispatch) => {
    const getMotorData = async () => {
      dispatch(isLoadingHandler(true));
      const db = getFirestore(app);
      const docSnap = await getDocs(collection(db, "motors"));
      return docSnap;
    };

    try {
      const motorDataArr = [];
      const motorsData = await getMotorData();
      motorsData.forEach((doc) => {
        motorDataArr.push(doc.data());
      });
      dispatch(replaceMotor(motorDataArr));
      dispatch(isLoadingHandler(false));
    } catch (err) {
      console.log("recive data error", err);
    }
  };
};

export const sendMotorData = (data) => {
  return async (dispatch) => {
    console.log("motor data are:", data);
    const uploadMotorData = () => {
      const storage = getStorage(app);
      const db = getFirestore(app);
      const storageRef = ref(storage, `/images/${data.motorid}.jpg`);
      const uploadTask = uploadBytesResumable(storageRef, data.motorimg);

      uploadTask.on(
        "state_chaned",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log("upload error:" + error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("This is url:" + downloadURL);
            const docRef = await setDoc(doc(db, "motors", data.motorid), {
              motorname: data.motorname,
              discription: data.discription,
              motorid: data.motorid,
              motorimg: downloadURL,
            });
          });
        }
      );
    };
    try {
      uploadMotorData();
    } catch (err) {
      console.log("upload error", err);
    }
  };
};

export const removeMotorData = (id) => {
  return async (dispatch) => {
    const deleteMotorDoc = async () => {
      const db = getFirestore(app);
      await deleteDoc(doc(db, "motors", id));
    };
    try {
      await deleteMotorDoc();
      dispatch(removeMotor(id));
      console.log("motor data remeved!");
    } catch (err) {
      console.log("delete error", err);
    }
  };
};
