import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: UserRepository,
  ) {}

  private static async hashPassword(
    password: string,
    salt: string,
  ): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  async signUp(authCredentialDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialDto;

    const user = new UserEntity();
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await AuthService.hashPassword(password, user.salt);
    console.log(this.userRepository);
    try {
      await user.save();
    } catch (error) {
      console.log(error.code);
      if (error.code === '23505') {
        throw new ConflictException('username already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signIn(authCredentialDto: AuthCredentialsDto) {
    const { username, password } = authCredentialDto;
    const user: UserEntity = await this.userRepository.findOne({
      username,
    });
    if (user && (await user.validatePassword(password))) {
      // return {user.username};
    } else {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }
}
