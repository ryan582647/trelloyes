import React from 'react';
import List from './List'
import './App.css';



function App(props) {

  const buildAllCardIDs = (cardIds, allCards) => {
    return cardIds.map(id => {
      return allCards[id];
      
    });
  };

  const cardComponent = props.store.lists.map(components => {
    components.allCardsList = buildAllCardIDs(components.cardIds, props.store.allCards)
    console.log(components);
    return components;
  })
  
  console.log(cardComponent);

  const renderCards = cardComponent.map(lists => {
    return <List 
      key={lists.id} 
      header={lists.header} 
      cards={lists.allCardsList}
      />
  })
    
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
         {renderCards}
        </div>
      </main>
    );
  }


export default App;