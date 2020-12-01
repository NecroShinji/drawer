import './App.scss';
import DrawerEpisodeItem from './DrawerEpisodeItem';
import React from 'react-dom'
import Toggle from './Toggle'
    
    function App() {
  return (
  
    <div id="drawer">
      <header>
        <div className="drawer-episode-title">
          <strong>Episode</strong>
          <i>icon</i>
          <em>Politics of Hair</em>
        </div>
        
        <div className="drawer-episode-meta">
          <strong>See All</strong>
          <em>14 Stories</em>
          <i><Toggle /></i>
      
        </div>

      </header>
      

      <ul>
        <DrawerEpisodeItem />
        <DrawerEpisodeItem />
        <DrawerEpisodeItem />
        <DrawerEpisodeItem />
        <DrawerEpisodeItem />
      </ul>
    </div>
  );
}

export default App;