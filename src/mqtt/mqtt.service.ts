import { Injectable } from '@nestjs/common';
import * as mqtt from 'mqtt';
import * as fs from 'fs';

@Injectable()
export class MqttService {
  private client: mqtt.MqttClient;
  messageCallbacks: { [key: string]: (message: string) => void } = {};

  constructor() {
    this.client = mqtt.connect(
      'mqtts://d5034c5d.ala.us-east-1.emqxsl.com:8883',
      {
        username: 'esp32user',
        password: 'qwerty123',
        ca: fs.readFileSync(
          'C:/Users/WORK-PC/Desktop/pruebaenv/backend/EMQXCA/emqxslMQTT.crt',
        ),
      },
    );

    this.client.on('connect', () => {
      console.log('Connected to MQTT broker');
    });

    this.client.on('error', (error) => {
      console.error('MQTT Client Error:', error);
    });

    this.client.on('message', (topic, message) => {
      const callback = this.messageCallbacks[topic];
      if (callback) {
        callback(message.toString());
      }
    });
  }

  publish(topic: string, message: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.publish(topic, message, (error) => {
        if (error) {
          reject('Failed to publish');
        } else {
          resolve('Published successfully');
        }
      });
    });
  }

  subscribe(topic: string): void {
    this.client.subscribe(topic, (error) => {
      if (error) {
        console.error('Error al suscribirse:', error);
      } else {
        console.log('Suscripción exitosa:', topic);
      }
    });
  }

  onMessage(topic: string, callback: (message: string) => void): void {
    this.messageCallbacks[topic] = callback;
  }

  unsubscribe(topic: string): void {
    delete this.messageCallbacks[topic];
    this.client.unsubscribe(topic);
  }
}
