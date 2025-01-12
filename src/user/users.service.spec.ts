import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';

describe('UsersService', () => {
  let usersService: UsersService;
  let mockRepository;

  beforeEach(async () => {
    mockRepository = {
      findOne: jest.fn(),
      save: jest.fn(),
      create: jest.fn((user) => user),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(User), useValue: mockRepository },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it('should find a user by username', async () => {
    mockRepository.findOne.mockResolvedValue({ id: 1, username: 'testUser' });
    const user = await usersService.findByUsername('testUser');
    expect(user).toEqual({ id: 1, username: 'testUser' });
  });

  it('should create a new user', async () => {
    mockRepository.save.mockResolvedValue({
      id: 1,
      username: 'testUser',
      roles: 'admin',
    });
    const user = await usersService.createUser(
      'testUser',
      'hashedPassword',
      'admin',
    );
    expect(user).toEqual({ id: 1, username: 'testUser', roles: 'admin' });
  });
});
