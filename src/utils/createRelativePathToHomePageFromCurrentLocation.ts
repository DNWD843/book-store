import { routes } from '../routesMap';

export const createRelativePathToHomePageFromCurrentLocation = (currentPath: string) => currentPath
  .split('/')
  .map((el) => {
    if (el) {
      return '..';
    }
    return el;
  })
  .reverse()
  .join('/')
  .concat(routes.home);
