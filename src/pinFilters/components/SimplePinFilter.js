import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const withoutPropagation = cb => e => {
  e.stopPropagation();
  cb();
};

const SimplePinFilter = ({ onClose, onClick, onTogglePin, pinned, value }) =>
  <Chip
    onRequestDelete={onClose}
    onTouchTap={onClick}
  >
    <Avatar onTouchTap={withoutPropagation(onTogglePin)} style={{backgroundColor: pinned? 'black': 'grey'}}>
      {pinned ? '|' : '/'}
    </Avatar>
    {value}
  </Chip>;

export default SimplePinFilter;
