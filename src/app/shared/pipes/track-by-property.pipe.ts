import { Pipe, PipeTransform } from '@angular/core';

interface TrackByFunctionCache {
  [propertyName: string]: <T>(index: number, item: T) => any;
}

const cache: TrackByFunctionCache = {};

@Pipe({
  name: 'trackByProperty',
  pure: true,
})
export class TrackByPropertyPipe implements PipeTransform {
  transform = (propertyNames: null | string) => {
    const cacheKey = propertyNames;

    if (propertyNames === null) {
      if (!cache[cacheKey]) {
        cache[cacheKey] = <T>(index: number, _item: T): number => {
          return index;
        };
      }
    } else if (!cache[cacheKey]) {
      cache[cacheKey] = <T>(_index: number, item: T): any => {
        return item[propertyNames];
      };
    }

    return cache[cacheKey];
    // tslint:disable-next-line: semicolon
  };
}
