import  { useContext } from "react";
import bgImage from "../../assets/backgroundImage.png";
import monkeyImg from "../../assets/monkeyImg.png";
import popUpmessageBg from "../../assets/popUpmessageBg.png";
import startImg from "../../assets/startImg.png";
import { myContext, myContextData } from "../Context/Context";
import { useNavigate } from "react-router-dom";
 
const IntroPage = () => {
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
          <h4 className=" message">Welcome Kiddo!</h4>
        </div>
      </div>
      <img
        className="startImg"
        src={startImg}
        onClick={() => {
          navigateTo("/2");
          audio?.play();
        }}
        alt=""
      />
    </div>
  );
};

export default IntroPage;
