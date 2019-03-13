import React, { Component } from "react";

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
							<th>Language(s)</th>
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
									link="https://github.com/"
								/>
							</td>
							<td>1</td>
							<td>
								<Privacy type={0} />
							</td>
							<td>1</td>
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
							<td>1</td>
							<td>
								<Privacy type={1} />
							</td>
							<td>1</td>
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
							<td>1</td>
							<td>
								<Privacy type={0} />
							</td>
							<td>1</td>
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
							<td>1</td>
							<td>
								<Privacy type={1} />
							</td>
							<td>1</td>
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
							<td>1</td>
							<td>
								<Privacy type={0} />
							</td>
							<td>1</td>
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
	return a.hostname
		.split(".")
		.slice(0, a.hostname.split(".").length - 1)
		.join("");
};

const Repository = ({ type, link }) => {
	var repoType = getDomain(link);

	return (
		<a
			className={`repository${repoType ? `-${repoType}` : null}`}
			href={link}
			title={repoType.toUpperCase()}
		>
			{type.toUpperCase()}
		</a>
	);
};

export default Tabular;
