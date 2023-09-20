import { IsNotEmpty, Length } from "class-validator";

export class MemberDTO {

    @IsNotEmpty()
    @Length(5, 100)
    name: string;

    @IsNotEmpty({
        message: 'This attribute cannot be null'
    })
    function: string;
}