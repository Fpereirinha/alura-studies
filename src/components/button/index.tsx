import React from "react";
import style from "./Button.module.sass";
class Button extends React.Component<{
	children?: React.ReactNode;
	type?: "button" | "submit" | "reset" | undefined;
}> {
	render() {
		const { type = "button" } = this.props;
		return (
			<button type={type} className={style.botao}>
				{this.props.children ? this.props.children : "Botão"}
			</button>
		);
	}
}
export default Button;
