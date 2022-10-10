import Item from "./item/item";
import style from "./Lista.module.sass";
import { ITarefa } from "../../types/tarefa";

function List({ tarefas }: { tarefas: ITarefa[] }) {
	return (
		<aside className={style.listaTarefas}>
			<h2>Estudos do Dia</h2>
			<ul>
				{tarefas.map((tarefa, key) => (
					<Item key={key} {...tarefa} />
				))}
			</ul>
		</aside>
	);
}
export default List;
