import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";

import { projectAuth, projectStorage } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [profilePictureURL, setProfilePictureURL] = useState(null);
  const { dispatch } = useAuthContext();

  const register = (name, profilePicture, email, password) => {
    setError(null);
    createUserWithEmailAndPassword(projectAuth, email, password)
      .then((res) => {
        try {
          const profilePictureRef = ref(
            projectStorage,
            `profilePicture/${res.user.uid}.jpg`
          );

          uploadBytes(profilePictureRef, profilePicture)
            .then(() => {
              getDownloadURL(profilePictureRef)
                .then((url) => {
                  console.log(url);
                  setProfilePictureURL(url);
                })
                .catch((err) => {
                  setError(err.message);
                });
            })
            .catch((err) => {
              setError(err.message);
            });

          if (profilePictureURL) {
            updateProfile(res.user, {
              displayName: name,
              photoURL: profilePictureURL,
            });

            //CALL NATIVE API

            dispatch({
              type: "LOGIN",
              payload: res.user,
            });
          }
        } catch (err) {
          setError(err.message);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, register };
};
