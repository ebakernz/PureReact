import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function Stamp() {
  return(
    <div className="stamp">
      Stamp
    </div>
  );
}

function AddressLabel({ mailingLabel, className }) {
  var {name, addressLine1, addressLine2} = mailingLabel;
  return(
    <div className={`mailing-label ${className}`}>
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

function Envelope({ toPerson, fromPerson }) {
  return(
    <div className="envelope">
      <AddressLabel className="to-label" mailingLabel={fromPerson}/>
      <AddressLabel className="from-label" mailingLabel={toPerson}/>
      <Stamp/>
    </div>
  );
}
Envelope.propTypes = {
  toPerson: PropTypes.object,
  fromPerson: PropTypes.object
};

var returnLabel =  {
  name: "Mr. Sender",
  addressLine1: "123 Fake St.",
  addressLine2: "Boston, MA 02118"
};

var recipientLabel =  {
  name: "Mrs. Receiver",
  addressLine1: "123 Fake St.",
  addressLine2: "San Francisco, CA 94101"
};

ReactDOM.render(
  <Envelope toPerson={recipientLabel} fromPerson={returnLabel}/>,
  document.getElementById('root')
);
