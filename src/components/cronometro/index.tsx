import Button from "../button";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss";
import { ITarefa } from "../../types/tarefa";
import { useState } from "react";
import { tempoParaSegundos } from "../common/time";
interface Props {
	selecionado: ITarefa | undefined;
}
export default function Cronometro({ selecionado }: Props) {
	const [tempo, setTempo] = useState<number>();
	if (selecionado?.tempo) {
		setTempo(tempoParaSegundos(selecionado.tempo));
	}
	return (
		<div className={style.cronometro}>
			<p className={style.titulo}>Escolha um card e inicie o cronometro</p>
			Tempo: {tempo}
			<div className={style.relogioWrapper}>
				<Relogio />
			</div>
			<Button>Começar</Button>
		</div>
	);
}
