import React, { Component } from "react";
import Filters from "./Filters";
import Tabular from "./Tabular";

class MainContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [
				{
					user: "Random User",
					projectTitle:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					projectDescription: "Random Project Description",
					repoLink: "https://beanstalk.com/",
					majorLanguage: ["javascript"],
					privacy: Math.round(Math.random()),
					dateAdded: "Mar 13 16:29:35 EDT 2019"
				},
				{
					user: "Random User",
					projectTitle:
						"Aenean at quam eget odio varius auctor nec vitae neque.",
					projectDescription: "Random Project Description",
					repoLink: "https://github.com/",
					majorLanguage: ["react"],
					privacy: Math.round(Math.random()),
					dateAdded: "Mar 13 16:29:35 EDT 2019"
				},
				{
					user: "Random User",
					projectTitle:
						"Praesent efficitur sapien ultrices erat tincidunt placerat.",
					projectDescription: "Random Project Description",
					repoLink: "https://bitbucket.com/",
					majorLanguage: ["javascript"],
					privacy: Math.round(Math.random()),
					dateAdded: "Mar 13 16:29:35 EDT 2019"
				},
				{
					user: "Random User",
					projectTitle:
						"Etiam dignissim tellus eu diam feugiat, eu egestas est dapibus.",
					projectDescription: "Random Project Description",
					repoLink: "https://mercurial.com/",
					majorLanguage: ["ruby"],
					privacy: Math.round(Math.random()),
					dateAdded: "Mar 13 16:29:35 EDT 2019"
				},
				{
					user: "Random User",
					projectTitle:
						"Vestibulum pharetra libero facilisis iaculis efficitur.",
					projectDescription: "Random Project Description",
					repoLink: "https://codecommit.com/",
					majorLanguage: ["python"],
					privacy: Math.round(Math.random()),
					dateAdded: "Mar 13 16:29:35 EDT 2019"
				},
				{
					user: "Random User",
					projectTitle: "Etiam ac nulla quis augue gravida vehicula.",
					projectDescription: "Random Project Description",
					repoLink: "https://subversion.com/",
					majorLanguage: ["c#"],
					privacy: Math.round(Math.random()),
					dateAdded: "Mar 13 16:29:35 EDT 2019"
				},
				{
					user: "Random User",
					projectTitle: "Sed sit amet urna id tortor iaculis mollis.",
					projectDescription: "Random Project Description",
					repoLink: "https://gitlab.com/",
					majorLanguage: ["nodejs"],
					privacy: Math.round(Math.random()),
					dateAdded: "Mar 13 16:29:35 EDT 2019"
				}
			],
			filters: {
				title: false,
				interactions: false,
				privacy: false
			},
			searchKey: ""
		};
	}

	onSearch = e => {
		let toSearchKey = e.target.value || "";

		this.setState(prevState => ({
			...prevState,
			searchKey: toSearchKey
		}));
	};

	render() {
		const { data, searchKey } = this.state;

		return (
			<div className="main-container">
				<Filters onSearch={this.onSearch} />
				<Tabular title="Projects" data={data} searchKey={searchKey} />
			</div>
		);
	}
}

export default MainContainer;
