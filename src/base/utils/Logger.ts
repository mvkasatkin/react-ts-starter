/* tslint:disable:no-console */
/**
 * Wrapper for console.log
 * Can be extended with special logging libs or services like Sentry
 * Prefer to use window.logger.error() instead of console.error()
 */
const logger = {
  debug: (...args: any[]) => console.debug(new Date().toISOString(), ...args),
  error: (...args: any[]) => console.error(new Date().toISOString(), ...args),
  info: (...args: any[]) => console.log(new Date().toISOString(), ...args),
  warn: (...args: any[]) => console.log(new Date().toISOString(), ...args),
}

window.logger = logger
export { logger }
