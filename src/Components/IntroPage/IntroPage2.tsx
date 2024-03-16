import  { useContext } from "react";
import bgImage from "../../assets/backgroundImage.png";
import monkeyImg from "../../assets/happyMonkey.png";
import popUpmessageBg from "../../assets/popUpmessageBg.png";
import nextBtn from "../../assets/NextImg.png";
import backImage from "../../assets/backImage.png";
import { myContext, myContextData } from "../Context/Context";
import { useNavigate } from "react-router-dom";

 

const IntroPage2 = () => {
  let { audio } = useContext<myContextData>(myContext);
  const navigateTo = useNavigate();

  return (
    <div>
      <div className="backgroundImg">
        <img src={bgImage} alt="" />
      </div>
      <div className="monkeyContainer">
        <img className="monkeyImg" src={monkeyImg} alt="" />
        <div className="messageContainer ">
          <img src={popUpmessageBg} className="popUpMessageBg" alt="" />
          <h4 className=" message">Hi, I am Mizo and I love bananas 🍌</h4>
        </div>
      </div>

      <img
        className="backImg"
        src={backImage}
        onClick={() => {navigateTo("/")
        audio?.play();
      }}
        alt=""
      />

      <img
        className="startImg"
        src={nextBtn}
        onClick={() => {
          navigateTo("/3");
          audio?.play();
        }}
        alt=""
      />
    </div>
  );
};

export default IntroPage2;
