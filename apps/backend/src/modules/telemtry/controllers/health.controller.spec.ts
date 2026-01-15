import { HealthCheckService } from '@nestjs/terminus';
import { Test } from '@nestjs/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { HealthController } from './health.controller.js';

describe('HealthController', () => {
  let controller: HealthController;

  const healthCheckServiceMock = {
    check: vi.fn().mockResolvedValue({ status: 'up' }),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: HealthCheckService,
          useValue: healthCheckServiceMock,
        },
      ],
    }).compile();

    controller = moduleRef.get(HealthController);
  });

  it('should return health status', async () => {
    const result = await controller.check();

    expect(result).toEqual({
      status: 'up',
    });
  });
});
