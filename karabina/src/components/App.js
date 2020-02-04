import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [], clicked: null };
  _this = this;

  // onSearchSubmit = async term => {
  //   const res = await unsplash.get("/search/photos", {
  //     params: { query: term }
  //   });

  //   this.setState({ images: res.data.results });
  // };

  onImageClick = event => {
    console.log(event);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Found: {this.state.images.length} */}
        <ImageList images={this.state.images} onClickF={this.onImageClick} />
      </div>
    );
  }
}

export default App;
