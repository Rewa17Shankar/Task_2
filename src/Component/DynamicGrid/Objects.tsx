import React from 'react'
const emojiList =[ { emoji: '🔑', description: 'Key' },
    { emoji: '🔒', description: 'Lock' },
    { emoji: '🔓', description: 'Unlocked' },
    { emoji: '🗝️', description: 'Old Key' },
    { emoji: '🔧', description: 'Wrench' },
    { emoji: '🔩', description: 'Nut and Bolt' },
    { emoji: '🔨', description: 'Hammer' },
    { emoji: '🧰', description: 'Toolbox' },
    { emoji: '🪛', description: 'Screwdriver' },
    { emoji: '⚙️', description: 'Gear' },
    { emoji: '🧲', description: 'Magnet' },
    { emoji: '🪤', description: 'Mouse Trap' },
    { emoji: '🔍', description: 'Magnifying Glass' },
    { emoji: '🔎', description: 'Magnifying Glass Tilted Left' },
    { emoji: '🧬', description: 'DNA' },
    { emoji: '🔭', description: 'Telescope' },
    { emoji: '📡', description: 'Satellite Antenna' },
    { emoji: '🪐', description: 'Ringed Planet' },
    { emoji: '💡', description: 'Light Bulb' },
    { emoji: '🔋', description: 'Battery' },
    { emoji: '🔌', description: 'Electric Plug' },
    { emoji: '💻', description: 'Laptop' },
    { emoji: '🖥️', description: 'Desktop Computer' },
    { emoji: '🖨️', description: 'Printer' },
    { emoji: '📱', description: 'Mobile Phone' },
    { emoji: '📞', description: 'Telephone Receiver' },
    { emoji: '☎️', description: 'Telephone' },
    { emoji: '📟', description: 'Pager' },
    { emoji: '📠', description: 'Fax Machine' },
    { emoji: '📺', description: 'Television' },
    { emoji: '📻', description: 'Radio' },
    { emoji: '🎙️', description: 'Microphone' },
    { emoji: '🎚️', description: 'Level Slider' },
    { emoji: '🎛️', description: 'Control Knobs' },
    { emoji: '🧭', description: 'Compass' },
    { emoji: '⏰', description: 'Alarm Clock' },
    { emoji: '⌚', description: 'Watch' },
    { emoji: '📅', description: 'Calendar' },
    { emoji: '📆', description: 'Tear-Off Calendar' },
    { emoji: '🗓️', description: 'Spiral Calendar' },
    { emoji: '📝', description: 'Memo' },
    { emoji: '📊', description: 'Bar Chart' },
    { emoji: '📈', description: 'Chart Increasing' },
    { emoji: '📉', description: 'Chart Decreasing' },
    { emoji: '📜', description: 'Scroll' },
    { emoji: '📃', description: 'Page with Curl' },
    { emoji: '📄', description: 'Page Facing Up' },
    { emoji: '🗃️', description: 'Card File Box' },
    { emoji: '🗄️', description: 'File Cabinet' },
    { emoji: '🗑️', description: 'Wastebasket' },
    { emoji: '🛋️', description: 'Couch and Lamp' },
    { emoji: '🛏️', description: 'Bed' },
    { emoji: '🚪', description: 'Door' },
    { emoji: '🪑', description: 'Chair' },
    { emoji: '🛁', description: 'Bathtub' },
    { emoji: '🚽', description: 'Toilet' },
    { emoji: '🚿', description: 'Shower' },
    { emoji: '🪒', description: 'Razor' },
    { emoji: '🧴', description: 'Lotion Bottle' },
    { emoji: '🧼', description: 'Soap' },
    { emoji: '🧽', description: 'Sponge' },
    { emoji: '🧹', description: 'Broom' },
    { emoji: '🧺', description: 'Basket' },
    { emoji: '🧯', description: 'Fire Extinguisher' },
    { emoji: '🛒', description: 'Shopping Cart' },
    { emoji: '💼', description: 'Briefcase' },
    { emoji: '🎒', description: 'Backpack' },
    { emoji: '👜', description: 'Handbag' },
    { emoji: '👝', description: 'Clutch Bag' },
    { emoji: '👛', description: 'Purse' },
    { emoji: '👡', description: 'Flip-Flops' },
    { emoji: '👟', description: 'Sneakers' },
    { emoji: '🥿', description: 'Flat Shoe' },
    { emoji: '👠', description: 'High-Heeled Shoe' },
    { emoji: '👢', description: 'Electric Light Bulb' },
    { emoji: '🕯️', description: 'Candle' },
    { emoji: '🎁', description: 'Gift' },
    { emoji: '🎈', description: 'Balloon' },
    { emoji: '📦', description: 'Package' },
    { emoji: '📍', description: 'Pushpin' },
    { emoji: '📎', description: 'Paperclip' },
    { emoji: '🖇️', description: 'Linked Paperclips' },
    { emoji: '✂️', description: 'Scissors' },
    { emoji: '🖌️', description: 'Paintbrush' },
    { emoji: '🖍️', description: 'Crayon' },
    { emoji: '🧷', description: 'Safety Pin' },
    { emoji: '🧮', description: 'Abacus' },
    { emoji: '🔮', description: 'Crystal Ball' },];

const Objects:React.FC=()=> {
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
export default Objects;