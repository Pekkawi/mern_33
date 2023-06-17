import React, { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(false); //at the start the loading will be set to false
  const [allPosts, setAllPosts] = useState(null);

  return <div>Home</div>;
};

export default Home;
