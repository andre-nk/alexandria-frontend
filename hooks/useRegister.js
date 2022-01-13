import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";

import { projectAuth, projectStorage } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [profilePictureURL, setProfilePictureURL] = useState(null);
  const { dispatch } = useAuthContext();

  const register = async (name, profilePicture, email, password) => {
    setError(null);
    createUserWithEmailAndPassword(projectAuth, email, password)
      .then(async (res) => {
        try {
          const profilePictureRef = ref(
            projectStorage,
            `profilePicture/${res.user.uid}.jpg`
          );

          uploadBytes(profilePictureRef, profilePicture)
            .then(() => {
              getDownloadURL(profilePictureRef)
                .then((url) => {
                  setProfilePictureURL(url);
                })
                .catch((err) => {
                  setError(err.message);
                });
            })
            .catch((err) => {
              setError(err.message);
            });

          console.log(profilePictureURL);

          if (profilePictureURL) {
            updateProfile(res.user, {
              displayName: name,
              photoURL: profilePictureURL,
            });

            //CALL NATIVE API
            const response = await fetch("http://localhost:8080/api/v1/users", {
              method: "POST",
              body: JSON.stringify({
                uid: res.user.uid,
                role: "",
                location: "",
                friends: [],
              }),
            });

            if (response.ok) {
              const responseData = await response.json();

              const user = {
                uid: res.user.uid,
                email: res.user.email,
                displayName: res.user.displayName,
                provider: res.user.providerId,
                photoURL: res.user.photoURL,
                isVerified: res.user.emailVerified,
                role: responseData.data.role,
                location: responseData.data.location,
                friends: responseData.data.friends,
              };

              dispatch({
                type: "LOGIN",
                payload: user,
              });
            }
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
