import React, { memo } from 'react';

const MobileProfileComponent: React.FC = () => (<div />);

MobileProfileComponent.displayName = 'MobileProfileComponent';

const MemoMobileProfileComponent = memo(MobileProfileComponent);

export { MemoMobileProfileComponent as MobileProfile };
