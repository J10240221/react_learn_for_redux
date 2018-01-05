// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

function creactStore(state, stateChanger) {
   const listeners = [];
   const subscribe = (listener) => listeners.push(listener);
   const getState = () => state;
   const dispatch = (action) => {
      stateChanger(state,action);
      listeners.forEach((listener)=>listener());
   };
   return {getState, dispatch, subscribe};
}

function renderApp (newAppState,oldAppState={}) {
   if( newAppState === oldAppState) return;
   console.log('render app...');
   renderTitle(newAppState.title, oldAppState.title);
   renderContent(newAppState.content, oldAppState.content);
}

function renderTitle (newTitle,oldTitle={}) {
   if( newTitle === oldTitle) return;
   console.log('render title...');
   const titleDOM = document.getElementById('title');
   titleDOM.innerHTML = newTitle.text;
   titleDOM.style.color = newTitle.color;
}

function renderContent (newContent,oldContent={}) {
   if( newContent === oldContent) return;
   console.log('render content...');
   const contentDOM = document.getElementById('content');
   contentDOM.innerHTML = newContent.text;
   contentDOM.style.color = newContent.color;
}

let appState = {
   title: {
      text: 'React.js 小书',
      color: 'red',
   },
   content: {
      text: 'React.js 小书内容',
      color: 'blue'
   }
};






function stateChanger(state, action) {//todo 这里还没写完， 《react小书34节》
   switch (action.type) {
      case 'UPDATE_TITLE_TEXT':
         state.title.text = action.text;
         break;
      case 'UPDATE_TITLE_COLOR':
         state.title.color = action.color;
         break;
      default:
         break;
   }
}

const store = creactStore(appState,stateChanger);
let oldState = store.getState();//缓存旧的state

store.subscribe(()=>{//监听函数，只要调用了dispatch都会执行这个函数
   const newState = store.getState();
   renderApp(appState);
   oldState = newState;
});

renderApp(store.getState()); // 首次渲染页面
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '我是action修改的2',});
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: '#f0f',});