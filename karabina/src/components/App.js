import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [], clicked: null };
  _this = this;

  onImageClick = event => {
    console.log(event);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} onClickF={this.onImageClick} />
      </div>
    );
  }
}

export default App;
