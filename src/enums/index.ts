export { EFetchStatuses } from './fetchStatuses';
export { EIconTypes } from './navLinks';
export { EMonths } from './dateWidgetEnums';
export { EAuthTypes } from './auth';
export { ECollectionPaths } from './collectionPaths';
export * from './orderFormEnums';
export { EValidationErrorMessages } from './errorMessagesTypes';
export { EPopupTypes } from './popupTypes';
export * from './profileFormEnums';

export const enum EPluralizeConfigKey {
  nominativeCaseForm = 'nominativeCaseForm',
  genitiveCaseForm = 'genitiveCaseForm',
  pluralForm = 'pluralForm',
}

export const enum EScreenTypes {
  isSmallScreen = 'isSmallScreen',
  isMobile = 'isMobile',
  isTablet = 'isTablet',
  isDesktop = 'isDesktop',
}

export const enum EPromiseStates {
  done = 'done',
  pending = 'pending',
  error = 'error',
}
