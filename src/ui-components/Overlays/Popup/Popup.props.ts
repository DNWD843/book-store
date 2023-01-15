import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { EPopupTypes } from '../../../enums';

export type TPopupProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  onClose: () => void,
  type: EPopupTypes,
};
