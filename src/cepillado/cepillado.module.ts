import { Module } from '@nestjs/common';
import { CepilladoController } from './cepillado.controller';
import { CepilladoService } from './cepillado.service';

@Module({
  controllers: [CepilladoController],
  providers: [CepilladoService],
})
export class CepilladoModule {}
