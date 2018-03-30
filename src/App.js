// @flow

import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faAmbulance } from "@fortawesome/fontawesome-free-solid";

import City from "./City";
import { CITIES } from "./data";

function normalize(str: string): string {
  return str
    .toLowerCase()
    .replace("Saint", "St")
    .replace(/(\s|\.)+/g, "");
}

function match(str: string): string | null {
  str = normalize(str);

  let matches: string[] = [];
  for (const city of CITIES) {
    const normCity = normalize(city);
    if (normCity.startsWith(str)) {
      matches.push(city);
    }
  }

  if (matches.length === 1) {
    return matches[0];
  }

  return null;
}

class App extends Component {
  state = {
    city: "",
    recentCities: [],
    riskyCities: []
  };

  render() {
    const { recentCities, riskyCities, city } = this.state;
    return (
      <div>
        <span className={css(styles.header)}>
          <span className={css(styles.logo)}>
            <FontAwesomeIcon icon={faAmbulance} size="2x" />
          </span>
          <h1 className={css(styles.appName)}>
            Pandemic Tool by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={css(styles.headerLink)}
              href="https://nettek.ca"
            >
              Joshua Netterfield
            </a>
          </h1>
        </span>
        <div className={css(styles.content)}>
          <div>
            <input
              className={css(styles.addCity)}
              autoFocus
              placeholder="Type a city when you add a cube"
              onChange={this.handleCityPartiallyEntered}
              value={city}
            />
          </div>
          <h2>At risk</h2>
          {riskyCities.map((city, i) => (
            <City
              key={i}
              name={city}
              onRemove={() => {
                this.setState({
                  riskyCities: riskyCities.filter(rCity => rCity !== city)
                });
              }}
            />
          ))}
          {!riskyCities.length && <span>Nothing to point out</span>}
          <div />
          <h2>Recent</h2>
          <div>
            {recentCities.map((city, i) => (
              <City
                key={i}
                name={city}
                onRemove={() => {
                  this.setState({
                    recentCities: recentCities.filter(rCity => rCity !== city)
                  });
                }}
              />
            ))}
            {!recentCities.length && <span>Nothing added</span>}
          </div>
          <button
            className={css(styles.epidemic)}
            onClick={this.handleEpidemic}
          >
            Epidemic!
          </button>
        </div>
      </div>
    );
  }

  handleCityPartiallyEntered = ev => {
    const partialCity = ev.target.value;
    const matchedCity = match(partialCity);
    if (matchedCity) {
      this.setState({
        city: "",
        recentCities: [
          matchedCity,
          ...this.state.recentCities.filter(city => city !== matchedCity)
        ],
        riskyCities: this.state.riskyCities.filter(city => city !== matchedCity)
      });
    } else {
      this.setState({
        city: partialCity
      });
    }
  };

  handleEpidemic = () => {
    this.setState({
      riskyCities: [...this.state.recentCities, ...this.state.riskyCities],
      recentCities: []
    });
  };
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "white",
    borderBottom: "1px solid black",
    display: "flex",
    height: 50,
    minWidth: 185,
    width: "100%",
    transition: "background 100ms ease-in-out"
  },
  headerLink: {
    color: "white",
    ":hover": {
      color: "red"
    }
  },
  logo: {
    padding: 9
  },
  appName: {
    fontSize: 18,
    padding: "17px 6px",
    margin: 0,
    fontWeight: "normal",
    "@media (max-width: 360px)": {
      fontSize: 14,
      padding: "19px 6px"
    },
    "@media (max-width: 298px)": {
      fontSize: 12,
      padding: "20px 6px"
    }
  },
  content: {
    maxWidth: 400,
    margin: "20px auto",
    color: "white",
    background: "rgba(0,0,0,0.6)",
    padding: 8,
    borderRadius: 4
  },
  addCity: {
    width: "100%",
    height: 40,
    fontSize: 16,
    boxSizing: "border-box"
  },
  epidemic: {
    marginTop: 20,
    width: "100%",
    boxSizing: "border-box",
    color: "red",
    height: 40,
    fontSize: 16
  }
});

export default App;
