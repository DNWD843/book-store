import { EPluralizeConfigKey } from '../enums';
import { TPluralizedTextForms } from '../types';

export const pluralize = ({ quantity, textForms }: { quantity: number, textForms: TPluralizedTextForms }): string => {
  const value = Math.abs(quantity) % 100;
  const lastDigit = value % 10;

  if (value > 10 && value < 20) { return textForms[EPluralizeConfigKey.pluralForm]; }
  if (lastDigit > 1 && lastDigit < 5) { return textForms[EPluralizeConfigKey.genitiveCaseForm]; }
  if (lastDigit === 1) { return textForms[EPluralizeConfigKey.nominativeCaseForm]; }

  return textForms[EPluralizeConfigKey.pluralForm];
};
