import React,{useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({eyeColor, baby}) {
  const[weight, setWeight] = useState(200)
  console.log(weight)

  function handleChangeWeight(e) {
    setWeight(e.target.name === '+'? weight + 10 : weight - 10);
  }
// const eyeImagesArray = [SunBaby, BlueBaby, GlowingBaby];
// const eyeColorRender = eyeImagesArray.filter(eyeImage => {
//   if (eyeImage.includes(eyeColor)) {
//     return true;
//   }
// })
const eyeColorMapper = {
  sun: SunBaby,
  blue: BlueBaby,
  glowing: GlowingBaby,
}



  return (
    <li className="hogbabies">
      <h1>{baby.name}</h1>
      <h3>Weight:{weight}</h3>
      <h3>Hobby:{baby.hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button onClick={handleChangeWeight}name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[eyeColor]}
          style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
