const screen = document.getElementById('screen');
const video = document.getElementById('video');
const prompt = document.getElementById('prompt');

let selecting = false;

async function handleScreenClick() {
  if (selecting || !video.paused) return;
  selecting = true;
  const filePath = await window.electronAPI.openFile();
  if (filePath) {
    video.src = filePath;
    video.style.display = 'block';
    prompt.style.display = 'none';
    video.play();
  }
  selecting = false;
}

screen.addEventListener('click', handleScreenClick);

video.addEventListener('play', () => {
  // Disable prompt and click while playing
  prompt.style.display = 'none';
});

video.addEventListener('ended', () => {
  // Show prompt and re-enable click when video ends
  video.style.display = 'none';
  prompt.style.display = 'inline';
});






const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
const host = 'mqtt://broker.emqx.io:1883'
const options = {
  keepalive: 30,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false
  },
  rejectUnauthorized: false
}
// Information about the mqtt module is available
console.log(window.electronAPI.mqtt)
console.log('connecting mqtt client')
const client = window.electronAPI.mqtt.connect(host, options)
client.on('error', (err) => {
  console.log('Connection error: ', err)
  client.end()
})
client.on('reconnect', () => {
  console.log('Reconnecting...')
})
client.on('connect', () => {
  console.log('Client connected:' + clientId)
  client.subscribe('testtopic/electron', {
    qos: 0
  })
  client.publish('testtopic/electron', 'Electron connection demo...!', {
    qos: 0,
    retain: false
  })
})
client.on('message', (topic, message, packet) => {
  console.log('Received Message: ' + message.toString() + '\nOn topic: ' + topic)
})