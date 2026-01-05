import Main from "@/app/apps/faf/components/main/main";
import Description from "@/app/apps/faf/components/description/description";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequency-Altered Auditory Feedback (FAF) - Терапия заикания | LogoAdult",
  description:
    "Frequency-Altered Auditory Feedback (FAF) - техника терапии заикания. Android и веб (онлайн) прилжожения, реализующие технику FAF",
  keywords: [
    "FAF",
    "Frequency-Altered Auditory Feedback",
    "Android",
    "онлайн",
    "техника измененной слуховой обратной связи",
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
