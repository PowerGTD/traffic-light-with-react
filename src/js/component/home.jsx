import React from "react";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}
	render() {
		let redExtraClass = " ";
		if (this.state.clickedLight === "red") redExtraClass = "selected";
		let yellowExtraClass = " ";
		if (this.state.clickedLight === "yellow") yellowExtraClass = "selected";
		let greenExtraClass = " ";
		if (this.state.clickedLight === "green") greenExtraClass = "selected";

		return (
			<div>
				<div className="light-stem" />
				<div className="light-container">
					<div
						className={"light red " + redExtraClass}
						onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={"light yellow " + yellowExtraClass}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>
					<div
						className={"light green " + greenExtraClass}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
