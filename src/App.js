import React, { Component } from 'react';
import './App.css';
import { Container, Header, Button } from 'semantic-ui-react';
import Choice from './Choice';

class App extends Component {
  state = {
    choices: [ 
      { id: 1, name: "Rock" },
      { id: 2, name: "Paper" },
      { id: 3, name: "Scissors" },
       ],

       userChoice:'',
       compChoice:''

  };

  handleClick(id) {
    const compChoice = Math.floor((1+ (Math.random()) * 3));
    const userChoice = id 
    this.setState({ userChoice, compChoice });





    

  };

    render() {
    return (
      <Container style={styles.container}  textAlign="center" >
         <Header as="h1" >Rock Paper Scissors</Header>
         <br />
       <Button onClick={() => this.handleClick(1)}>
          <Button.Content>Rock</Button.Content>
          <br />
          <Button.Content><i class="hand rock outline icon"></i></Button.Content>
        </Button>
        <Button onClick={() => this.handleClick(2)}>
          <Button.Content>Paper</Button.Content>
          <br />
          <Button.Content><i class="hand paper outline icon"></i></Button.Content>
        </Button>
        <Button onClick={() => this.handleClick(3)}>
          <Button.Content>Scissors</Button.Content>
          <br />
          <Button.Content><i class="hand scissors outline icon"></i></Button.Content>
        </Button>
    
        <Choice choices={this.state.choices}  />
       
        
  </Container>


    );
  };
};

const styles = {
  container: {
    margintop: "25px"
  }
};




export default App;
