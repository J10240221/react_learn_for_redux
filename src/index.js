// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

function creactStore(reducer) {
   let state = null;
   const listeners = [];
   const subscribe = (listener) => listeners.push(listener);
   const getState = () => state;
   const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
   };
   dispatch({});//初始化state
   return {getState, dispatch, subscribe};
}

function renderApp(newAppState, oldAppState = {}) {
   if (newAppState === oldAppState) return;
   console.log('render app...');
   renderTitle(newAppState.title, oldAppState.title);
   renderContent(newAppState.content, oldAppState.content);
}

function renderTitle(newTitle, oldTitle = {}) {
   if (newTitle === oldTitle) return;
   console.log('render title...');
   const titleDOM = document.getElementById('title');
   titleDOM.innerHTML = newTitle.text;
   titleDOM.style.color = newTitle.color;
}

function renderContent(newContent, oldContent = {}) {
   if (newContent === oldContent) return;
   console.log('render content...');
   const contentDOM = document.getElementById('content');
   contentDOM.innerHTML = newContent.text;
   contentDOM.style.color = newContent.color;
}

// let appState = {
//    title: {
//       text: 'React.js 小书',
//       color: 'red',
//    },
//    content: {
//       text: 'React.js 小书内容',
//       color: 'blue'
//    }
// };

function stateChanger(state, action) {//e.i. reducer 初始化和计算新的 statea
   if (!state) {//初始化state
      return {
         title: {
            text: 'React.js 小书',
            color: 'red',
         },
         content: {
            text: 'React.js 小书内容',
            color: 'blue'
         }
      };
   }
   switch (action.type) {
      case 'UPDATE_TITLE_TEXT':
         return {
            ...state,
            title: {
               ...state.title,
               text: action.text
            },
         };
      case 'UPDATE_TITLE_COLOR':
         state.title.color = action.color;
         return {
            ...state,
            title: {
               ...state.title,
               color: action.color
            },
         };
      default:
         return state;
   }
}

const store = creactStore(stateChanger);
let oldState = store.getState();//初始化的时候，缓存旧的state

store.subscribe(() => {//监听函数，只要调用了dispatch都会执行这个函数
   const newState = store.getState();// 数据后续可能变化，获取新的 state
   renderApp(newState, oldState);// 把新旧的 state 传进去渲染
   oldState = newState;// 渲染完以后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染
});

renderApp(store.getState()); // 首次渲染页面
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '我是action修改的2',});
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: '#f0f',});