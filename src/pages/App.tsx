import React from "react";
import { useState } from "react";
import Cronometro from "../components/cronometro";
import Form from "../components/form";
import List from "../components/list";
import { ITarefa } from "../types/tarefa";
import style from "./App.module.sass";

function App() {
	const [tarefas, setTarefas] = useState<ITarefa[]>([]);
	const [selecionado, setSelecionado] = useState<ITarefa>();
	function selectTask(tarefaselecionada: ITarefa) {
		setTarefas((tarefasAnteriores) =>
			tarefasAnteriores.map((tarefa) => ({
				...tarefa,
				selecionado: tarefa.id === tarefaselecionada.id ? true : false,
			}))
		);
		setSelecionado(tarefaselecionada);
	}
	return (
		<div className={style.AppStyle}>
			<Form setTarefas={setTarefas} />
			<List tarefas={tarefas} selectTask={selectTask} />
			<Cronometro selecionado={selecionado} />
		</div>
	);
}

export default App;
