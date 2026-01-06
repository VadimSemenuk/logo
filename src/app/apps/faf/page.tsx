import Main from "@/app/apps/faf/components/main/main";
import Description from "@/app/apps/faf/components/description/description";
import { Metadata } from "next";

const title = "Frequency-Altered Auditory Feedback (FAF) - Терапия заикания | LogoAdult";
const description =
  "Frequency-Altered Auditory Feedback (FAF) - техника терапии заикания. Android и веб (онлайн) прилжожения, реализующие технику FAF";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "FAF",
    "Frequency-Altered Auditory Feedback",
    "Android",
    "онлайн",
    "техника измененной слуховой обратной связи",
  ],
  openGraph: {
    type: "website",
    title,
    description,
    emails: ["babanovamaya@yandex.by"],
    phoneNumbers: ["%2B375445931003"],
    siteName: "Logo Adult",
    images: "https://www.logoadult.by/img/app_icon.svg",
    url: "https://www.logoadult.by/apps/faf",
  },
  alternates: {
    canonical: "https://www.logoadult.by/apps/faf",
  },
};

export default function Page() {
  return (
    <>
      <Main />
      <Description />
    </>
  );
}
