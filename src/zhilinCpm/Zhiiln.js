import React from 'react';
import PropTypes from 'prop-types';
import CpmA from './CpmA';

class Zhilin extends React.Component {
   getChildContext(){
      return { age: 110 };
   }

   static childContextTypes = {
      age: PropTypes.number

   };

   render() {
      return (
         <div>
            <CpmA/>
            name:{this.props.name}
         </div>
      );
   }
}

Zhilin.defaultProps = {
   name: 'Guest'
};

Zhilin.propTypes = {
   name: PropTypes.string
};

export default Zhilin;