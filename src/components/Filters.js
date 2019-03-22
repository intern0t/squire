import React from "react";
import Icon from "./Icon";

const Filters = ({ onSearch }) => {
	return (
		<div className="filter-wrapper">
			<div className="filter-container">
				<div className="filter-container-section">
					<ul>
						<li>
							<span>
								<Icon icon="fas fa-search" />
							</span>
							<input
								className="search-box"
								type="text"
								placeholder="Search submitted project(s) or filter current listed project(s) ..."
								onChange={onSearch}
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Filters;
