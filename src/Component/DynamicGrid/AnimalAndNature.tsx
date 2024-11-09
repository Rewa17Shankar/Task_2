import React from 'react'
const emojiList = [
    { emoji: '🐶', description: 'Dog' },
    { emoji: '🐕', description: 'Dog with Doghouse' },
    { emoji: '🐩', description: 'Poodle' },
    { emoji: '🐺', description: 'Wolf' },
    { emoji: '🐱', description: 'Cat' },
    { emoji: '🐈', description: 'Cat' },
    { emoji: '🐅', description: 'Tiger' },
    { emoji: '🐆', description: 'Leopard' },
    { emoji: '🦓', description: 'Zebra' },
    { emoji: '🦒', description: 'Giraffe' },
    { emoji: '🐘', description: 'Elephant' },
    { emoji: '🦏', description: 'Rhinoceros' },
    { emoji: '🦛', description: 'Hippopotamus' },
    { emoji: '🐪', description: 'Camel' },
    { emoji: '🐫', description: 'Two-Hump Camel' },
    { emoji: '🐄', description: 'Cow' },
    { emoji: '🐖', description: 'Pig' },
    { emoji: '🐏', description: 'Ram' },
    { emoji: '🐑', description: 'Sheep' },
    { emoji: '🐕‍🦺', description: 'Service Dog' },
    { emoji: '🐩', description: 'Poodle' },
    { emoji: '🦮', description: 'Guide Dog' },
    { emoji: '🐦', description: 'Bird' },
    { emoji: '🐤', description: 'Baby Chick' },
    { emoji: '🐣', description: 'Hatching Chick' },
    { emoji: '🐥', description: 'Chick' },
    { emoji: '🐧', description: 'Penguin' },
    { emoji: '🦅', description: 'Eagle' },
    { emoji: '🦉', description: 'Owl' },
    { emoji: '🦤', description: 'Dodo Bird' },
    { emoji: '🐦', description: 'Bird' },
    { emoji: '🦋', description: 'Butterfly' },
    { emoji: '🐌', description: 'Snail' },
    { emoji: '🐜', description: 'Ant' },
    { emoji: '🐝', description: 'Honeybee' },
    { emoji: '🦟', description: 'Mosquito' },
    { emoji: '🕷️', description: 'Spider' },
    { emoji: '🦗', description: 'Cricket' },
    { emoji: '🐞', description: 'Ladybug' },
    { emoji: '🦀', description: 'Crab' },
    { emoji: '🦐', description: 'Shrimp' },
    { emoji: '🦑', description: 'Squid' },
    { emoji: '🐠', description: 'Tropical Fish' },
    { emoji: '🐟', description: 'Fish' },
    { emoji: '🐡', description: 'Blowfish' },
    { emoji: '🐬', description: 'Dolphin' },
    { emoji: '🐋', description: 'Whale' },
    { emoji: '🦈', description: 'Shark' },
    { emoji: '🐊', description: 'Crocodile' },
    { emoji: '🐍', description: 'Snake' },
    { emoji: '🦎', description: 'Lizard' },
    { emoji: '🐢', description: 'Turtle' },
    { emoji: '🦅', description: 'Eagle' },
    { emoji: '🦩', description: 'Flamingo' },
    { emoji: '🌳', description: 'Deciduous Tree' },
    { emoji: '🌲', description: 'Evergreen Tree' },
    { emoji: '🌴', description: 'Palm Tree' },
    { emoji: '🌵', description: 'Cactus' },
    { emoji: '🌾', description: 'Sheaf of Rice' },
    { emoji: '🍃', description: 'Leaf Fluttering in Wind' },
    { emoji: '🍂', description: 'Fallen Leaf' },
    { emoji: '🌼', description: 'Blossom' },
    { emoji: '🌸', description: 'Cherry Blossom' },
    { emoji: '🌻', description: 'Sunflower' },
    { emoji: '🌺', description: 'Hibiscus' },
    { emoji: '🌷', description: 'Tulip' },
    { emoji: '🌹', description: 'Rose' },
    { emoji: '🍁', description: 'Maple Leaf' },
    { emoji: '🌎', description: 'Earth Globe Americas' },
    { emoji: '🌍', description: 'Earth Globe Europe-Africa' },
    { emoji: '🌏', description: 'Earth Globe Asia-Australia' },
    { emoji: '🌐', description: 'Globe with Meridians' },
    { emoji: '🌊', description: 'Water Wave' },
    { emoji: '🌅', description: 'Sunrise' },
    { emoji: '🌄', description: 'Sunrise Over Mountains' },
    { emoji: '🌇', description: 'Sunset Over Buildings' },
    { emoji: '🌌', description: 'Milky Way' },
    { emoji: '🌠', description: 'Shooting Star' },
    { emoji: '🌈', description: 'Rainbow' },
    { emoji: '☀️', description: 'Sun' },
    { emoji: '🌙', description: 'Moon' },
    { emoji: '⭐', description: 'Star' },
    { emoji: '⚡', description: 'High Voltage' },
    { emoji: '🔥', description: 'Fire' },
    { emoji: '💧', description: 'Droplet' },
    { emoji: '🌧️', description: 'Cloud with Rain' },
    { emoji: '🌨️', description: 'Cloud with Snow' },
    { emoji: '🌪️', description: 'Tornado' },
    { emoji: '🌫️', description: 'Fog' },
  ];
  
const AnimalAndNature:React.FC=()=> {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
        {emojiList.map((item, index) => (
          <div key={index} className="emoji-card p-4 border rounded text-center bg-light hover-effect">
            <div style={{ display:'flex', alignItems: 'flex-end', height:'15px', width:'15px'  }}>
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
export default AnimalAndNature;