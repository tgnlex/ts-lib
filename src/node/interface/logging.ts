export interface ILogging {
  info(message: string, data: any[], ...opts: any[]): void;
  error(message: string, data: any[], ...opts: any[]): void;
}




