import React from "react";
import "./App.css";
import MovieCard from "./MovieCard.js";
import ImdbHeader from "./ImdbHeader.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Actors from "./Actors";
import Awards from "./Awards";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [
        {
          id: 1,
          addedToWatchList: false,
          name: "Starwars",
          poster:
            "https://cdn.vox-cdn.com/thumbor/f9dT1Qj9QBrKr9vrTHCcGejtCjY=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9427327/star_wars_poster.jpg",
          rating: 8,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 2,
          name: "Lord Of the Rings",
          addedToWatchList: false,
          poster:
            "https://images-na.ssl-images-amazon.com/images/I/8150KG7y2EL.jpg",
          rating: 9,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 3,
          name: "Twilight",
          addedToWatchList: false,
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDMwNjAzNzYwOF5BMl5BanBnXkFtZTcwMDY5NzcyMw@@._V1_.jpg",
          rating: 7,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 4,
          name: "Troy",
          addedToWatchList: false,
          poster:
            "https://images.wolfgangsvault.com/m/xlarge/ZZZ060836-PO/troy-poster-may-14-2004.webp",
          rating: 4,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 5,
          name: "Looney Tunes",
          addedToWatchList: false,
          poster:
            "https://images-na.ssl-images-amazon.com/images/I/71pGumdHYQL._AC_SY741_.jpg",
          rating: 6,
          details:
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    };
  }

  render() {
    const { movieData } = this.state;
    return (
      <div className="App">
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/actors">Actors</Link>
            </li>
            <li>
              <Link to="/awards">Awards</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/actors" component={Actors}></Route>
            <Route exact path="/awards" component={Awards}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
