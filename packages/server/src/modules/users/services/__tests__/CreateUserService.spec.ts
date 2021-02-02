import CreateUserService from '../CreateUserService';
import { BadRequestError } from '@common/errors/BadRequestError';

describe('CreateUserService', () => {
  it('should be able to create a user', async () => {
    const service = new CreateUserService();

    const expected = await service.execute({
      email: 'test@test.com',
      username: 'test',
      tag: 'test',
      password: 'password',
    });

    expect(expected).toHaveProperty('user');
    expect(expected).toHaveProperty('token');
  });

  it('should not be able to create a user with already existing email or tag', async () => {
    const service = new CreateUserService();

    await service.execute({
      email: 'test@test.com',
      username: 'test',
      tag: 'test',
      password: 'password',
    });

    await expect(
      service.execute({
        email: 'test@test.com',
        username: 'test',
        tag: 'test123',
        password: 'password',
      }),
    ).rejects.toBeInstanceOf(BadRequestError);

    await expect(
      service.execute({
        email: 'test123@test.com',
        username: 'test',
        tag: 'test',
        password: 'password',
      }),
    ).rejects.toBeInstanceOf(BadRequestError);
  });
});
