import React, { memo } from 'react';

import { useMatchMedia } from '../../../../hooks';

import { MobileHeaderActionButton } from './MobileHeaderActionButton';
import { TMobileHeaderActionButtonProps } from './MobileHeaderActionButton.props';

const MobileHeaderActionButtonComponent: React.FC<Omit<TMobileHeaderActionButtonProps, 'isTablet'>> = (props) => {
  const { isTablet } = useMatchMedia();
  return (<MobileHeaderActionButton isTablet={isTablet} {...props} />);
};

MobileHeaderActionButtonComponent.displayName = 'MobileHeaderActionButtonComponent';

const MemoMobileHeaderActionButtonComponent = memo(MobileHeaderActionButtonComponent);

export { MemoMobileHeaderActionButtonComponent as MobileHeaderActionButton };
