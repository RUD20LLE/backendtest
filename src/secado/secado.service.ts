import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Injectable()
export class SecadoService {
  @Client({
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://d5034c5d.ala.us-east-1.emqxsl.com',
      username: 'esp32user',
      password: 'qwerty123',
    },
  })
  private client: ClientProxy;

  controlarSecado(estado: string): Promise<string> {
    return this.client.send('ESP32/secado/control', estado).toPromise();
  }

  obtenerEstado(): Promise<string> {
    return this.client.send('ESP32/secado/estado', {}).toPromise();
  }
}
