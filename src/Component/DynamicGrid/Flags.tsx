import React, {useState} from 'react'
const emojiList =[ { emoji: '🇦🇫', description: 'Afghanistan' },
    { emoji: '🇦🇱', description: 'Albania' },
    { emoji: '🇩🇿', description: 'Algeria' },
    { emoji: '🇦🇸', description: 'American Samoa' },
    { emoji: '🇦🇬', description: 'Antigua and Barbuda' },
    { emoji: '🇦🇷', description: 'Argentina' },
    { emoji: '🇦🇲', description: 'Armenia' },
    { emoji: '🇦🇼', description: 'Aruba' },
    { emoji: '🇦🇺', description: 'Australia' },
    { emoji: '🇦🇹', description: 'Austria' },
    { emoji: '🇦🇿', description: 'Azerbaijan' },
    { emoji: '🇧🇸', description: 'Bahamas' },
    { emoji: '🇧🇭', description: 'Bahrain' },
    { emoji: '🇧🇩', description: 'Bangladesh' },
    { emoji: '🇧🇧', description: 'Barbados' },
    { emoji: '🇧🇾', description: 'Belarus' },
    { emoji: '🇧🇪', description: 'Belgium' },
    { emoji: '🇧🇿', description: 'Belize' },
    { emoji: '🇧🇯', description: 'Benin' },
    { emoji: '🇧🇹', description: 'Bhutan' },
    { emoji: '🇧🇴', description: 'Bolivia' },
    { emoji: '🇧🇦', description: 'Bosnia and Herzegovina' },
    { emoji: '🇧🇼', description: 'Botswana' },
    { emoji: '🇧🇷', description: 'Brazil' },
    { emoji: '🇻🇬', description: 'British Virgin Islands' },
    { emoji: '🇻🇨', description: 'Saint Vincent and the Grenadines' },
    { emoji: '🇧🇦', description: 'Bosnia and Herzegovina' },
    { emoji: '🇧🇪', description: 'Belgium' },
    { emoji: '🇻🇦', description: 'Vatican City' },
    { emoji: '🇧🇬', description: 'Bulgaria' },
    { emoji: '🇧🇭', description: 'Bahrain' },
    { emoji: '🇧🇯', description: 'Benin' },
    { emoji: '🇰🇭', description: 'Cambodia' },
    { emoji: '🇨🇦', description: 'Canada' },
    { emoji: '🇨🇱', description: 'Chile' },
    { emoji: '🇨🇳', description: 'China' },
    { emoji: '🇨🇴', description: 'Colombia' },
    { emoji: '🇭🇷', description: 'Croatia' },
    { emoji: '🇨🇺', description: 'Cuba' },
    { emoji: '🇨🇾', description: 'Cyprus' },
    { emoji: '🇨🇿', description: 'Czech Republic' },
    { emoji: '🇩🇰', description: 'Denmark' },
    { emoji: '🇩🇴', description: 'Dominican Republic' },
    { emoji: '🇪🇨', description: 'Ecuador' },
    { emoji: '🇪🇬', description: 'Egypt' },
    { emoji: '🇸🇻', description: 'El Salvador' },
    { emoji: '🇬🇶', description: 'Equatorial Guinea' },
    { emoji: '🇪🇷', description: 'Eritrea' },
    { emoji: '🇪🇪', description: 'Estonia' },
    { emoji: '🇪🇹', description: 'Ethiopia' },
    { emoji: '🇫🇮', description: 'Finland' },
    { emoji: '🇫🇷', description: 'France' },
    { emoji: '🇬🇦', description: 'Gabon' },
    { emoji: '🇬🇧', description: 'United Kingdom' },
    { emoji: '🇬🇩', description: 'Grenada' },
    { emoji: '🇬🇹', description: 'Guatemala' },
    { emoji: '🇬🇼', description: 'Guinea-Bissau' },
    { emoji: '🇬🇹', description: 'Guatemala' },
    { emoji: '🇭🇺', description: 'Hungary' },
    { emoji: '🇮🇩', description: 'Indonesia' },
    { emoji: '🇮🇳', description: 'India' },
    { emoji: '🇮🇷', description: 'Iran' },
    { emoji: '🇮🇶', description: 'Iraq' },
    { emoji: '🇮🇹', description: 'Italy' },
    { emoji: '🇯🇵', description: 'Japan' },
    { emoji: '🇯🇴', description: 'Jordan' },
    { emoji: '🇰🇿', description: 'Kazakhstan' },
    { emoji: '🇰🇪', description: 'Kenya' },
    { emoji: '🇰🇮', description: 'Kiribati' },
    { emoji: '🇰🇷', description: 'South Korea' },
    { emoji: '🇰🇷', description: 'South Korea' },
    { emoji: '🇱🇧', description: 'Lebanon' },
    { emoji: '🇱🇰', description: 'Sri Lanka' },
    { emoji: '🇱🇺', description: 'Luxembourg' },
    { emoji: '🇲🇰', description: 'North Macedonia' },
    { emoji: '🇲🇬', description: 'Madagascar' },
    { emoji: '🇲🇼', description: 'Malawi' },
    { emoji: '🇲🇾', description: 'Malaysia' },
    { emoji: '🇲🇻', description: 'Maldives' },
    { emoji: '🇲🇱', description: 'Mali' },
    { emoji: '🇲🇹', description: 'Malta' },
    { emoji: '🇲🇦', description: 'Morocco' },
    { emoji: '🇲🇺', description: 'Mauritius' },
    { emoji: '🇲🇰', description: 'North Macedonia' },
    { emoji: '🇲🇽', description: 'Mexico' },
    { emoji: '🇲🇦', description: 'Morocco' },
    { emoji: '🇳🇱', description: 'Netherlands' },
    { emoji: '🇳🇿', description: 'New Zealand' },
    { emoji: '🇳🇬', description: 'Nigeria' },
    { emoji: '🇳🇴', description: 'Norway' },
    { emoji: '🇴🇲', description: 'Oman' },
    { emoji: '🇵🇰', description: 'Pakistan' },
    { emoji: '🇵🇬', description: 'Papua New Guinea' },
    { emoji: '🇵🇦', description: 'Panama' },
    { emoji: '🇵🇬', description: 'Papua New Guinea' },
    { emoji: '🇵🇾', description: 'Paraguay' },
    { emoji: '🇵🇹', description: 'Portugal' },
    { emoji: '🇷🇴', description: 'Romania' },
    { emoji: '🇷🇺', description: 'Russia' },
    { emoji: '🇸🇦', description: 'Saudi Arabia' },
    { emoji: '🇸🇳', description: 'Senegal' },
    { emoji: '🇸🇬', description: 'Singapore' },
    { emoji: '🇸🇻', description: 'El Salvador' },
    { emoji: '🇸🇰', description: 'Slovakia' },
    { emoji: '🇸🇮', description: 'Slovenia' },
    { emoji: '🇿🇦', description: 'South Africa' },
    { emoji: '🇪🇸', description: 'Spain' },
    { emoji: '🇱🇰', description: 'Sri Lanka' },
    { emoji: '🇱🇺', description: 'Luxembourg' },
    { emoji: '🇸🇩', description: 'Sudan' },
    { emoji: '🇸🇪', description: 'Sweden' },
    { emoji: '🇨🇭', description: 'Switzerland' },
    { emoji: '🇹🇼', description: 'Taiwan' },
    { emoji: '🇹🇯', description: 'Tajikistan' },
    { emoji: '🇹🇿', description: 'Tanzania' },
    { emoji: '🇹🇬', description: 'Togo' },
    { emoji: '🇹🇴', description: 'Tonga' },
    { emoji: '🇹🇹', description: 'Trinidad and Tobago' },
    { emoji: '🇺🇬', description: 'Uganda' },
    { emoji: '🇺🇦', description: 'Ukraine' },
    { emoji: '🇦🇪', description: 'United Arab Emirates' },
    { emoji: '🇺🇸', description: 'United States' },
    { emoji: '🇺🇾', description: 'Uruguay' },
    { emoji: '🇺🇿', description: 'Uzbekistan' },
    { emoji: '🇻🇺', description: 'Vanuatu' },
    { emoji: '🇻🇪', description: 'Venezuela' },
    { emoji: '🇻🇳', description: 'Vietnam' },
    { emoji: '🇼🇸', description: 'Samoa' },
    { emoji: '🇾🇪', description: 'Yemen' },
    { emoji: '🇿🇦', description: 'South Africa' },
    { emoji: '🇿🇲', description: 'Zambia' },
    { emoji: '🇿🇼', description: 'Zimbabwe' },
];

const Flags: React.FC = () => {
  const [favourite, setFavourite] = useState<string[]>(() => {
    // Load favourites from localStorage if they exist
    return JSON.parse(localStorage.getItem('favouriteEmojis') || '[]');
  });

  const fav = (emoji: string) => {
    // Check if the emoji is already in favorites
    if (!favourite.includes(emoji)) {
      const updatedFavourites = [...favourite, emoji];
      setFavourite(updatedFavourites);
      localStorage.setItem('favouriteEmojis', JSON.stringify(updatedFavourites));
      setFavourite(updatedFavourites);
    }
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
        {emojiList.map((item, index) => (
          <div key={index} className="emoji-card p-4 border rounded text-center bg-light hover-effect">
            <div
              className='icon'
              onClick={() => fav(item.emoji)}
              style={{ display: 'flex', alignItems: 'flex-end', height: '15px', width: '15px', cursor: 'pointer',backgroundColor: favourite.includes(item.emoji) ? 'rgba(0, 0, 0, 0.3)' : 'transparent', // Light black color
                // borderRadius: '50%',
                // padding: '5px',
                transition: 'background-color 0.3s',
  }}
            >
              <img src="/bookmark.png" alt="bookmark icon"style={{
                  filter: favourite.includes(item.emoji) ? 'invert(1)' : 'none', // Inverts the color when selected
                  transition: 'filter 0.3s',
                }}  />
            </div>
            <div className="emoji" style={{ fontSize: '2rem' }}>{item.emoji}</div>
            <div className="description mt-2">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flags;
// const  Flags:React.FC=() =>{
//   const[favourite, setFavourite] = useState<string[]>([]);
//   const fav = (emoji:string) =>{
    



//   }
//   return (
//     <div>
//     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
//       {emojiList.map((item, index) => (
//         <div key={index} className="emoji-card p-4 border rounded text-center bg-light hover-effect">
//           <div className='icon' onClick={fav} style={{ display:'flex', alignItems: 'flex-end', height:'15px', width:'15px'  }}>
//               <img src="/bookmark.png" alt="" />
//             </div>
//           <div className="emoji" style={{ fontSize: '2rem' }}>{item.emoji}</div>
//           <div className="description mt-2">{item.description}</div>
//         </div>
//       ))}
//     </div>
//   </div>
//   )
// }
// export default Flags;