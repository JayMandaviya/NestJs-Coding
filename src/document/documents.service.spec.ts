import { Test, TestingModule } from '@nestjs/testing';
import { DocumentsService } from './documents.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Document } from './document.entity';

describe('DocumentsService', () => {
  let documentsService: DocumentsService;
  let mockRepository;

  beforeEach(async () => {
    mockRepository = {
      save: jest.fn(),
      create: jest.fn((doc) => doc),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DocumentsService,
        { provide: getRepositoryToken(Document), useValue: mockRepository },
      ],
    }).compile();

    documentsService = module.get<DocumentsService>(DocumentsService);
  });

  it('should create a new document', async () => {
    mockRepository.save.mockResolvedValue({
      id: 1,
      title: 'Test Document',
      uploadedBy: 'admin',
    });
    const document = await documentsService.createDocument(
      'Test Document',
      'Content',
      'admin',
    );
    expect(document).toEqual({
      id: 1,
      title: 'Test Document',
      uploadedBy: 'admin',
    });
  });
});
