import React from "react";
import style from "./Button.module.sass";
class Button extends React.Component<{
	children?: React.ReactNode;
}> {
	render() {
		return (
			<button className={style.botao}>
				{this.props.children ? this.props.children : "Botão"}
			</button>
		);
	}
}
export default Button;
