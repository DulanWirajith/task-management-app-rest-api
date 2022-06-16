import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: UserRepository,
  ) {}

  async signUp(authCredentialDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialDto;
    const user = new UserEntity();
    user.username = username;
    user.password = password;
    console.log(this.userRepository);
    await user.save();
  }
}
