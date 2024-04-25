import { PubSub } from '@google-cloud/pubsub';

const projectId = 'experimental-bruno-kerbs';
const topicNameOrId = 'notifications';
const subscriptionName = 'notifications-subscriber';

async function quickstart() {
  const pubsub = new PubSub({projectId});

  const [topic] = await pubsub.topic(topicNameOrId).get({autoCreate: true});
  console.log(`Topic ${topic.name} created.`);

  const [subscription] = await topic.subscription(subscriptionName).get({autoCreate: true});

  subscription.on('message', message => {
    console.log('Received message:', message.data.toString());
    process.exit(0);
  });

  subscription.on('error', error => {
    console.error('Received error:', error);
    process.exit(1);
  });

  topic.publishMessage({data: Buffer.from('Test message!')});
}

await quickstart();
