import React from "react";
import style from "./Button.module.sass";
interface Props {
	onclick?: () => void;
	children?: React.ReactNode;
	type?: "button" | "submit" | "reset" | undefined;
}
function Button({ onclick, type, children }: Props) {
	return (
		<button type={type} className={style.botao} onClick={onclick}>
			{children}
		</button>
	);
}
export default Button;
