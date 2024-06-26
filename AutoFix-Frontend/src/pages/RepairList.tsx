import { Header } from "../components/Header";
import { RepairListContainer } from "../components/RepairListContainer";
import { SideBar } from "../components/SiderBar";

export function RepairList() {
  return (
    <>
      <div className="repairlist">
        <SideBar />
        <Header />
        <RepairListContainer />
      </div>
    </>
  );
}
