import { Link } from "react-router-dom";
import {
  RightArrowIcon,
  Toyota,
  Ford,
  Hyundai,
  Honda,
  ToolIcon,
  TruckIcon,
} from "../assets/Icons";

export function HomeContainer() {
  return (
    <div className="home-container">
      <div className="cars-general">
        <div className="cars-general-text">
          <div>
            <span>Services</span> <br />
          </div>
          <div className="car-toolbar">
            <div className="car-toolbar-item">
              <Link to={"/vehicles"}>
                <TruckIcon /> Add Vehicle
              </Link>
            </div>
            <div className="car-toolbar-item">
              <Link to={"/repairs"}>
                <ToolIcon />
                Add Repair
              </Link>
            </div>
          </div>
        </div>
        <div className="cars-general-img">
          <img src="../src/assets/imgs/natu.jpg" alt="" />
        </div>
      </div>
      <div className="stats-general">
        <div className="stats-general-text">
          <div>
            <span>Repair statistics</span> <br />
            On goning: <br />
            Completed:
          </div>
          <div>
            <Link to={"/repairs"}>
              View all repairs <RightArrowIcon />
            </Link>
          </div>
        </div>
        <div className="stats-general-img">
          <img src="../src/assets/imgs/leaves2.jpg" alt="" />
        </div>
      </div>
      <div className="top-brands-section">
        <div>
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
