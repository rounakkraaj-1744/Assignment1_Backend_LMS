import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { CreateAuthorDto } from "./dto/create-author.dto";

@Injectable()
export class AuthorService{
  constructor (private prisma: PrismaService){}
  
  async createAuthor (data: CreateAuthorDto){
    return this.prisma.author.create({
      data:{
        name: data.name
      }
    })
  }

  async getAllAuthors (){
    return this.prisma.author.findMany()
  }
}