import Main from "@/app/apps/daf/components/main/main";
import Description from "@/app/apps/daf/components/description/description";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delayed Auditory Feedback (DAF) - Терапия заикания | LogoAdult",
  description:
    "Delayed Auditory Feedback (DAF) - техника терапии заикания. Android и веб (онлайн) прилжожения, реализующие технику DAF",
  keywords: [
    "DAF",
    "Delayed Auditory Feedback",
    "Android",
    "онлайн",
    "техника отложенной слуховой обратной связи",
  ],
};

export default function Page() {
  return (
    <>
      <Main />
      <Description />
    </>
  );
}
