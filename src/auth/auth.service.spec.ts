import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: Partial<UsersService>;

  beforeEach(async () => {
    usersService = {
      findByUsername: jest.fn((username) =>
        Promise.resolve(
          username === 'testUser'
            ? {
                id: 1,
                username: 'testUser',
                password: 'hashedPassword',
                roles: 'admin',
              }
            : null,
        ),
      ),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useValue: { sign: jest.fn(() => 'token') } },
        { provide: UsersService, useValue: usersService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should validate a user with correct credentials', async () => {
    const result = await authService.validateUser('testUser', 'hashedPassword');
    expect(result).toEqual({ id: 1, username: 'testUser', roles: 'admin' });
  });

  it('should return null for invalid credentials', async () => {
    const result = await authService.validateUser(
      'invalidUser',
      'wrongPassword',
    );
    expect(result).toBeNull();
  });

  it('should generate a JWT token for a user', async () => {
    const token = await authService.login({
      username: 'testUser',
      id: 1,
      roles: 'admin',
    });
    expect(token).toEqual({ access_token: 'token' });
  });
});
