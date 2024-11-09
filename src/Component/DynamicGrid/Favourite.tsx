import React, { useEffect, useState } from 'react';

const Favourite: React.FC = () => {
  const [favourite, setFavourite] = useState<string[]>([]);

  useEffect(() => {
    // Load favourites from localStorage
    const savedFavourites = JSON.parse(localStorage.getItem('favouriteEmojis') || '[]');
    setFavourite(savedFavourites.reverse());
  }, []);

  return (
    <div>
      <h2>Favourite Emojis</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
        {favourite.map((emoji, index) => (
          <div key={index} className="emoji-card p-4 border rounded text-center bg-light">
            <div className="emoji" style={{ fontSize: '2rem' }}>{emoji}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
