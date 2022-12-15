import React from "react";
import style from "./Button.module.sass";
class Button extends React.Component<{
	children?: React.ReactNode;
	type?: "button" | "submit" | "reset" | undefined;
	onclick?: () => void;
}> {
	render() {
		const { type = "button", onclick } = this.props;
		const { children = "Botão" } = this.props;
		return (
			<button type={type} className={style.botao} onClick={onclick}>
				{children}
			</button>
		);
	}
}
export default Button;
