import React from "react";
import style from "./Button.module.sass";
class Button extends React.Component {
	render() {
		return <button className={style.botao}>Botão</button>;
	}
}
export default Button;
