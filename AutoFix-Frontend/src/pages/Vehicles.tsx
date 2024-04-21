import { Header } from "../components/Header";
import { SideBar } from "../components/SiderBar";
import { VehicleContainer } from "../components/VehicleContainer";

export default function Home() {
  return (
    <>
      <div className="vehicle">
        <SideBar />
        <Header />
        <VehicleContainer />
      </div>
    </>
  );
}
