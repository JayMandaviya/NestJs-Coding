import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class IngestionService {
  async triggerIngestion(data: any): Promise<any> {
    // Replace with actual Python backend URL
    const response = await axios.post('http://localhost:5000/ingest', data);
    return response.data;
  }
}
