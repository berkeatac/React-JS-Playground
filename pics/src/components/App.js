import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization:
          "Client-ID 5824724607d2fad613cba2c83a8021f936843a005cb1c4979b647b52bfaafdda"
      },
      params: {
        query: term
      }
    });
    console.log(res.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
