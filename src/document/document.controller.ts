import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { DocumentsService } from './document.service';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post('create')
  @Roles('admin', 'editor')
  @UseGuards(RolesGuard)
  async createDocument(
    @Body() body: { title: string; content: string; uploadedBy: string },
  ) {
    return this.documentsService.createDocument(
      body.title,
      body.content,
      body.uploadedBy,
    );
  }
}
