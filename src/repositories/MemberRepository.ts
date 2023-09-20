import { MemberDTO } from "src/dtos/createMemberDTO";

export abstract class MemberRepository {
    abstract create(name: string, memberFunction: string): Promise<MemberDTO>;
}