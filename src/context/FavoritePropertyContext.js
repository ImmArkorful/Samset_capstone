import React, { useState, Children, useEffect, useContext } from "react";

import { PropertyService } from "../services";
import { AuthenticationContext } from "./AuthenticationContext";

export const LikedPropertiesContext = React.createContext({
  likedProperties: {},
  likeProperty: null,
});

export const LikedPropertiesProvider = (props) => {
  const [likedProperties, setLikedProperties] = useState({});
  const authContext = useContext(AuthenticationContext);

  useEffect(() => {
    if (authContext.isLoggedIn) {
      PropertyService.getLikedProperties()
        .then((res) => {
          var properties = {};
          res.data.forEach((item) => {
            properties[item._id] = item;
          });
          setLikedProperties(properties);
        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            authContext.logout();
          } else {
            console.log(err.message);
          }
        });
    } else {
      setLikedProperties({});
    }
  }, [authContext.isLoggedIn]);

  const likeProperty = (property, isLiked) => {
    if (isLiked) {
      likedProperties[property._id] = property;
    } else {
      delete likedProperties[property._id];
    }
    setLikedProperties({ ...likedProperties });
  };

  return (
    <LikedPropertiesContext.Provider value={{ likedProperties, likeProperty }}>
      {Children.only(props.children)}
    </LikedPropertiesContext.Provider>
  );
};
