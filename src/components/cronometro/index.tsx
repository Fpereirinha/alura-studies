import Button from "../button";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../common/time";
interface Props {
	selecionado: ITarefa | undefined;
}
export default function Cronometro({ selecionado }: Props) {
	const [tempo, setTempo] = useState<number>();
	useEffect(() => {
		if (selecionado?.tempo) {
			setTempo(tempoParaSegundos(selecionado.tempo));
		}
	}, [selecionado]);
	return (
		<div className={style.cronometro}>
			<p className={style.titulo}>Escolha um card e inicie o cronometro</p>
			<div className={style.relogioWrapper}>
				<Relogio tempo={tempo} />
			</div>
			<Button>Começar</Button>
		</div>
	);
}
