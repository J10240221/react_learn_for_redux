import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from './react-redux';

class ThemeSwitch extends Component {
   static propTypes = {
      themeColor: PropTypes.string,
      onSwitchColor: PropTypes.func
   }

   // constructor() {
   //    super();
   //    this.state = { themeColor: '' };
   // }

   // componentWillMount() {
   //    this._updateThemeColor();
   //    const { store } = this.context;
   //    store.subscripe(() => this._updateThemeColor());
   // }

   // _updateThemeColor() {
   //    const { store } = this.context;
   //    const state = store.getState();
   //    this.setState({ themeColor: state.themeColor });
   // }

   // dispatch action 去改变颜色
   handleSwitchColor(color) {
      if (this.props.onSwitchColor) {
         this.props.onSwitchColor(color);
      }
   }

   render() {
      return (
         <div>
            <button
               style={{ color: this.props.themeColor }}
               onClick={this.handleSwitchColor.bind(this, 'red')}>Red
            </button>
            <button
               style={{ color: this.props.themeColor }}
               onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue
            </button>
         </div>
      );
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onSwitchColor: (color) => {
         dispatch({ type: 'CHANGE_COLOR', themeColor: color })
      }
   }
}

const mapStateToProps = (state, props) => {
   return {
      themeColor: state.themeColor,
      ...props
   }
};

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
export default ThemeSwitch;
