import { useContext, useEffect } from "react";
import bgImage from "../../assets/backgroundImage.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import backImage from "../../assets/backImage.png";
import { useNavigate } from "react-router-dom";
import pinkCard from "../../assets/pinkCard.png";
import blueCard from "../../assets/blueCard.png";
import data from "./data.json";
import alphabets from "./alphabet.json";
import "./Play.css";
import ShowMatchMsg from "../showMatchMessage/ShowMatchMsg";
import ShowScore from "../ShowScoreComponent/ShowScore";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { myContext } from "../Context/Context";

// Defining type of all the states
interface PlayProps {
  score: number;
  shuffleArray: Function;
  pinkCardClickHandler: Function;
  isClicked: boolean[];
  setFruitArr: Function;
  fruitArr: any[];
  alphabetArr: any[];
  setAlphabetArr: Function;
  isAlphabetClicked: boolean[];
  blueCardClickHandler: Function;
  isMatched: boolean;
  setIsMatched: Function;
  isShowScore: boolean;
  lives: number;
  setIsShowScore: Function;
  setLive: Function;
  winningMusic: any;
  isHideCardContainer: boolean;
  reset: Function;
  loseAudio: any;
  audio: any;
}
const Play = () => {
  // Getting States From Context
  const {
    score,
    shuffleArray,
    pinkCardClickHandler,
    isClicked,
    setFruitArr,
    fruitArr,
    alphabetArr,
    setAlphabetArr,
    isAlphabetClicked,
    blueCardClickHandler,
    isMatched,
    setIsMatched,
    isShowScore,
    lives,
    setIsShowScore,
    winningMusic,
    isHideCardContainer,
    reset,
    loseAudio,
    audio
  } = useContext<PlayProps>(myContext);


  // Shuffle The Array Data whenever isShowScore gets updated 
  useEffect(() => {
    let shuffledData = shuffleArray(data);
    let shuffledAlphabet = shuffleArray(alphabets);
    setFruitArr([...shuffledData]);
    setAlphabetArr([...shuffledAlphabet]);
  }, [isShowScore]);

  // Resets on Mounting
  useEffect(() => {
    reset();
  }, []);

  // sets the isMatched state to false after 2s 
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsMatched(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [isMatched]);


// OnChange of lives state variable will check if Live == 0 change ShowScore state to True
  useEffect(() => {
    if (lives == 0) {
      setTimeout(() => {
        setIsShowScore(true);
        // will play winning or losing music 
        if (score < 3) {
          loseAudio.play();
        } else {
          winningMusic.play();
        }
      }, 900);
    }
  }, [lives])

  // Custom Heart Icons which are used as Lives
  const Heart = (
    <path
      d="M433.5,67c-25.3-25.3-59-39.3-94.8-39.3s-69.6,14-94.9,39.4l-7.3,7.3l-7.5-7.5
    c-25.4-25.4-59.1-39.4-95-39.4c-35.8,0-69.4,13.9-94.7,39.3C13.9,92.2,0,125.9,0,161.7s14,69.5,39.4,94.8l182.7,182.7
    c3.8,3.8,9,6,14.5,6c5.4,0,10.6-2.2,14.5-6l182.2-182.4c25.4-25.4,39.3-59.1,39.4-94.9S458.8,92.4,433.5,67z M132.5,117.2
    c-23.9,0-43.4,19.5-43.4,43.4c0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-45.8,37.3-83.1,83.1-83.1c11,0,19.9,8.9,19.9,19.9
    C152.4,108.4,143.5,117.2,132.5,117.2z"
    />
  );
  const customStyles = {
    itemShapes: Heart,
    activeFillColor: "white",
    activeBoxColor: "#EC4899",
    inactiveFillColor: "white",
    inactiveBoxColor: "#FBCFE8",
  };
// -----------Custom Heart Ends Here--------------

  const navigateTo = useNavigate();
  return (
    <div>
      <div className="ratingContainer">
        <Rating
          style={{ maxWidth: 180 }}
          value={lives}
          itemStyles={customStyles}
          radius="medium"
          spaceInside="large"
          spaceBetween="small"
          readOnly
        />
      </div>
      <div className="progressBarContainer">
        <ProgressBar
          className="progressbar"
          animated
          now={score * 16.5}
          striped
          variant="warning"
        />
        <img id="coloredBanana" src="src\assets\banana.png" alt="" />
      </div>
      <div className="backgroundImg">
        <img src={bgImage} alt="" />
      </div>
      <div
        className="cardContainer "
        style={{ display: isHideCardContainer ? "none" : "" }}
      >
        <div className="allPinkCards">
          {fruitArr.map((ele, idx) => {
            return (
              <div
                key={"axy" + idx}
                onClick={() => pinkCardClickHandler(idx, ele.id)}
                className={`flip-card-inner`}
                style={{
                  transform: isClicked[idx]
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
                  visibility: ele.shouldVisible ? "visible" : "hidden",
                }}
              >
                <img className="flip-card-front" src={pinkCard} alt="" />

                <div className="flip-card-back">
                  <div className="flip-card-back-sub red">
                    <img src={ele.fruit} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="allBlueCards">
          {alphabetArr.map((ele, idx) => {
            return (
              <div
                key={"aaxy" + idx}
                onClick={() => blueCardClickHandler(idx, ele.id)}
                className={`flip-card-inner `}
                style={{
                  transform: isAlphabetClicked[idx]
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
                  visibility: ele.shouldVisible ? "visible" : "hidden",
                }}
              >
                <img className="flip-card-front" src={blueCard} alt="" />

                <div className="flip-card-back">
                  <div className="flip-card-back-sub">
                    <img src={ele.alphabet} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <img
        className="backImg"
        src={backImage}
        onClick={() => {
          navigateTo("/instructions")
          audio.play()
        }}
        alt=""
      />
      {isMatched ? (
        <ShowMatchMsg value={"-15%"} />
      ) : (
        <ShowMatchMsg value={"-100%"} />
      )}
      {isShowScore ? <ShowScore /> : null}
    </div>
  );
};

export default Play;
