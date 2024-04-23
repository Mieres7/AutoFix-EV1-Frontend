import { Header } from "../components/Header";
import { ReportsContainer } from "../components/ReportsContainer";
import { SideBar } from "../components/SiderBar";

export function Reports() {
  return (
    <>
      <div className="reports">
        <SideBar />
        <Header />
        <ReportsContainer />
      </div>
    </>
  );
}
