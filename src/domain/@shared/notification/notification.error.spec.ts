import NotificationError from './notification.error'

describe('Unit test for notification error', () => {
  it('should create errors', async () => {
    const notificationError = new NotificationError([{
      message: 'error message',
      context: 'context',
    }])

    expect(notificationError.errors[0].message).toBe('error message')
    expect(notificationError.errors[0].context).toBe('context')
  })
})
