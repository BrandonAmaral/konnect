import CreateUserService from '../CreateUserService';
import AuthenticateUserService from '../AuthenticateUserService';
import { BadRequestError } from '@common/errors/BadRequestError';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const createService = new CreateUserService();
    const authenticateService = new AuthenticateUserService();

    await createService.execute({
      email: 'test@test.com',
      username: 'test',
      tag: 'test',
      password: 'password',
    });

    const expected = await authenticateService.execute({
      email: 'test@test.com',
      password: 'password',
    });

    expect(expected).toHaveProperty('user');
    expect(expected).toHaveProperty('token');
  });

  it('should not be able to authenticate with wrong email or password', async () => {
    const createService = new CreateUserService();
    const authenticateService = new AuthenticateUserService();

    await createService.execute({
      email: 'test@test.com',
      username: 'test',
      tag: 'test',
      password: 'password',
    });

    await expect(
      authenticateService.execute({
        email: 'test123@test.com',
        password: 'password',
      }),
    ).rejects.toBeInstanceOf(BadRequestError);

    await expect(
      authenticateService.execute({
        email: 'test@test.com',
        password: 'password123',
      }),
    ).rejects.toBeInstanceOf(BadRequestError);
  });
});
