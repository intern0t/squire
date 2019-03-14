import React, { Component } from "react";
import Icon from "./Icon";

class Tabular extends Component {
	state = {
		fakeData: [
			{
				user: "Random User",
				projectTitle: "Random Project Title",
				projectDescription: "Random Project Description",
				repoLink: "https://beanstalk.com/",
				majorLanguage: ["javascript"],
				privacy: Math.round(Math.random()),
				dateAdded: "Mar 13 16:29:35 EDT 2019"
			},
			{
				user: "Random User",
				projectTitle: "Random Project Title",
				projectDescription: "Random Project Description",
				repoLink: "https://github.com/",
				majorLanguage: ["react"],
				privacy: Math.round(Math.random()),
				dateAdded: "Mar 13 16:29:35 EDT 2019"
			},
			{
				user: "Random User",
				projectTitle: "Random Project Title",
				projectDescription: "Random Project Description",
				repoLink: "https://bitbucket.com/",
				majorLanguage: ["javascript"],
				privacy: Math.round(Math.random()),
				dateAdded: "Mar 13 16:29:35 EDT 2019"
			},
			{
				user: "Random User",
				projectTitle: "Random Project Title",
				projectDescription: "Random Project Description",
				repoLink: "https://mercurial.com/",
				majorLanguage: ["ruby"],
				privacy: Math.round(Math.random()),
				dateAdded: "Mar 13 16:29:35 EDT 2019"
			},
			{
				user: "Random User",
				projectTitle: "Random Project Title",
				projectDescription: "Random Project Description",
				repoLink: "https://codecommit.com/",
				majorLanguage: ["python"],
				privacy: Math.round(Math.random()),
				dateAdded: "Mar 13 16:29:35 EDT 2019"
			},
			{
				user: "Random User",
				projectTitle: "Random Project Title",
				projectDescription: "Random Project Description",
				repoLink: "https://subversion.com/",
				majorLanguage: ["c#"],
				privacy: Math.round(Math.random()),
				dateAdded: "Mar 13 16:29:35 EDT 2019"
			},
			{
				user: "Random User",
				projectTitle: "Random Project Title",
				projectDescription: "Random Project Description",
				repoLink: "https://gitlab.com/",
				majorLanguage: ["nodejs"],
				privacy: Math.round(Math.random()),
				dateAdded: "Mar 13 16:29:35 EDT 2019"
			}
		]
	};

	render() {
		const { title } = this.props;
		const { fakeData } = this.state;

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
						{fakeData && fakeData.length > 0
							? fakeData.map(data => {
									return (
										<tr>
											<td>{data.user}</td>
											<td title={data.projectTitle}>
												{data.projectTitle}
											</td>
											<td title={data.projectDescription}>
												{data.projectDescription}
											</td>
											<td>
												<Repository
													link={data.repoLink}
												/>
											</td>
											<td>
												<Language
													language={
														data.majorLanguage[0] ||
														"Unknown"
													}
												/>
											</td>
											<td>
												<Privacy type={data.privacy} />
											</td>
											<td>{data.dateAdded}</td>
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

	console.log(formattedLanguage);

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
