import React, { Component } from "react";
import Icon from "./Icon";
import uuidv4 from "uuid/v4";

class Tabular extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			filters: {}
		};
	}

	componentDidMount() {
		const { data, filters } = this.props;
		if (data) {
			this.setState(
				prevState => ({
					...prevState,
					data,
					filters
				}),
				this.filterData
			);
		}
	}

	filterData = valuesToFilter => {
		const { searchKey } = this.props;

		if (valuesToFilter && valuesToFilter != undefined) {
			return valuesToFilter.filter(
				value =>
					value.projectTitle.toLowerCase().includes(searchKey) ||
					value.projectDescription
						.toLowerCase()
						.includes(searchKey) ||
					value.majorLanguage.join("").includes(searchKey) ||
					value.repoLink.includes(searchKey)
			);
		} else {
			return null;
		}
	};

	render() {
		const { title } = this.props;
		const { data } = this.state;

		return (
			<div className="tabular">
				{title || title.length > 0 ? <h1>{title}</h1> : null}
				<table>
					<thead>
						<tr>
							<th>User</th>
							<th>Project Title</th>
							<th>Description</th>
							<th>Repository Link</th>
							<th>Major Language(s)</th>
							<th>Privacy</th>
							<th>Date Added</th>
						</tr>
					</thead>
					<tbody>
						{data && data.length > 0
							? this.filterData(data).map(_data => {
									return (
										<tr key={uuidv4()}>
											<td>{_data.user}</td>
											<td title={_data.projectTitle}>
												{_data.projectTitle}
											</td>
											<td
												title={_data.projectDescription}
											>
												{_data.projectDescription}
											</td>
											<td>
												<Repository
													link={_data.repoLink}
												/>
											</td>
											<td>
												<Language
													language={
														_data
															.majorLanguage[0] ||
														"Unknown"
													}
												/>
											</td>
											<td>
												<Privacy type={_data.privacy} />
											</td>
											<td>{_data.dateAdded}</td>
										</tr>
									);
							  })
							: null}
					</tbody>
				</table>
			</div>
		);
	}
}

const Privacy = ({ type }) => {
	return (
		<div className="privacy">
			<div className={`privacy-${type === 0 ? "oss" : "private"}`}>
				{type === 0 ? "Open Source" : "Private"}
			</div>
		</div>
	);
};

/**
 * Extract domain without the TLD.
 * @param {*} url
 */
var getDomain = url => {
	var a = document.createElement("a");
	a.href = url;
	return (
		a.hostname
			.split(".")
			.slice(0, a.hostname.split(".").length - 1)
			.join("") || "Unknown"
	);
};

const Repository = ({ type, link }) => {
	var repoType = getDomain(link);

	return (
		<a
			className={`repository${repoType ? `-${repoType}` : null}`}
			href={link}
			title={repoType.toUpperCase()}
		>
			<Icon icon={`fab fa-${repoType || "code-branch"}`} />{" "}
			{repoType.toUpperCase()}
		</a>
	);
};

/**
 * Special thanks to https://stackoverflow.com/a/5624139
 */
var generateRandomColor = () => {
	var toReturn = null;
	var generatedHex =
		"#" +
		Math.random()
			.toString(16)
			.substr(-6);
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	toReturn = generatedHex.replace(shorthandRegex, function(m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(toReturn);
	const parsedRGB =
		`${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
			result[3],
			16
		)}` || null;
	return parsedRGB;
};

const Language = ({ language }) => {
	var generatedColor = generateRandomColor();
	const languagesAndIcons = {
		javascript: "js",
		ruby: "gem",
		unknown: "code"
	};
	var formattedLanguage =
		Object.entries(languagesAndIcons).find(data => {
			if (data[0].toLowerCase() === language.toLowerCase()) {
				return data[1];
			}
		}) ||
		language ||
		"code";

	return (
		<div
			className={`language language-${language}`}
			style={{
				backgroundColor: `rgba(${generatedColor}, 0.2)`,
				color: `rgb(${generatedColor})`
			}}
		>
			<Icon
				icon={`${
					formattedLanguage === "code"
						? "fas fa-code"
						: `fab fa-${formattedLanguage}`
				}`}
			/>
			{language.toUpperCase() || "Unknown"}
		</div>
	);
};

export default Tabular;
