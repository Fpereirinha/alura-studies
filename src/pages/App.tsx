import React from "react";
import { useState } from "react";
import Cronometro from "../components/cronometro";
import Form from "../components/form";
import List from "../components/list";
import { ITarefa } from "../types/tarefa";
import style from "./App.module.sass";

function App() {
	const [tarefas, setTarefas] = useState<ITarefa[]>([]);
	return (
		<div className={style.AppStyle}>
			<Form setTarefas={setTarefas} />
			<List tarefas={tarefas} />
			<Cronometro />
		</div>
	);
}

export default App;
