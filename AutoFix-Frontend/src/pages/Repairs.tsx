import { SideBar } from "../components/SiderBar";
import { Header } from "../components/Header";
import { RepairsContainer } from "../components/RepairsContainer";

export function Repairs() {
  return (
    <>
      <div className="repairs">
        <SideBar />
        <Header />
        <RepairsContainer />
      </div>
    </>
  );
}
