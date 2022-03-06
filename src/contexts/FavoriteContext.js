import React, { useState, useContext, useEffect } from "react";
import { blogs } from "../../assets/data/blogs";
import {getData,getAllKeys,storeData,removeData,clearAll } from "../library/helpers/asyncStorage";

const FavoriteContext = React.createContext();

export const FavoriteProvider = ({ children }) => {
    
   const [favoritedBlogList, setFavoritedBlogList] = useState([]);

   useEffect(() => {
     const getFavoritedBlogs = async () => {
       const _favoritedBlogList = await getData("favoritedBlogs");
       _favoritedBlogList && setFavoritedBlogList(_favoritedBlogList);
     };
     getFavoritedBlogs();
   }, []);

   const handleFavorite = (blogId) => {
       console.log(id);
     if (favoritedBlogList.includes(blogId)) {
       const _favoritedBlogList = favoritedBlogList.filter(
         (id) => id !== blogId
       );
       setFavoritedBlogList(_favoritedBlogList);
       storeData("favoritedBlogs", _favoritedBlogList);
     } else {
       const _favoritedBlogList = [...favoritedBlogList, blogId];
       setFavoritedBlogList(_favoritedBlogList);
       storeData("favoritedBlogs", _favoritedBlogList);
     }
   };

  

 return (
   <FavoriteContext.Provider value={{ favoritedBlogList, handleFavorite }}>
     {children}
   </FavoriteContext.Provider>
 );
};
export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};