const service = require('./exercise6')

describe('Exercicio 6', () => {
  service.requisition = jest.fn();
  afterEach(service.requisition.mockReset);
  it('Sucesso e obteu request sucess', async () => {
    service.requisition.mockResolvedValue('request sucess');
    
    service.requisition();
    expect(service.requisition).toBeCalled();
    expect(service.requisition()).resolves.toBe('request sucess');
  });
  it('Falha e obteu request failed', async () => {
    service.requisition.mockRejectedValue('request failed');

    expect(service.requisition()).rejects.toMatch('request failed');
    expect(service.requisition).toHaveBeenCalled();
  });
});
