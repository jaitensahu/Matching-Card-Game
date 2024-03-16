import monkeyImg from "../../assets/monkeyImg.png";
import "../Game/Play.css";

const ShowMatchMsg = ({ value }: { value: string }) => {
  return (
    <div className="ShowMatchMsg" style={{ right: `${value}` }}>
      <h2>Its a Match...</h2>
      <img src={monkeyImg} alt="" />
    </div>
  );
};

export default ShowMatchMsg;
