import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const withoutPropagation = cb => e => {
  e.stopPropagation();
  cb();
};

const SwitchablePinFilter = ({ onClose, onToggleActive, onTogglePin, pinned, value: {message, active} }) =>
  <Chip style={{backgroundColor: active? 'green':'yellow'}}
    onRequestDelete={onClose}
    onTouchTap={onToggleActive}
  >
    <Avatar onTouchTap={withoutPropagation(onTogglePin)} style={{backgroundColor: pinned? 'black': 'grey'}}>
      {pinned ? '|' : '/'}
    </Avatar>
    {message} {!active? '(inactive)':'(active)'}
  </Chip>;

export default SwitchablePinFilter;
