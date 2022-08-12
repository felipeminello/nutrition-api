import Notification from '../notification/Notification'

export default abstract class Entity {
  public notification: Notification

  constructor() {
    this.notification = new Notification()
  }
}
