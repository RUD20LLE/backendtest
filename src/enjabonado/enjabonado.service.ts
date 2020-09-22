import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Injectable()
export class EnjabonadoService {
  @Client({
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://d5034c5d.ala.us-east-1.emqxsl.com',
      username: 'esp32user',
      password: 'qwerty123',
    },
  })
  private client: ClientProxy;

  controlarEnjabonado(estado: string): Promise<string> {
    return this.client.send('ESP32/enjabonado/control', estado).toPromise();
  }

  obtenerEstado(): Promise<string> {
    return this.client.send('ESP32/enjabonado/estado', {}).toPromise();
  }
}
