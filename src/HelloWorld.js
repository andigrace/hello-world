import React from 'react';

const HelloWorld = () => {

  function sayHello() {
    alert('Hello, World!');
  }
  function sayGoodbye() {
    alert('Goodbye Cruel World!');
  }
  function saySup() {
    alert('Can I get your number?!');
  }

  return (
    <>
    <button onClick={sayHello}>Click me!</button>
    <br/>
    <button onClick={sayGoodbye}>Click me!</button>
    <br/>
    <button onClick={saySup}>Click me!</button>
    </>
  );
};

export default HelloWorld;
