import { Logger } from 'tslog';

const log = new Logger();

export const info = (message: string) =>
  log.info(`[FRAMEWORK][INFO] ${message}`);
export const error = (message: string) =>
  log.error(`[FRAMEWORK][ERROR] ${message}`);
export const debug = (message: string) =>
  log.debug(`[FRAMEWORK][DEBUG] ${message}`);
