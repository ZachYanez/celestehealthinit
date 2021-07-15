import React from "react";
import HomeNav from "../components/HomeNav";
import HomeCarouselTop from "../components/HomeCarouselTop";
import TextBreakHome from "../components/TextBreakHome";
import TheChallenges from "../components/TheChallenges";
import Icons from "../components/Icons";
import SplitComponent from "../components/SplitComponent";
import HomePic from "../components/HomePic";
import TechEarth from "../components/TechEarth";
import HomeFooter from "../components/HomeFooter";

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
