import { Module } from '@nestjs/common';
import { SecadoController } from './secado.controller';
import { SecadoService } from './secado.service';

@Module({
  controllers: [SecadoController],
  providers: [SecadoService],
})
export class SecadoModule {}
