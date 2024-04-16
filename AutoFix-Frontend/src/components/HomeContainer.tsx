import { Link } from "react-router-dom";
import { RightArrowIcon, Toyota, Ford, Hyundai, Honda } from "../assets/Icons";

export function HomeContainer() {
  return (
    <div className="home-container">
      <div className="cars-general"></div>
      <div className="stats-general">
        <div className="stats-general-text">
          <div>
            <span>Repair statistics</span> <br />
            On goning: <br />
            Completed:
          </div>
          <div>
            <Link to={"/"}>
              View all repairs <RightArrowIcon />
            </Link>
          </div>
        </div>
        <div className="stats-general-img">
          <img src="../src/assets/imgs/leaves2.jpg" alt="" />
        </div>
      </div>
      <div className="top-brands-section">
        <div className="flex-row">
          <span>
            Top brands
            <Link to={"/"}>
              View all
              <RightArrowIcon />
            </Link>
          </span>
        </div>
        <div className="top-brands-icons">
          <div className="brands-icons">
            <Toyota />
            <span>TOYOTA</span>
          </div>
          <div className="brands-icons">
            <Ford />
            <span>FORD</span>
          </div>
          <div className="brands-icons">
            <Honda />
            HONDA
          </div>
          <div className="brands-icons">
            <Hyundai />
            HYUNDAI
          </div>
        </div>
      </div>
    </div>
  );
}
