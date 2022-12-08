import Item from "./item/item";
import style from "./Lista.module.sass";
import { ITarefa } from "../../types/tarefa";
interface Props {
	tarefas: ITarefa[];
	selectTask: (tarefaselecionada: ITarefa) => void;
}

function List({ tarefas, selectTask }: Props) {
	return (
		<aside className={style.listaTarefas}>
			<h2>Estudos do Dia</h2>
			<ul>
				{tarefas.map((tarefa) => (
					<Item selectTask={selectTask} {...tarefa} />
				))}
			</ul>
		</aside>
	);
}
export default List;
