import { observer } from 'mobx-react-lite';
import React from 'react';

import { uiStore } from '../../../../stores';

import { MobileHeaderActionButton } from './MobileHeaderActionButton';
import { TMobileHeaderActionButtonProps } from './MobileHeaderActionButton.props';

const MobileHeaderActionButtonComponent: React.FC<Omit<TMobileHeaderActionButtonProps, 'isTablet'>> = (props) => {
  const { isTablet } = uiStore.screen;

  return (<MobileHeaderActionButton isTablet={isTablet} {...props} />);
};

MobileHeaderActionButtonComponent.displayName = 'MobileHeaderActionButtonComponent';

const ObservableMobileHeaderActionButtonComponent = observer(MobileHeaderActionButtonComponent);

export { ObservableMobileHeaderActionButtonComponent as MobileHeaderActionButton };
