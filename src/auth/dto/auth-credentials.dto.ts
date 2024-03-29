import { IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8, {
    message: 'min length should be grater than 8',
  })
  @MaxLength(20)
  password: string;
}
