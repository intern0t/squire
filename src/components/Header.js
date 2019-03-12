import React, { Component } from "react";
import Icon from "./Icon";

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="sub-header">
					<div className="sub-header-section">
						<div className="logo">Squire</div>
					</div>
					<div className="sub-header-section">
						<User
							name="Prashant Shrestha"
							avatar="https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=c3a31eeb7efb4d533647e3cad1de9257"
						/>
					</div>
				</div>
				<div className="sub-header">1</div>
			</div>
		);
	}
}

const User = ({ name, avatar }) => {
	return (
		<div className="sub-header-section-user">
			<ul>
				<li>
					<a href="#" title="">
						<Icon icon="far fa-bell" />
					</a>
				</li>
				<li>
					<a href="#" title="">
						<img src={avatar} className="avatar" />
						{name}
					</a>
					<Icon icon="fas fa-angle-down" />
				</li>
			</ul>
		</div>
	);
};

export default Header;
