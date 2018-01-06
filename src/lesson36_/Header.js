import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from './react-redux'

class Header extends Component {
   static propTypes = {
      themeColor: PropTypes.string
   }

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
   // _updateThemeColor() {
   //    const {store} = this.context;
   //    const state = store.getState();
   //    this.setState({themeColor: state.themeColor});
   // }

   render() {
      return (
         <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
      );
   }
}

const mapStateToProps = (state, props) => {
   return {
      themeColor: state.themeColor,
      ...props
   }
};

Header = connect(mapStateToProps)(Header);
export default Header;