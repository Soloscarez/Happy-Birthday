import React, { useState } from 'react';
import './App.css';
import melody from './melody.mp3';

function App() {
  const [showCard, setShowCard] = useState(false);

  const handleShowCard = () => {
    setShowCard(true);
    const audio = new Audio(melody);
    audio.play();
  };

  return (
    <div className="app-bg">
      <button className="show-btn" onClick={handleShowCard} disabled={showCard}>
        Just for U
      </button>
      <div>
        <div><img width="350" src="https://imgs.search.brave.com/bDXiRwZy_lNKztxRkUSoo4izViaMs5zYXcwayHkKGRk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvQmly/dGhkYXktQ2FrZS1Q/TkctSW1hZ2VzLnBu/Zw" alt="" /></div>
      <div className={`card-container${showCard ? ' popdown' : ''}`}>
        {showCard && (
          <div className="greeting-card elevate">
            <h1>Happy Birthday, SRISHTI !</h1>
            <div className="card-content">
              <p>It's been a long time…<br/>
              Honestly, I've lost track of how many times I wanted to talk, wanted to tell you something — but stayed quiet. Perhaps because your silence was already louder than words. Perhaps because I knew I was never truly part of your world.<br/><br/>
              It brought it all back. All the emotions I had tried to suppress. I was attracted to you, not simply because of the way you appeared, but because something about you brought back the image of someone I became close to<br/><br/>
              It's your birthday today — and despite we've never had decent conversations, and despite I know you've been avoiding me… I couldn't let the day go by without telling you this.<br/><br/>
              <b>Happy birthday.</b><br/><br/>
              I don't expect anything from you. I never have. But I just needed you to understand that forgetting you hasn't been easy. Your memories have a tendency to linger, even when your presence doesn't.<br/><br/>
              Perhaps you'll never get what I saw in you. Perhaps you'll never even care. And that's fine. But this — this was something I had to tell you. For me.
              </p>
            </div>
            <span role="img" aria-label="party">🎁-TGV</span>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default App;
