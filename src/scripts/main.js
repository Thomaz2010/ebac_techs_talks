AOS.init();

const dataEvento = new Date("Dec 12, 2024 , 19:00:00");
const timeStampDoEvento = dataEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60; 
    const minutoEmMs = 1000 * 60; 

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;
    const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMs);
    const horasEvento = Math.floor((distanciaAteEvento % diaEmMs) / horasEmMs);
    const minutosEvento = Math.floor((distanciaAteEvento % horasEmMs) / minutoEmMs);
    const segundosEvento = Math.floor((distanciaAteEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}Dias - ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`;

    if (distanciaAteEvento < 0){
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado';
    }
}, 1000);

