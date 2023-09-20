import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { MemberRepository } from './repositories/MemberRepository';
import { MemberRepositoryImpl } from './repositories/prisma/MemberRepositoryImpl';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: MemberRepository,
      useClass: MemberRepositoryImpl
    }
  ],
})
export class AppModule {}
