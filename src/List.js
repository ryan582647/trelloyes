import React from 'react';
import Card from './Card'
import './List.css';

class List extends React.Component {
   renderCardContent() {
        return this.props.cards.map((card, index) => {
          return <Card 
          key={index}
          title={card.title} 
          content={card.content} 
           />
        })
      }
  render() {
      return (
    <section className='List'>
      <header className='List-header'>
        <h2>{this.props.header}</h2>
      </header>
      <div className='List-cards'>
      {this.renderCardContent()}
      </div>
    </section>
  );
}
};

export default List;