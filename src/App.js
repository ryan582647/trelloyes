    
import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE';

function buildCardsArray(cardIds, allCards) {
  return cardIds.map(key => {
    return allCards[key];
  });
};

class App extends Component {
  static defaultProps = {
    store:[]
    
  };
  
  render() {
    console.log(store);

    const listArr = this.props.store.lists.map(listArray => {
      list.cards = buildCardsArray(list.cardIds, this.props.store.allCards)
      return listArray;
    })
  
    const renderCards = listArr.map(list => {
      return <List header={list.header} cards={list.cards} key={list.id}/>
    })
  
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {renderCards};
        </div>
      </main>
    );
  }
}

export default App;