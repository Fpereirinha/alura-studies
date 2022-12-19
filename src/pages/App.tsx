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
	function endTarefa() {
		if (selecionado) {
			setSelecionado(undefined);
			setTarefas((tarefasAnteriores) =>
				tarefasAnteriores.map((tarefa) => {
					if (tarefa.id === selecionado.id) {
						return {
							...tarefa,
							selecionado: false,
							completado: true,
						};
					}
					return tarefa;
				})
			);
		}
	}
	return (
		<div className={style.AppStyle}>
			<Form setTarefas={setTarefas} />
			<List tarefas={tarefas} selectTask={selectTask} />
			<Cronometro selecionado={selecionado} end={endTarefa} />
		</div>
	);
}

export default App;
