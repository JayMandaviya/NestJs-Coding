import { Test, TestingModule } from '@nestjs/testing';
import { IngestionService } from './ingestion.service';
import axios from 'axios';

jest.mock('axios');

describe('IngestionService', () => {
  let ingestionService: IngestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngestionService],
    }).compile();

    ingestionService = module.get<IngestionService>(IngestionService);
  });

  it('should trigger the ingestion process', async () => {
    const data = { key: 'value' };
    axios.post.mockResolvedValue({ data: { success: true } });
    const result = await ingestionService.triggerIngestion(data);
    expect(result).toEqual({ success: true });
  });
});
