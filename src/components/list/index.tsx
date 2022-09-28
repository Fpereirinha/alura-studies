import React from "react";
import style from "./Lista.module.sass";
function List() {
	const tarefas = [
		{
			tarefa: "React",
			tempo: "02:00:00",
		},
		{
			tarefa: "JavaScript",
			tempo: "01:00:00",
		},
		{
			tarefa: "TypeScript",
			tempo: "03:00:00",
		},
	];
	return (
		<aside className={style.listaTarefas}>
			<h2>Estudos do Dia</h2>
			<ul>
				{tarefas.map((tarefa, key) => (
					<li key={key} className={style.item}>
						<h3>{tarefa.tarefa}</h3>
						<span>{tarefa.tempo}</span>
					</li>
				))}
			</ul>
		</aside>
	);
}
export default List;
