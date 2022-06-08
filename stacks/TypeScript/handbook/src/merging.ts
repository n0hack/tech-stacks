import { Observable } from './observable';

declare module './observable' {
  interface Observable<T> {
    map<U>(f: (x: T) => void): void;
  }
}

Observable.prototype.map = function (f) {};
