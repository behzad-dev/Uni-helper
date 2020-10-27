import { Divider, TextField } from '@material-ui/core';
import React, { Component } from 'react';
class ScoreCalculator extends Component {
    state = { Score:20 }
    render() { 
        return  <div>  <div><h2>This tool convert Iranian score into German's score system</h2></div><TextField
        id="standard-basic"
        label="What is your score?"
         type="number"
        // inputProps={{ pattern: "[1-5]" }}
        // inputProps={{  pattern: "[a-z]{1,15}" }} 
        defaultValue="20" 
        onChange={(b) => this.setState({ Score: b.target.value })}
    /><div 
    style={{border:'solid',borderRadius:'17px',textAlign:'center',marginBottom:55,marginTop:55,fontSize:25 ,color:"green"}}>Your score in German's system is : {3*[(20-this.state.Score)/(20-10)]+1}</div>
      <br></br>
       <Divider />
<div style={{fontSize:20}}>
  <div>  Formula to calculate score:       </div>         
  <div style={{fontWeight:"bold"}}>  A = 3 * [ ( x – y ) / ( x – z ) ] + 1</div>
  <div style={{fontSize:15}}>
  <div>  A: Average Score in German's score system</div>
  <div>  X: Highest Score that can be achived</div>
  <div>  Y: Your Average score</div>
  <div>  Z: The lowest Score that can be achieved in order to pass</div></div>
    </div>

    </div> ;
    }
}
 
export default ScoreCalculator;