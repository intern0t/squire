import React, { Component } from "react";
import MainContainer from "./components/MainContainer";

import "./styles/squire.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<MainContainer />
				<Footer />
			</div>
		);
	}
}

export default App;
