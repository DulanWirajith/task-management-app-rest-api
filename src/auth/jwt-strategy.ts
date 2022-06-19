import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayloadInterface } from './jwt-payload.interface';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env['secret-key'],
    });
  }

  async validate(payload: JwtPayloadInterface): Promise<UserEntity> {
    const { username } = payload;
    const user = this.userRepository.findOne({
      username,
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
