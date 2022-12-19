import Button from "../button";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../common/time";
interface Props {
	selecionado: ITarefa | undefined;
	end: () => void;
}
export default function Cronometro({ selecionado, end }: Props) {
	const [tempo, setTempo] = useState<number>();
	useEffect(() => {
		if (selecionado?.tempo) {
			setTempo(tempoParaSegundos(selecionado.tempo));
		}
	}, [selecionado]);
	function regressiva(contador: number = 0) {
		setTimeout(() => {
			if (contador > 0) {
				setTempo(contador - 1);
				return regressiva(contador - 1);
			}
			end();
		}, 0);
	}
	return (
		<div className={style.cronometro}>
			<p className={style.titulo}>Escolha um card e inicie o cronometro</p>
			<div className={style.relogioWrapper}>
				<Relogio tempo={tempo} />
			</div>
			<Button onclick={() => regressiva(tempo)}>Começar</Button>
		</div>
	);
}
