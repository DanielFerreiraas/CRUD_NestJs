import { PrismaService } from "src/database/prisma.service";
import { MemberRepository } from "../MemberRepository";
import { randomUUID } from "node:crypto";
import { MemberDTO } from "src/dtos/createMemberDTO";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MemberRepositoryImpl implements MemberRepository {

    constructor(private prisma: PrismaService) {}

    async create(name: string, memberFunction: string): Promise<MemberDTO> {

       const signup = await this.prisma.memberTeamRocket.create({
            data: {
                id: randomUUID(),
                name,
                function: memberFunction
            }
        });

        return signup;

    }
}