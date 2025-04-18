import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MensalidadeService } from './mensalidade.service';
import { CreateMensalidadeDto } from './dto/create-mensalidade.dto';
import { UpdateMensalidadeDto } from './dto/update-mensalidade.dto';

@Controller('mensalidade')
export class MensalidadeController {
  constructor(private readonly mensalidadeService: MensalidadeService) {}

  @Post()
  create(@Body() createMensalidadeDto: CreateMensalidadeDto) {
    console.log(createMensalidadeDto)
    return this.mensalidadeService.criarMensalidade(createMensalidadeDto);
  }

  @Get("todos")
  findAll() {
    return this.mensalidadeService.listarTodas();
  }

  @Get('aluno/:matricula')
listarPorAluno(@Param('matricula') matricula: number) {
  return this.mensalidadeService.listarPorAluno(matricula);
}

@Get('vencidas')
async listarVencidas() {
  return this.mensalidadeService.listarVencidas();
}

@Get('a-vencer')
async listarAVencer() {
  return this.mensalidadeService.listarAVencer();
}

}
