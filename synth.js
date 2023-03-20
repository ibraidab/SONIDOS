const audioContext = new AudioContext();

// Osciladores
const osc1 = audioContext.createOscillator();
osc1.frequency.value = 440;
osc1.type = "sawtooth";
osc1.start();

const osc2 = audioContext.createOscillator();
osc2.frequency.value = 440 * 2;
osc2.type = "square";
osc2.start();

// Ganancia
const gainNode = audioContext.createGain();
gainNode.gain.value = 0.5;

// Filtro
const filterNode = audioContext.createBiquadFilter();
filterNode.type = "lowpass";
filterNode.frequency.value = 1000;
filterNode.Q.value = 10;

// Efectos
const delayNode = audioContext.createDelay(2.0);
delayNode.delayTime.value = 0.5;

const feedbackGainNode = audioContext.createGain();
feedbackGainNode.gain.value = 0.8;

// Conexiones
osc1.connect(gainNode);
osc2.connect(gainNode);
gainNode.connect(filterNode);
filterNode.connect(delayNode);
delayNode.connect(feedbackGainNode);
feedbackGainNode.connect(delayNode);
delayNode.connect(audioContext.destination);