/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { Role } from 'src/auth/role.decorator';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { userEditInput, userEditOutput } from './dtos/user-edit.dto';
import { userProfileInput, userProfileOutput } from './dtos/user-profile.dto';
import { VerifyEmailInput, VerifyEmailOutput } from './dtos/verify-email.dto';
import { User } from './entities/user.entity';
import { UserService } from './users.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  @Mutation((returns) => CreateAccountOutput)
  async createAccount(
    @Args('input') CreateAccountInput: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    return this.usersService.createAccount(CreateAccountInput);
  }

  @Mutation((type) => LoginOutput)
  async login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    return this.usersService.login(loginInput);
  }

  @Query((returns) => User)
  @Role(['Any'])
  me(@AuthUser() authUser: User) {
    return authUser;
  }

  @Query((returns) => userProfileOutput)
  @Role(['Any'])
  async userProfile(
    @Args() userProfileInput: userProfileInput,
  ): Promise<userProfileOutput> {
    return this.usersService.findById(userProfileInput.userId);
  }

  @Mutation((returns) => userEditOutput)
  @Role(['Any'])
  async userEdit(
    @AuthUser() authUser: User,
    @Args('input') userEditInput: userEditInput,
  ): Promise<userEditOutput> {
    return this.usersService.editUser(authUser.id, userEditInput);
  }

  @Mutation((returns) => VerifyEmailOutput)
  async verifyEmail(
    @Args('input') { code }: VerifyEmailInput,
  ): Promise<VerifyEmailOutput> {
    return this.usersService.verifyEmail(code);
  }
}
