import React, { useState } from "react";
import { useEffect } from "react";
import { firestore } from "../firebase/firebase";
import { collectIdsAndDocs } from "../firebase/utilities";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("current-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "light";
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);
  const [toggle, setToggle] = useState(false);
  const [posts, setPosts] = useState();
  const [allComments, setAllComments] = useState();
  const [likes, setLikes] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  let unsubscribe = null;

  const fetchComments = async () => {
    unsubscribe = firestore.collection("comments").onSnapshot((snapshot) => {
      const comments = snapshot.docs.map(collectIdsAndDocs);
      setAllComments(comments);
    });
  };

  const fetchPosts = async () => {
    unsubscribe = firestore.collection("posts").onSnapshot((snapshot) => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      setPosts(posts);
    });
  };

  const checkTheme = (existing) => {
    const root = window.document.documentElement;
    const isDark = existing === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(existing);

    localStorage.setItem("current-theme", existing);
  };

  if (initialTheme) {
    checkTheme(initialTheme);
  }

  React.useEffect(() => {
    checkTheme(theme);
  }, [theme]);

  useEffect(() => {
    fetchPosts();

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetchComments();

    return () => unsubscribe();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggle,
        setToggle,
        posts,
        setPosts,
        allComments,
        setAllComments,
        likes,
        setLikes,
        bookmarks,
        setBookmarks,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
