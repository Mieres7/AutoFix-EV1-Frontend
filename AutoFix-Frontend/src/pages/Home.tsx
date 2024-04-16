import { Header } from "../components/Header";
import { HomeContainer } from "../components/HomeContainer";
import { SideBar } from "../components/SiderBar";

export default function Home() {
  return (
    <>
      <div className="home">
        <SideBar />
        <Header />
        <HomeContainer />
      </div>
    </>
  );
}
