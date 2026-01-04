"use client";

import useScrollToSection from "@/utils/useScrollToSection";
import Main from "@/app/(main)/components/main/main";
import WorkAreas from "@/app/(main)/components/work-areas/work-areas";
import Advantages from "@/app/(main)/components/advantages/advantages";
import Feedbacks from "@/app/(main)/components/feedbacks/feedbacks";
import Prices from "@/app/(main)/components/prices/prices";
import Callback from "@/app/(main)/components/callback/callback";
import Questions from "@/app/(main)/components/questions/questions";
import About from "@/app/(main)/components/about/about";
import SeoText from "@/app/(main)/components/seo-text/seo-text";
import Apps from "@/app/(main)/components/apps/apps";

export default function Page() {
  useScrollToSection();

  return (
    <>
      <Main />
      <WorkAreas />
      <Advantages />
      <Feedbacks />
      <Prices />
      <Callback />
      <Questions />
      <Apps />
      <About />
      <SeoText />
    </>
  );
}
