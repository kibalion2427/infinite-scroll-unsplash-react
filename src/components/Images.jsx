import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";
// import Image from "./Image";
import useFetchHook from "./useFetchHook";

const Images = () => {
  const [queryRequest, setQueryRequest] = useState({
    count: 30,
    start: 0,
  });
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    const { count, start } = queryRequest;
    let newStart = start + count;
    setQueryRequest({ ...queryRequest, start: newStart });
    axios.get(`/api/photos?count=${count}&start=${start}`).then((res) => {
      setImageList([...imageList, ...res.data]);
    });
  };
  return (
    <div className="images">
      <InfiniteScroll
        dataLength={imageList.length}
        next={fetchImages}
        hasMore={true}
        loader={<h4>Loading data</h4>}
      >
        {imageList.map((image, index) => (
          <Image key={index} image={image} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Images;
