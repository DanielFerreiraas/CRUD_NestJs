import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';
import { MemberDTO } from './dtos/createMemberDTO';
import { MemberRepository } from './repositories/MemberRepository';

@Controller('api')
export class AppController {
  constructor(private memberRepository: MemberRepository) {}

  @Post('member')
  async sendMember(@Body() body: MemberDTO){
    const { name, function: memberFunction } = body;

    const result = await this.memberRepository.create(name, memberFunction)

    return {
      result
    }
  }
};