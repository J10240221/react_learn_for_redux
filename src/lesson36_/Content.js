import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ThemeSwitch from './ThemeSwitch';

class Content extends Component {

   static contextTypes = {
      store: PropTypes.object
   };

   constructor() {
      super();
      this.state = {themeColor: ''};
   }

   componentWillMount() {
      this._updateThemeColor();
      const {store} = this.context;
      store.subscripe(() => this._updateThemeColor());
   }


   _updateThemeColor() {
      const {store} = this.context;
      const state = store.getState();
      this.setState({ themeColor: state.themeColor});
   }

   _changeColor() {
      const {store} = this.context;
      const {dispatch} = store;
      const action = {
         type:'CHANGE_COLOR',
         themeColor:'yellow',
      };
      dispatch(action);
      const state = store.getState();
      this.setState({ themeColor: state.themeColor});
   }

   render() {
      return (
         <div>
            <p style={{color: this.state.themeColor}}>React.js 小书内容</p>
            <ThemeSwitch/>
         </div>
      );
   }
}

export default Content;
