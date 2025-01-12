import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from './document.entity';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>,
  ) {}

  async createDocument(
    title: string,
    content: string,
    uploadedBy: string,
  ): Promise<Document> {
    const document = this.documentRepository.create({
      title,
      content,
      uploadedBy,
    });
    return this.documentRepository.save(document);
  }
}
