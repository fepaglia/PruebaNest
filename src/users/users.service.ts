import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User, UsersDocument } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UsersDocument>
    ) {}

  create(createUserdto: CreateUserDto) {
    return this.usersModel.create(createUserdto);
  }
}
