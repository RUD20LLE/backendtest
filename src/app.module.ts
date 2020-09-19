import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/login.module';
import { ToggleModule } from './toggle/toggle.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'develop.env',
    }),
    LoginModule,
    ToggleModule,
  ],
})
export class AppModule {}
