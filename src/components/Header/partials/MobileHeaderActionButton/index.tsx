import React, { memo } from 'react';

import { useAppSelector } from '../../../../redux/hooks';
import { selectMatchMediaState } from '../../../../redux/store';

import { MobileHeaderActionButton } from './MobileHeaderActionButton';
import { TMobileHeaderActionButtonProps } from './MobileHeaderActionButton.props';

const MobileHeaderActionButtonComponent: React.FC<Omit<TMobileHeaderActionButtonProps, 'isTablet'>> = (props) => {
  const { isTablet } = useAppSelector(selectMatchMediaState);
  return (<MobileHeaderActionButton isTablet={isTablet} {...props} />);
};

MobileHeaderActionButtonComponent.displayName = 'MobileHeaderActionButtonComponent';

const MemoMobileHeaderActionButtonComponent = memo(MobileHeaderActionButtonComponent);

export { MemoMobileHeaderActionButtonComponent as MobileHeaderActionButton };
