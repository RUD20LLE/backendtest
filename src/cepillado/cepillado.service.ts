import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Injectable()
export class CepilladoService {
  @Client({
    transport: Transport.MQTT,
    options: { url: 'mqtt://localhost:1883' },
  })
  private client: ClientProxy;

  controlarCepillado(estado: string): Promise<string> {
    return this.client.send('ESP32/cepillado/control', estado).toPromise();
  }

  obtenerEstado(): Promise<string> {
    return this.client.send('ESP32/cepillado/estado', {}).toPromise();
  }
}
