import React from 'react'
const emojiList =[
    { "emoji": "♈", "description": "Aries" },
  { "emoji": "♉", "description": "Taurus" },
  { "emoji": "♊", "description": "Gemini" },
  { "emoji": "♋", "description": "Cancer" },
  { "emoji": "♌", "description": "Leo" },
  { "emoji": "♍", "description": "Virgo" },
  { "emoji": "♎", "description": "Libra" },
  { "emoji": "♏", "description": "Scorpio" },
  { "emoji": "♐", "description": "Sagittarius" },
  { "emoji": "♑", "description": "Capricorn" },
  { "emoji": "♒", "description": "Aquarius" },
  { "emoji": "♓", "description": "Pisces" },
  { "emoji": "♂️", "description": "Male Sign" },
  { "emoji": "♀️", "description": "Female Sign" },
  { "emoji": "⚥", "description": "Male and Female Sign" },
  { "emoji": "🚗", "description": "Automobile" },
  { "emoji": "🚕", "description": "Taxi" },
  { "emoji": "🚙", "description": "Recreational Vehicle" },
  { "emoji": "🚌", "description": "Bus" },
  { "emoji": "🚎", "description": "Trolleybus" },
  { "emoji": "🚑", "description": "Ambulance" },
  { "emoji": "🚒", "description": "Fire Engine" },
  { "emoji": "🚓", "description": "Police Car" },
  { "emoji": "🏍️", "description": "Motorcycle" },
  { "emoji": "🚲", "description": "Bicycle" },
  { "emoji": "🚨", "description": "Police Car Light" },
  { "emoji": "🚦", "description": "Traffic Light" },
  { "emoji": "⚠️", "description": "Warning Sign" },
  { "emoji": "⚡", "description": "High Voltage" },
  { "emoji": "❗", "description": "Exclamation Mark" },
  { "emoji": "❕", "description": "White Exclamation Mark" },
  { "emoji": "➡️", "description": "Right Arrow" },
  { "emoji": "⬅️", "description": "Left Arrow" },
  { "emoji": "⬆️", "description": "Up Arrow" },
  { "emoji": "⬇️", "description": "Down Arrow" },
  { "emoji": "↖️", "description": "Up-Left Arrow" },
  { "emoji": "↗️", "description": "Up-Right Arrow" },
  { "emoji": "↙️", "description": "Down-Left Arrow" },
  { "emoji": "↘️", "description": "Down-Right Arrow" },
  { "emoji": "🔼", "description": "Upwards Button" },
  { "emoji": "🔽", "description": "Downwards Button" },
  { "emoji": "⏩", "description": "Fast Forward" },
  { "emoji": "⏪", "description": "Rewind" },
  { "emoji": "⏸️", "description": "Pause" },
  { "emoji": "⏹️", "description": "Stop" },
  { "emoji": "🔄", "description": "Counterclockwise Arrows" },
  { "emoji": "🔁", "description": "Clockwise Arrows" },
  { "emoji": "🕊️", "description": "Dove of Peace" },
  { "emoji": "✝️", "description": "Cross" },
  { "emoji": "☪️", "description": "Star and Crescent" },
  { "emoji": "🕉️", "description": "Om" },
  { "emoji": "✡️", "description": "Star of David" },
  { "emoji": "🔯", "description": "Six Pointed Star" },
  { "emoji": "☸️", "description": "Wheel of Dharma" },
  { "emoji": "⛩️", "description": "Shinto Shrine" },
  { "emoji": "🕌", "description": "Mosque" },
  { "emoji": "🕍", "description": "Synagogue" },
  { "emoji": "🏛️", "description": "Classical Building" },
  { "emoji": "🗿", "description": "Moai" },
  { "emoji": "📯", "description": "Postal Horn" },
  { "emoji": "🎺", "description": "Trumpet" },
  { "emoji": "🎷", "description": "Saxophone" },
  { "emoji": "🎸", "description": "Guitar" },
  { "emoji": "🎻", "description": "Violin" },
  { "emoji": "🎼", "description": "Musical Score" },
  { "emoji": "🎵", "description": "Musical Note" },
  { "emoji": "🎶", "description": "Multiple Musical Notes" },
  { "emoji": "🎤", "description": "Microphone" },
  { "emoji": "🎧", "description": "Headphone" },
  { "emoji": "🎹", "description": "Musical Keyboard" },
  { "emoji": "🚀", "description": "Rocket" },
  { "emoji": "🛸", "description": "Flying Saucer" },
  { "emoji": "✈️", "description": "Airplane" },
  { "emoji": "🛩️", "description": "Small Airplane" },
  { "emoji": "🛳️", "description": "Passenger Ship" },
  { "emoji": "⛵", "description": "Sailboat" },
  { "emoji": "🚁", "description": "Helicopter" },
  { "emoji": "🚤", "description": "Speedboat" },
  { "emoji": "🛴", "description": "Kick Scooter" },
  { "emoji": "🦽", "description": "Manual Wheelchair" },
  { "emoji": "🦼", "description": "Motorized Wheelchair" },
  { "emoji": "🚸", "description": "Children Crossing" },
  { "emoji": "🛑", "description": "Stop Sign" },
  { "emoji": "⚓", "description": "Anchor" },
  { "emoji": "💺", "description": "Seat" },
];
const Symbol:React.FC=()=> {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
        {emojiList.map((item, index) => (
          <div key={index} className="emoji-card p-4 border rounded text-center bg-light hover-effect">
            <div  style={{ display:'flex', alignItems: 'flex-end', height:'15px', width:'15px'  }}>
              <img src="/bookmark.png" alt="" />
            </div>
            <div className="emoji" style={{ fontSize: '2rem' }}>{item.emoji}</div>
            <div className="description mt-2">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Symbol;