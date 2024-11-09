import React, { useState } from 'react';
import SmileyAndEmotions from './DynamicGrid/SmileyAndEmotions';
import PeopleAndBody from './DynamicGrid/PeopleAndBody';
import AnimalAndNature from './DynamicGrid/AnimalAndNature';
import FoodAndDrink from './DynamicGrid/FoodAndDrink';
import TravelAndPlaces from './DynamicGrid/TravelAndPlaces';
import Flags from './DynamicGrid/Flags';
import Activities from './DynamicGrid/Activities';
import Objects from './DynamicGrid/Objects';
import Symbol from './DynamicGrid/Symbol';
import About from './About/About';
import AllEmoji from './DynamicGrid/AllEmoji';
import Favourite from './DynamicGrid/Favourite';

const MainContent:React.FC=()=> {
  // State to keep track of the active item
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Function to handle the click and set the active item
  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="row">
        <div className="col-2">
          <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-3 border-end">
            <h3 style={{ margin: '20px', fontSize: '22px' }}>Categories</h3>
            <nav className="nav nav-pills flex-column">
            <a className="nav-link" href="#item-0" onClick={() => handleItemClick('item-0')}>All Emoji</a>
              <a className="nav-link" href="#item-1" onClick={() => handleItemClick('item-1')}>Smiley & Emotions</a>
              <a className="nav-link" href="#item-2" onClick={() => handleItemClick('item-2')}>People & Body</a>
              <a className="nav-link" href="#item-3" onClick={() => handleItemClick('item-3')}>Animal & Nature</a>
              <a className="nav-link" href="#item-4" onClick={() => handleItemClick('item-4')}>Food & Drink</a>
              <a className="nav-link" href="#item-5" onClick={() => handleItemClick('item-5')}>Activities</a>
              <a className="nav-link" href="#item-6" onClick={() => handleItemClick('item-6')}>Travel & Places</a>
              <a className="nav-link" href="#item-7" onClick={() => handleItemClick('item-7')}>Objects</a>
              <a className="nav-link" href="#item-8" onClick={() => handleItemClick('item-8')}>Symbols</a>
              <a className="nav-link" href="#item-9" onClick={() => handleItemClick('item-9')}>Flags</a>
              <a className="nav-link" href="#item-10" onClick={() => handleItemClick('item-10')}>Favourite</a>
              <a className="nav-link" href="#item-11" onClick={() => handleItemClick('item-11')}>About</a>
            </nav>
          </nav>
        </div>

        <div className="col-10">
          <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex={0}>
          {activeItem === 'item-0' && (
                <AllEmoji/>          
             
            )}
            {activeItem === 'item-1' && (
                <SmileyAndEmotions/>          
             
            )}
            {activeItem === 'item-2' && (
                <PeopleAndBody/>
            )}
            {activeItem === 'item-3' && (
              <AnimalAndNature/>
            )}
            {activeItem === 'item-4' && (
              <FoodAndDrink/>
            )}
            {activeItem === 'item-5' && (
              <Activities/>
            )}
            {activeItem === 'item-6' && (
              <TravelAndPlaces/>
            )}
            {activeItem === 'item-7' && (
              <Objects/>
            )}
            {activeItem === 'item-8' && (
              <Symbol/>
            )}
            {activeItem === 'item-9' && (
              <Flags/>
            )}
            {activeItem === 'item-10' && (
              <Favourite/>
            )}
            {activeItem === 'item-11' && (
              <About/>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default MainContent;
export{};

// import React, { useState } from 'react';
// import SmileyAndEmotions from './DynamicGrid/SmileyAndEmotions';
// import PeopleAndBody from './DynamicGrid/PeopleAndBody';
// import AnimalAndNature from './DynamicGrid/AnimalAndNature';
// import FoodAndDrink from './DynamicGrid/FoodAndDrink';
// import TravelAndPlaces from './DynamicGrid/TravelAndPlaces';
// import Flags from './DynamicGrid/Flags';
// import Activities from './DynamicGrid/Activities';
// import Objects from './DynamicGrid/Objects';
// import Symbol from './DynamicGrid/Symbol';
// import About from './About/About';
// import AllEmoji from './AllEmoji/AllEmoji'; // Corrected path
// // Import your all emoji display component

// const MainContent: React.FC = () => {
//   // State to keep track of the active item
//   const [activeItem, setActiveItem] = useState<string | null>(null);

//   // Function to handle the click and set the active item
//   const handleItemClick = (item: string) => {
//     setActiveItem(item);
//   };

//   return (
//     <>
//       <div className="row">
//         <div className="col-2">
//           <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-3 border-end">
//             <h3 style={{ margin: '20px', fontSize: '22px' }}>Categories</h3>
//             <nav className="nav nav-pills flex-column">
//             <a className="nav-link" href="#item-0" onClick={() => handleItemClick('item-1')}>All Emoji</a>
//               <a className="nav-link" href="#item-1" onClick={() => handleItemClick('item-1')}>Smiley & Emotions</a>
//               <a className="nav-link" href="#item-2" onClick={() => handleItemClick('item-2')}>People & Body</a>
//               <a className="nav-link" href="#item-3" onClick={() => handleItemClick('item-3')}>Animal & Nature</a>
//               <a className="nav-link" href="#item-4" onClick={() => handleItemClick('item-4')}>Food & Drink</a>
//               <a className="nav-link" href="#item-5" onClick={() => handleItemClick('item-5')}>Activities</a>
//               <a className="nav-link" href="#item-6" onClick={() => handleItemClick('item-6')}>Travel & Places</a>
//               <a className="nav-link" href="#item-7" onClick={() => handleItemClick('item-7')}>Objects</a>
//               <a className="nav-link" href="#item-8" onClick={() => handleItemClick('item-8')}>Symbols</a>
//               <a className="nav-link" href="#item-9" onClick={() => handleItemClick('item-9')}>Flags</a>
//               <a className="nav-link" href="#item-10" onClick={() => handleItemClick('item-10')}>Favourite</a>
//               <a className="nav-link" href="#item-11" onClick={() => handleItemClick('item-11')}>About</a>
//             </nav>
//           </nav>
//         </div>

//         <div className="col-10">
//           <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex={0}>
//             {/* Default content when no item is selected */}
//             {activeItem === null && <AllEmoji />}

//             {activeItem === 'item-1' && <SmileyAndEmotions />}
//             {activeItem === 'item-2' && <PeopleAndBody />}
//             {activeItem === 'item-3' && <AnimalAndNature />}
//             {activeItem === 'item-4' && <FoodAndDrink />}
//             {activeItem === 'item-5' && <Activities />}
//             {activeItem === 'item-6' && <TravelAndPlaces />}
//             {activeItem === 'item-7' && <Objects />}
//             {activeItem === 'item-8' && <Symbol />}
//             {activeItem === 'item-9' && <Flags />}
//             {activeItem === 'item-10' && (
//               <div id="item-10">
//                 <h4>Favourite</h4>
//                 <p>Content for Favourite...</p>
//               </div>
//             )}
//             {activeItem === 'item-11' && <About />}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MainContent;
