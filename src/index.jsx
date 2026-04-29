import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';



function MyApp() {
  return (
    <div>
      <h1>Custom Appp!</h1>
    </div>
  );
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser="chai Ur react"

const reactElement = React.createElement(//bable injects thie=s React .createElement
  'a',//compulsary to write
  { href: "https://google.com", target: '_blank' },//set of attributes that need to be defined in form of props like we did in custom react
  'click on meeeee',
  //variable
  anotherUser

)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  //  MyApp() is also valid as in the end myapp is a function

 reactElement


);

