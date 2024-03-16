import  { useContext} from "react";
import bgImage from "../../assets/backgroundImage.png";
import monkeyImg from "../../assets/happyMonkey.png";
import popUpmessageBg from "../../assets/popUpmessageBg.png";
import yesBtn from "../../assets/YesImg.png";
import backImage from "../../assets/backImage.png";
import grayBanana from "../../assets/bananaGray.png";
import { myContext, myContextData } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

 
const IntroPage3 = () => {
// Getting audio from context
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
      <div className="monkeyContainer">
        <img className="monkeyImg" src={monkeyImg} alt="" />
        <div className="messageContainer ">
          <img src={popUpmessageBg} className="popUpMessageBg" alt="" />
          <h4 className=" message">Can you help me get some? 🤔</h4>
        </div>
      </div>
      <img
        className="backImg"
        src={backImage}
        onClick={() => {navigateTo("/2")
        audio?.play();
      }}
        alt=""
      />

      <img
        className="startImg"
        src={yesBtn}
        onClick={() => {
          navigateTo("/instructions");
          audio?.play();
        }}
        alt=""
      />
    </div>
  );
};

export default IntroPage3;
