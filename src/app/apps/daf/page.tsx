import Main from "@/app/apps/daf/components/main/main";
import Description from "@/app/apps/daf/components/description/description";
import { Metadata } from "next";

const title = "Delayed Auditory Feedback (DAF) - Терапия заикания | LogoAdult";
const description =
  "Delayed Auditory Feedback (DAF) - техника терапии заикания. Android и веб (онлайн) прилжожения, реализующие технику DAF";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "DAF",
    "Delayed Auditory Feedback",
    "Android",
    "онлайн",
    "техника отложенной слуховой обратной связи",
  ],
  openGraph: {
    type: "website",
    title,
    description,
    emails: ["babanovamaya@yandex.by"],
    phoneNumbers: ["%2B375445931003"],
    siteName: "Logo Adult",
    images: "https://www.logoadult.by/img/app_icon.svg",
    url: "https://www.logoadult.by/apps/daf",
  },
  alternates: {
    canonical: "https://www.logoadult.by/apps/daf",
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
