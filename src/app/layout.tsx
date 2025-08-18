import type { Metadata } from "next";
import {Inter, Montserrat} from "next/font/google";
import "./globals.css";
import {Yandex} from "@/app/components/common/seo/yandex";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["cyrillic"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic"]
});

export const metadata: Metadata = {
  title: "Логопед для взрослых онлайн и оффлайн в Бресте",
  description: "Индивидуальные занятия. Постановка и коррекция звуков, восстановление речи после инсульта и черепно-мозговой травмы, лечение заикания, ускоренная/замедленная речь, массаж",
  keywords: [
    "Логопед",
    "Логопед для взрослых",
    "Постановка звука",
    "Коррекция звукопроизношения",
    "Восстановление речи после инсульта и черепно-мозговой травмы",
    "Ускоренная/замедленная речь",
    "Заикание",
    "Лечение заикания",
    "Логопедический массаж",
    "Онлайн",
    "Оффлайн",
    "Брест",
    "Беларусь"
  ],
  openGraph: {
    type: "website",
    title: "Логопед для взрослых онлайн и оффлайн в Бресте",
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
  other: {
    "yandex-verification": "8547f13ee7c21131"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
    <body className={`${montserrat.variable} ${inter.variable}`}>
      {children}
    </body>
    <Yandex />
    </html>
  );
}
