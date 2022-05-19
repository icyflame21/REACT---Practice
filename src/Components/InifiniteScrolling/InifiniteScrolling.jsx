import React, { useEffect, useState } from "react";
let API_KEY = "21f03053e26ab7eff71356d94e8eaca7";

export const InifiniteScrolling = () => {
  const [arr, setArr] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setArr([...arr, ...data.results]);
      });
  }, [page]);

  const container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginTop: "50px",
  };
  const img = {
    width: "200px",
    height: "200px",
    borderRadius: "5px",
  };

  const handleImage = (banner) => {
    if (banner == null) {
      return "https://images.unsplash.com/photo-1580265862291-4251b8c7e836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    } else return `https://image.tmdb.org/t/p/w500/${banner}`;
  };

  window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setPage((temp) => temp + 1);
    }
  });

  return (
    <div style={container}>
      {arr.map((ele) => (
        <img src={handleImage(ele.poster_path)} style={img} key={ele.id} />
      ))}
    </div>
  );
  //
};
