import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
class Toggle extends React.Component {
   constructor(props) {
      super(props);
      this.state = { isToggleOn: true };
      
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
      this.setState(state => ({
         isToggleOn: !state.isToggleOn,
         isDrawerToggle: !state.isDrawerToggle
      }));
   }

   
   render() {
      return (
         <Button onClick={this.handleClick}>
            {this.state.isToggleOn ? '⁀' : '‿'}
      
            </Button>
      );
   }
}
ReactDOM.render(
   <Toggle />,
   document.getElementById('root')
)
export default Toggle