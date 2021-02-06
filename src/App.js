import React from 'react';
import './App.css';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

class App extends React.Component {
  state = {
    draggableVisibility: "block"
  }

  render(){
    return (
      <>
      <h1> Put the orange in the box and the apple in the basket </h1>
        <DragDropContainer 
          targetKey="foo" 
          style={{display: this.state.draggableVisibility}}
          dropData={{type: "Orange"}}>
        <img src = "https://media.istockphoto.com/photos/orange-fruit-isolated-on-a-white-background-picture-id494037460?k=6&m=494037460&s=612x612&w=0&h=9CJ0RvlNLk3BMJ4ud2JmyQR7t_fUY7bLw8wl4Tk__kY=" width="100px" alt="" />
        </DragDropContainer>

        <DragDropContainer targetKey="bar" style={{display: this.state.draggableVisibility}}>
        <img src = "https://media.istockphoto.com/photos/bite-on-a-red-apple-picture-id475190475?k=6&m=475190475&s=612x612&w=0&h=9yexhsRfQ5-f-CKOMkkZiebbgOJuUq9wsbEfmeUmqGw=" width="100px" 
        dropData={{type: "Apple"}}
        alt=""/>
        </DragDropContainer>

        <DropTarget 
          id="my_target"
          targetKey="foo"
          onHit={function(e){alert("You put the orange in the box!");}}
        >
            <img src = "https://th.bing.com/th/id/OIP.IUAOYq2W5nhHlOLltRdP9gHaHa?pid=Api&rs=1"
            width="200px"
            alt=""/>
        </DropTarget>

        <DropTarget
        targetKey = "bar"
        id="a_target"
        onHit={function(){alert("You put the apple in the basket!"); window.location.href="https://youtu.be/dQw4w9WgXcQ";}}
        >
        <img src="https://th.bing.com/th/id/OIP.aOwDwxpozqlZi9Ur0EjkXwHaHa?pid=Api&rs=1"
        width="200px"
        alt=""/>
        </DropTarget>
      </>
    );
    }
}

export default App;
