const Stomp = require('stomp-client');
const stompClient = new Stomp('34.71.80.242', 61613);

const storeId = 7;
const topics = [`/topic/${storeId}`];

stompClient.connect(function (sessionID){
    console.log('Conectado al broker ActiveMQ');
    topics.forEach(topic => {
        stompClient.subscribe(topic, function(body, headers){
            console.log(`Mensaje recibido en ${topic}: ${body}`);
        });
    });
    console.log(stompClient.subscriptions);
});
