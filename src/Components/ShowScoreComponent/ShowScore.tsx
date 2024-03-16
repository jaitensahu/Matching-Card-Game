import { useContext } from "react";
import reward from "../../assets/reward.png";
import restart from "../../assets/restart.png";
import "../Game/Play.css";
import head from "../../assets/Head.png";
import body from "../../assets/Body2.png";
import sad from '../../assets/sad.png'
import { myContext } from "../Context/Context";

interface MyContextType {
    score: number;
    reset: () => void;
}
const ShowScore = () => {
  // Getting States from context
    let { score, reset } = useContext<MyContextType>(myContext);

  return (
    <div className="reward">
      <img src={reward} alt="" />
      <div className="monkeyScoreImg">
        <img src={score<3?sad:head} alt="" />
        <img src={body} alt="" />
      </div>
      <h2>{score}</h2>
      <img className="YayOk" src={restart} alt="" onClick={()=>reset()}/>
    </div>
  );
};

export default ShowScore;
