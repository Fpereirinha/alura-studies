import style from "./Relogio.module.scss";
interface Props {
	tempo: number | undefined;
}
export default function Relogio({ tempo = 0 }: Props) {
	const minutos = Math.floor(tempo / 60);
	const segundos = tempo % 60;
	const [minDez, minUn] = String(minutos).padStart(2, "0");
	const [segDez, segUn] = String(segundos).padStart(2, "0");
	return (
		<>
			<span className={style.relogioNumero}>{minDez}</span>
			<span className={style.relogioNumero}>{minUn}</span>
			<span className={style.relogioDivisao}>:</span>
			<span className={style.relogioNumero}>{segDez}</span>
			<span className={style.relogioNumero}>{segUn}</span>
		</>
	);
}
