export default interface LoggerInterface {
  info(data: any): void
  error(data: any): void
  warn(data: any): void
}