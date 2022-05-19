import React, { useEffect } from "react";

export const InifiniteScrolling = () => {
  useEffect(() => {
    fetchImage();
  }, []);
  const container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  };
  const img = {
    width: "200px",
    height: "200px",
    borderRadius: "5px",
  };
  function fetchImage(numImages = 50) {
    let i = 0;
    while (i < numImages) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
          return (
            <>
              <div style={container}>
                <img src={data.message} alt="" style={img} />
              </div>
            </>
          );
        });
      i++;
    }
  }
  window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    )
      fetchImage();
  });
};
