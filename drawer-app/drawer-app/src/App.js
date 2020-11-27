import './App.scss';
import DrawerEpisodeItem from './DrawerEpisodeItem';
import React from 'react-dom'

    function App() {
  return (
    <div id="drawer">
      <header>
        <div className="drawer-episode-title">
          <strong>Episode</strong>
          <em>Politics of Hair</em>
        </div>

        <div className="drawer-episode-meta">
          <strong>See All</strong>
          <em>14 Stories</em>
          <i>Icon Here</i>
        </div>

        <div className="drawer-button">
         <button> </button>
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