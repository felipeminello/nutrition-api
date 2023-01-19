import Food from './food'

describe('Food unit tests', () => {
  it('should throw error when name is empty', () => {
    expect(() => {
      new Food('', 0, '', undefined, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Date(), new Date())
    }).toThrowError('Id is required')
  })
})
