import React from "react";
import HomeNav from "../components/HomeNav";
import HomeCarouselTop from "../components/HomeCarouselTop";
import TextBreakHome from "../components/TextBreakHome";
import TheChallenges from "../components/TheChallenges";
import Icons from "../components/Icons";
import SplitComponent from "../components/SplitComponent";

export default function Home() {
  return (
    <div>
      <HomeNav />
      <HomeCarouselTop />
      <TextBreakHome />
      <TheChallenges />
      <SplitComponent />
      <Icons />

      {/* <div className="whiteSpace ">
        <Image className="w-100" src={Pic2} />
      </div> */}
    </div>
  );
}
