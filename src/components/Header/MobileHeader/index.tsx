import React, { memo, useState } from 'react';

import { useMatchMedia } from '../../../hooks';

import { MobileHeader } from './MobileHeader';

const MobileHeaderComponent: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isBookSearchVisible, setBookSearchVisible] = useState<boolean>(false);
  const { isTablet } = useMatchMedia();

  return (<MobileHeader isBookSearchVisible={isBookSearchVisible} isTablet={isTablet} />);
};

MobileHeaderComponent.displayName = 'MobileHeaderComponent';

const MemoMobileHeader = memo(MobileHeaderComponent);

export { MemoMobileHeader as MobileHeader };
