import React from 'react';
// import { Card } from 'semantic-ui-react';



class Choice extends React.Component {
   state = { 
     scores: [ 
       { userScore: 0, compScore: 0 }
    ],
        tie:'',
        win:'',
        lose:''
   };


   game = (props) => {
  // const i = (i++, i--)
  const tie = [
    props.userChoice = "Rock" && props.compChoice === 0, 
    props.userChoice = "Paper" && props.compChoice === 1,
    props.userChoice = "Scissors" && props.compChoice === 2,
];

  const win = [ 
    props.userChoice = "Rock" && props.compChoice === 2,
    props.userChoice = "Paper" && props.compChoice === 0,
    props.userChoice = "Scissors" && props.compChoice === 1,
];

  const lose = [
    props.userChoice = "Rock" && props.compChoice === 1,
    props.userChoice = "Paper" && props.compChoice === 2,
    props.userChoice = "Scissors" && props.compChoice === 0,
];
  this.setState({ tie: tie });
  this.setState({ win: win });
  this.setState({ lose: lose });

};


  
// win, userScore: i++, compScore: ''  
// userScore: '', compScore: i++
  
  
  
  render() {
      return(
        <div>
          
        </div>
      )
  
  };

};






export default Choice;