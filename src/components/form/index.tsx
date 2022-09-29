import React from "react";
import Button from "../button";
import style from "./Form.module.sass";
class Form extends React.Component {
	render() {
		return (
			<form className={style.novaTarefa}>
				<div className={style.inputContainer}>
					<label htmlFor="tarefa">Adicione um novo estudo</label>
					<input
						type="text"
						name="tarefa"
						id="tarefa"
						placeholder="Oque irá estudar ?"
						required
					/>
				</div>
				<div className={style.inputContainer}>
					<label htmlFor="time">Qual tempo durará ?</label>
					<input
						type="time"
						id="time"
						name="time"
						required
						step="1"
						min="00:00:00"
						max="01:30:00"
					/>
				</div>
				<Button>Adicionar</Button>
			</form>
		);
	}
}
export default Form;
