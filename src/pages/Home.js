import React from "react";
import HomeNav from "../components/HomeComponents/HomeNav";
import HomeCarouselTop from "../components/HomeComponents/HomeCarouselTop";
import TextBreakHome from "../components/HomeComponents/TextBreakHome";
import TheChallenges from "../components/HomeComponents/TheChallenges";
import Icons from "../components/HomeComponents/Icons";
import SplitComponent from "../components/HomeComponents/SplitComponent";
import HomePic from "../components/HomeComponents/HomePic";
import TechEarth from "../components/HomeComponents/TechEarth";
import HomeFooter from "../components/HomeComponents/HomeFooter";

export default function Home() {
  return (
    <div>
      <HomeNav />
      <HomeCarouselTop />
      <TextBreakHome />
      <TheChallenges />
      <SplitComponent />
      <Icons />
      <HomePic />
      <TechEarth />
      <HomeFooter />
    </div>
  );
}
