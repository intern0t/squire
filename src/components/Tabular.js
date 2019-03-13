import React, { Component } from "react";
import Icon from "./Icon";

class Tabular extends Component {
	state = {
		fakeData: []
	};

	render() {
		const { title } = this.props;

		return (
			<div className="tabular">
				{title || title.length > 0 ? <h1>{title}</h1> : null}
				<table>
					<thead>
						<tr>
							<th>Logo/Images</th>
							<th>Project Title</th>
							<th>Description</th>
							<th>Repository Link</th>
							<th>Major Language(s)</th>
							<th>Privacy</th>
							<th>Date Added</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>1</td>
							<td>1</td>
							<td>
								<Repository
									type="github"
									link="https://beanstalk.com/"
								/>
							</td>
							<td>
								<Language language="javascript" />
							</td>
							<td>
								<Privacy type={0} />
							</td>
							<td>Wed Mar 13 16:29:35 EDT 2019</td>
						</tr>
						<tr>
							<td>1</td>
							<td>1</td>
							<td>1</td>
							<td>
								<Repository
									type="github"
									link="https://github.com/"
								/>
							</td>
							<td>
								<Language language="react" />
							</td>
							<td>
								<Privacy type={1} />
							</td>
							<td>Wed Mar 13 16:29:35 EDT 2019</td>
						</tr>
						<tr>
							<td>1</td>
							<td>1</td>
							<td>1</td>
							<td>
								<Repository
									type="gitlab"
									link="https://gitlab.com/"
								/>
							</td>
							<td>
								<Language language="python" />
							</td>
							<td>
								<Privacy type={0} />
							</td>
							<td>Wed Mar 13 16:29:35 EDT 2019</td>
						</tr>
						<tr>
							<td>1</td>
							<td>1</td>
							<td>1</td>
							<td>
								<Repository
									type="codecommit"
									link="https://codecommit.com/"
								/>
							</td>
							<td>
								<Language language="ruby" />
							</td>
							<td>
								<Privacy type={1} />
							</td>
							<td>Wed Mar 13 16:29:35 EDT 2019</td>
						</tr>
						<tr>
							<td>1</td>
							<td>1</td>
							<td>1</td>
							<td>
								<Repository
									type="bitbucket"
									link="https://bitbucket.com/"
								/>
							</td>
							<td>
								<Language language="c++" />
							</td>
							<td>
								<Privacy type={0} />
							</td>
							<td>Wed Mar 13 16:29:35 EDT 2019</td>
						</tr>
						<tr>
							<td>1</td>
							<td>1</td>
							<td>1</td>
							<td>
								<Repository
									type="mercurial"
									link="https://mercurial.com/"
								/>
							</td>
							<td>
								<Language language="java" />
							</td>
							<td>
								<Privacy type={0} />
							</td>
							<td>Wed Mar 13 16:29:35 EDT 2019</td>
						</tr>
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

	return (
		<div
			className={`language language-${language}`}
			style={{
				backgroundColor: `rgba(${generatedColor}, 0.1)`,
				color: `rgb(${generatedColor})`
			}}
		>
			<Icon icon={`fab fa-${language.toLowerCase()}`} />
			{language.toUpperCase() || "Unknown"}
		</div>
	);
};

export default Tabular;
