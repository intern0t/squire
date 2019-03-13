import React, { Component } from "react";
import Filters from "./Filters";
import Tabular from "./Tabular";

class MainContainer extends Component {
	render() {
		return (
			<div className="main-container">
				<Filters />
				<Tabular title="Projects" />
			</div>
		);
	}
}

export default MainContainer;
