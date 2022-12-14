export function tempoParaSegundos(tempo: string) {
	const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");
	const horasToSecond = Number(horas) * 3600;
	const minutosToSecond = Number(minutos) * 60;
	return horasToSecond + minutosToSecond + Number(segundos);
}
