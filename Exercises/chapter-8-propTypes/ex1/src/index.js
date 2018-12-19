import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

function AddressLabel({ mailingLabel }) {
  var {name, addressLine1, addressLine2} = mailingLabel;
  return (
    <div className="mailingLabel">
      <div className="name">{name}</div>
      <div className="addressLine1">{addressLine1}</div>
      <div className="addressLine2">{addressLine2}</div>
    </div>
  );
}

AddressLabel.propTypes = {
  mailingLabel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired
  }).isRequired
};

var returnLabel = {
  name: "Full Name",
  addressLine1: "123 Fake St.",
  addressLine2: "Boston, MA 02118"
};


ReactDOM.render(
  <AddressLabel mailingLabel={returnLabel}/>,
  document.getElementById('root')
);
