import React from "react";
import { useState } from "react";
import Cronometro from "../components/cronometro";
import Form from "../components/form";
import List from "../components/list";
import { ITarefa } from "../types/tarefa";
import style from "./App.module.sass";

function App() {
	const [tarefas, setTarefas] = useState<ITarefa[]>([
		{
			tarefa: "sss",
			tempo: "sss",
			selecionado: true,
			completado: true,
			id: "sss",
		},
	]);
	const [selecionado, setSelecionado] = useState<ITarefa>();
	function selectTask(tarefaselecionada: ITarefa) {
		setSelecionado(tarefaselecionada);
	}
	return (
		<div className={style.AppStyle}>
			<Form setTarefas={setTarefas} />
			<List tarefas={tarefas} selectTask={selectTask} />
			<Cronometro />
		</div>
	);
}

export default App;
