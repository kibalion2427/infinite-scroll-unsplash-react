import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

import Image from "./Image";

class ImageList extends Component {
  state = {
    images: [],
    count: 30,
    start: 0,
  };

  componentDidMount() {
    this.loadData();
  }
  componentDidUpdate() {}

  loadData = () => {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + this.state.count });
    axios({
      method: "GET",
      url: "/api/photos",
      params: { count: count, start: start },
    })
      .then((res) => {
        // this.setState({ images: this.state.images.concat(res.data) });
        this.setState({ images: [...this.state.images, ...res.data] });
        console.log("new state", this.state.images);
      })
      .catch((e) => {
        return e;
      });
  };
  render() {
    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.loadData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.images.map((img, index) => {
            return <Image key={index} image={img} />;
          })}
        </InfiniteScroll>
      </div>
    );
  }
}

export default ImageList;
