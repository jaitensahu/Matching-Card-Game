import  { useContext } from "react";
import bgImage from "../../assets/backgroundImage.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import grayBanana from "../../assets/bananaGray.png";
import playBtn from "../../assets/playImg.png";
import backImage from "../../assets/backImage.png";
import { useNavigate } from "react-router-dom";
import { myContext, myContextData } from "../Context/Context";
import card01 from "../../assets/pinkCard01.png";
import card02 from "../../assets/blueCard02.png";
import card03 from "../../assets/card03.png";

 
const Instruction = () => {
  let { audio } = useContext<myContextData>(myContext);

  const navigateTo = useNavigate();

  return (
    <div>
      <div className="progressBarContainer">
        <ProgressBar
          className="progressbar"
          animated
          now={0}
          striped
          variant="warning"
        />
        <img src={grayBanana} alt="" />
      </div>
      <div className="backgroundImg">
        <img src={bgImage} alt="" />
      </div>
      <div className="instructionCards">
        <img src={card01} alt="" />
        <img src={card02} alt="" />
        <img src={card03} alt="" />
      </div>
      <img
        className="backImg"
        src={backImage}
        onClick={() => {navigateTo("/3")
        audio?.play();
      }}
        alt=""
      />
      <img
        className="startImg"
        src={playBtn}
        onClick={() => {
          navigateTo("/play");
          audio?.play();
        }}
        alt=""
      />
    </div>
  );
};

export default Instruction;
