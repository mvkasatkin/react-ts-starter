declare interface TObjectAny {
  [key: string]: any
}

declare type TSort = 'asc' | 'desc'

declare type SizeOption = 10 | 25 | 50

declare interface TSortState {
  field: string
  direction: TSort
}

declare interface TBound {
  xmin: number
  ymin: number
  xmax: number
  ymax: number
}

declare interface ILogger {
  debug: (...args: any[]) => void,
  info: (...args: any[]) => void,
  warn: (...args: any[]) => void,
  error: (...args: any[]) => void,
}
// tslint:disable-next-line:interface-name
declare interface Window {
  logger: ILogger
}

declare var window: Window
