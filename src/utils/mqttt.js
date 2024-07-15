import mqtt from "mqtt";
let mqttClient;

function connect() {
  return new Promise((resolve, reject) => {
    try {
      var brokerUrl = "mqtt://mqttgo.io:1883"; // 替换为 mqttgo.io 的地址
      brokerUrl = "wss://broker.mqttgo.io:8084/mqtt";
    //   
      mqttClient = mqtt.connect(brokerUrl);
      setTimeout(() => {
        resolve(mqttClient);
      }, 2000);
    } catch (err) {
      reject(new Error(err));
    }
  });
}

const connectMQTT = (func) => {
    return new Promise((resolve, reject) => {
      connect()
        .then((client) => {
          client.subscribe('max7219-mqtt1'); // 連線
          client.on('message', (topic, message) => { // 接收資訊
            // 在收到消息後，可以進行相應的處理
            func({ topic,  message });
            resolve({ topic, message });
          });
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };


  const pubData = (topic,pubMsg) => {
    mqttClient.publish(topic, pubMsg);
  }


  

  export {connectMQTT,pubData}