import { routes } from '../routesMap';

export const createRelativePathToHomePageFromCurrentLocation = (currentPath: string): string => currentPath
  .split('/')
  .filter((el) => el)
  .map((el) => {
    if (el) {
      return '..';
    }
    return el;
  })
  .concat(routes.main)
  .join('/');
