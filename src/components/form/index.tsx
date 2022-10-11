import React, { FormEvent } from "react";
import Button from "../button";
import style from "./Form.module.sass";
import { ITarefa } from "../../types/tarefa";
class Form extends React.Component<{
	setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
	state = { tarefa: "", tempo: "00:00" };
	saveTarefa(evento: FormEvent<HTMLFormElement>) {
		evento.preventDefault();
		this.props.setTarefas((tarefasAntigas) => [
			...tarefasAntigas,
			{ ...this.state },
		]);
		this.setState({ tarefa: "", tempo: "00:00" });
	}
	render() {
		return (
			<form className={style.novaTarefa} onSubmit={this.saveTarefa.bind(this)}>
				<div className={style.inputContainer}>
					<label htmlFor="tarefa">Adicione um novo estudo</label>
					<input
						type="text"
						name="tarefa"
						id="tarefa"
						value={this.state.tarefa}
						onChange={(Evento) =>
							this.setState({ tarefa: Evento.target.value })
						}
						placeholder="Oque irá estudar ?"
						required
					/>
				</div>
				<div className={style.inputContainer}>
					<label htmlFor="time">Tempo</label>
					<input
						type="time"
						id="time"
						name="time"
						required
						value={this.state.tempo}
						onChange={(Evento) => this.setState({ tempo: Evento.target.value })}
						step="1"
						min="00:00:00"
						max="01:30:00"
					/>
				</div>
				<Button type="submit">Adicionar</Button>
			</form>
		);
	}
}
export default Form;
