import { ITarefa } from "../../../types/tarefa";
import style from "../Lista.module.sass";
interface Props extends ITarefa {
	selectTask: (tarefaselecionada: ITarefa) => void;
}
export default function Item({
	tarefa,
	tempo,
	selecionado,
	completado,
	id,
	selectTask,
}: Props) {
	return (
		<li
			className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${
				completado ? style.itemCompletado : ""
			}`}
			onClick={() =>
				!completado &&
				selectTask({ tarefa, tempo, selecionado, completado, id })
			}
		>
			<h3>{tarefa}</h3>
			<span>{tempo}</span>
			{completado && (
				<span className={style.concluido} aria-Label="tarefa completada"></span>
			)}
		</li>
	);
}
