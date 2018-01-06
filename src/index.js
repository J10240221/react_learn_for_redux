import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Header from './lesson36_/Header';
import Content from './lesson36_/Content';
import './index.css'

class Index extends Component {

   static childContextTypes = {
      store: PropTypes.object
   };

   getChildContext () {
      const store = createStore(themeReducer);
      return { store };
   }

   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      )
   }
}

function createStore(reducer) {
   let state = null;
   const listeners = [];
   const getState = () => state;
   const subscripe = (listener) => listeners.push(listener);
   const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
   };
   dispatch({});
   return {subscripe, dispatch, getState};
}

const themeReducer = (state, action) => {
   if (!state) {
      return {
         themeColor: 'red'
      };
   }
   switch (action.type) {
      case 'CHANGE_COLOR':
         return { ...state, themeColor: action.themeColor };
      default:
         return state;
   }
};



ReactDOM.render(
   <Index/>,
   document.getElementById('root')
);