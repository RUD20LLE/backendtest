import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/login.module';
import { ToggleModule } from './toggle/toggle.module';
import { BandaTransportadoraModule } from './banda-transportadora/banda-transportadora.module';
import { EnjabonadoModule } from './enjabonado/enjabonado.module';
import { CepilladoModule } from './cepillado/cepillado.module';
import { SecadoModule } from './secado/secado.module';
import { MqttModule } from './mqtt/mqtt.module';
import { InicioModule } from './controlesplc/inicio/inicio.module';
import { ContinuarModule } from './controlesplc/continuar/continuar.module';
import { PausaModule } from './controlesplc/pausa/pausa.module';
import { ParoModule } from './controlesplc/paro/paro.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'develop.env',
    }),
    LoginModule,
    ToggleModule,
    BandaTransportadoraModule,
    EnjabonadoModule,
    CepilladoModule,
    SecadoModule,
    MqttModule,
    InicioModule,
    ParoModule,
    PausaModule,
    ContinuarModule,
  ],
})
export class AppModule {}
