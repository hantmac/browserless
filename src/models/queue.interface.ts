import * as EventEmitter from 'events';
import * as http from 'http';
import { Browser } from 'puppeteer';
import { BrowserlessSandbox } from '../Sandbox';

export interface IJob {
  (done?: IDone): any | Promise<any>;
  id?: string;
  browser?: Browser | BrowserlessSandbox | null;
  close?: () => any;
  onTimeout?: () => any;
  start: number;
  req: http.IncomingMessage;
}

export interface IQueue<IJob> extends EventEmitter, Array<IJob> {
  readonly concurrency: number;
  remove: (job: IJob) => any;
  add: (job: IJob) => any;
}

export type IDone = (error?: Error | null) => any;
