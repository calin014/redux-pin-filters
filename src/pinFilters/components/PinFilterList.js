import React from 'react';

const getFilter = (filter, filterComponents) => {
  const Filter = filterComponents[filter.component];
  return Filter
    ? <div key={filter.filterId} style={{paddingLeft: 10}}><Filter {...filter} /></div> 
    : <div>
        Unknown filter type {filter.component}
      </div>;
};

const PinFilterList = ({ filters, filterComponents }) =>
  <div style={{display: 'flex'}}>
    {filters.map(f => getFilter(f, filterComponents))}
  </div>;

export default PinFilterList;
