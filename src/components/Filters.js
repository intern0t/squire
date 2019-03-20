import React from "react";
import Icon from "./Icon";

const Filters = ({ onSearch }) => {
	return (
		<div className="filter-wrapper">
			<div className="filter-container">
				<div className="filter-container-section">
					<Icon icon="fas fa-filter" />
					Filter(s) :
				</div>
				<div className="filter-container-section">
					<ul>
						<li>
							<span>Search</span>
							<input
								type="text"
								placeholder="Search submitted project(s) ..."
								onChange={onSearch}
							/>
						</li>
						{/* <li>
							<span>Title</span>
							<select onChange={onTitleFilterChange}>
								<option>↓ Ascending</option>
								<option>↑ Descending</option>
							</select>
						</li>
						<li>
							<span>Date</span>
							<select>
								<option>Newest to Oldest</option>
								<option>Oldest to Newest</option>
							</select>
						</li>
						<li>
							<span>Interaction(s)</span>
							<select>
								<option>⇵ Low to High</option>
								<option>⇅ High to Low</option>
							</select>
						</li>
						<li>
							<span>Privacy</span>
							<select>
								<option>♥ Open Source</option>
								<option>⚠ Private Project</option>
							</select>
						</li> */}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Filters;
