import React from 'react';
import ReactDOM from 'react-dom';

export default function Card(props) {
    console.log('props',props);
    return (
        <div className="card">
            {props['cardContent'].map(function(cContent, index){
                  return <p className="card-content" key={ index }>{cContent}</p>;
      })}
        </div>
    );
}