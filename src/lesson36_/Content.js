import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ThemeSwitch from './ThemeSwitch';
import {connect} from './react-redux'


class Content extends Component {

   static PropTypes = {
      themeColor: PropTypes.string
   };

   // constructor() {
   //    super();
   //    this.state = {themeColor: ''};
   // }
   //
   // componentWillMount() {
   //    this._updateThemeColor();
   //    const {store} = this.context;
   //    store.subscripe(() => this._updateThemeColor());
   // }
   //
   //
   // _updateThemeColor() {
   //    const {store} = this.context;
   //    const state = store.getState();
   //    this.setState({ themeColor: state.themeColor});
   // }

   render() {
      return (
         <div>
            <p style={{color: this.props.themeColor}}>React.js 小书内容</p>
            <ThemeSwitch/>
         </div>
      );
   }
}

const mapStateToProps = (state, props) => {
   return {
      themeColor: state.themeColor,
      ...props
   }
};

Content = connect(mapStateToProps)(Content);

export default Content;
