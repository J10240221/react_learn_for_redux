import React from 'react';
import PropTypes from 'prop-types';


class CpmA extends React.Component{
   static contextTypes = {
      age: PropTypes.number
   };
   componentWillMount() {
      // this.context.age = 1;
      console.log("this.context",this.context);
   }
   render() {
      // this.context.age = 1;
      // console.log("this.context",this.context);

       return (
          <div>CpmA
             <div>
                我获取的this.context.age:{this.context.age}
                <Son/>
             </div>
          </div>
       );
    }
 }

class Son extends React.Component{
   static contextTypes = {
      age: PropTypes.number
   };
   render() {
      return (
         <div>son:
            <br/>
            this.constxt.age:{this.context.age}
         </div>
      );
   }
}

export default CpmA;