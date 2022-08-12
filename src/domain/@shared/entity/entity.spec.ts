import Entity from './entity.abstract'

class Dummy extends Entity {}

describe('Unit test for entity abstract', () => {
  it('should create dummy class with notification property', async () => {
    const dummy = new Dummy()

    expect(dummy).toHaveProperty('notification')
  })
})
