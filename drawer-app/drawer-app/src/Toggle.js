import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
   constructor(props) {
      super(props);
      this.state = { isToggleOn: true };
      
      function handleChange(event) {
         return Toggle(event.target.value);
      }
      function handleChange2(event) {
         return Toggle(event.target.value);
      }
     
      
      <form>
        <label htmlFor="Drawer">Name: </label>
        <input onChange={handleChange} id="ToggleOpen" />
      </form>;
      
      <form>
        <label htmlFor="Drawer">Name: </label>
        <input onChange={handleChange2} id="ToggleClose" />
      </form>;
      
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
         <button onClick={this.handleClick}>
            {this.state.isToggleOn ? '⁀' : '‿'}
      
            </button>
      );
   }
}
ReactDOM.render(
   <Toggle />,
   document.getElementById('root')
)
export default Toggle