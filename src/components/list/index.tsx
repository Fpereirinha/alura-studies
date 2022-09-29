import React, { useState } from "react";
import Item from "./item/item";
import style from "./Lista.module.sass";
function List() {
	const [tarefas, setTarefas] = useState([
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
	]);
	return (
		<aside className={style.listaTarefas}>
			<h2
				onClick={() => {
					setTarefas([...tarefas, { tarefa: "oloco", tempo: "01:00:00" }]);
				}}
			>
				Estudos do Dia
			</h2>
			<ul>
				{tarefas.map((tarefa, key) => (
					<Item key={key} {...tarefa} />
				))}
			</ul>
		</aside>
	);
}
export default List;
