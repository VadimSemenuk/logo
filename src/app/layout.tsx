import type { Metadata } from "next";
import { Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["cyrillic"]
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["cyrillic"]
});

// const montserrat = Rubik({
//   variable: "--font-montserrat",
//   subsets: ["cyrillic"]
// });

export const metadata: Metadata = {
  title: "Логопед для взрослых онлайн и оффлайн | Майя Бабанова",
  description: "Индивидуальные занятия. Постановка и коррекция звуков, восстановление речи после инсульта и черепно-мозговой травмы, лечение заикания, ускоренная/замедленная речь, массаж",
  keywords: [
    "Логопед для взрослых",
    "Постановка звука",
    "Коррекция звукопроизношения",
    "Восстановление речи после инсульта и черепно-мозговой травмы",
    "Ускоренная/замедленная речь",
    "Заикание",
    "Логопедический массаж",
    "Онлайн",
    "Оффлайн",
    "Брест",
    "Беларусь"
  ],
  openGraph: {
    type: "website",
    title: "Логопед для взрослых онлайн и оффлайн | Майя Бабанова",
    description: "Индивидуальные занятия. Постановка и коррекция звуков, восстановление речи после инсульта и черепно-мозговой травмы, лечение заикания, ускоренная/замедленная речь, массаж",
    emails: ["babanovamaya@yandex.by"],
    phoneNumbers: ["%2B375445931003"],
    siteName: "Logo Adult",
    images: "https://www.logoadult.by/main.webp",
    url: "https://www.logoadult.by"
  },
  alternates: {
    canonical: "https://www.logoadult.by"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
    <body className={`${greatVibes.variable} ${montserrat.variable}`}>
      {children}
    </body>
    </html>
  );
}
