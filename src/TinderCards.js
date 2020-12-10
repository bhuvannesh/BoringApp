import React,{ useState } from 'react'
import "./TinderCards.css";
import TinderCard from "react-tinder-card";


function TinderCards() {
 const [people, setPeople] = useState([
     {
        name: "Elon Musk",
        url: "https://static-ssl.businessinsider.com/image/5c82c90d2628983d9870df08-2400/elon-musk-spacex-crew-dragon-demo-1-nasa-commercial-spaceship-mission-march-2-2019-dave-mosher-business-insider-dcm1036.jpg",
     },
     {
         name: "Jeff Bezzzox",
         url: "https://www.irishtimes.com/polopoly_fs/1.2326040.1440346304!/image/image.jpg_gen/derivatives/box_300_160/image.jpg",
     },
]);
  const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
      //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name+ " left the screen");
  };
  
    return (
        <div className ="TinderCards">
            <div className="tinderCards_cardContainer">
            {people.map((person) => (
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={()  => outOfFrame(person.name)}
            >
           <div
           style={{ backgroundImage: `url(${person.url})` }}
           className="card"
           >
               <h3>{person.name}</h3>

           </div>

            </TinderCard>
           ))}
            </div>
       </div>
    );
}

export default TinderCards
