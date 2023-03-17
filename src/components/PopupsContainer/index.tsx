import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { overlaysStore } from '../../stores';
import { Popup } from '../../ui-components';

const PopupsContainer: React.FC = () => {
  const { removePopup } = overlaysStore;
  const popups = toJS(overlaysStore.popups);

  return (
    <>
      {popups.length
        ? (popups.map((popup) => {
          const { id, type, message } = popup;

          return (
            <Popup key={id} type={type} onClose={() => removePopup(popup)}>
              {message}
            </Popup>
          );
        }))
        : null}
    </>
  );
};

PopupsContainer.displayName = 'PopupsContainer';

const ObservablePopupsContainer = observer(PopupsContainer);

export { ObservablePopupsContainer as PopupsContainer };
