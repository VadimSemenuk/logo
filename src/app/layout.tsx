import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { Yandex } from "@/components/seo/yandex";

const inter = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic"],
});

const title = "Логопед для взрослых онлайн и оффлайн в Бресте";
const description =
  "Индивидуальные занятия с логопедом. Постановка и коррекция звуков, лечение заикания, восстановление речи после инсульта и черепно-мозговой травмы, логопедический массаж";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Логопед",
    "Логопед для взрослых",
    "Постановка звука",
    "Коррекция звукопроизношения",
    "Восстановление речи после инсульта и черепно-мозговой травмы",
    "Ускоренная/замедленная речь",
    "Заикание",
    "Логопедический массаж",
    "Онлайн",
    "Брест",
  ],
  openGraph: {
    type: "website",
    title,
    description,
    emails: ["babanovamaya@yandex.by"],
    phoneNumbers: ["%2B375445931003"],
    siteName: "Logo Adult",
    images: "https://www.logoadult.by/main.webp",
    url: "https://www.logoadult.by",
  },
  alternates: {
    canonical: "https://www.logoadult.by",
  },
  other: {
    "yandex-verification": "8547f13ee7c21131",
    "zen-verification": "tvWRACgORsdtwK14mtRp9I6k57G3XRCjS47E2WwfVTzIqzuEizp9Tab0HVh6ehBI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable}`}>
        <div className={styles.headerWrapper}>
          <Header />
        </div>

        <main className={styles.contentWrapper}>{children}</main>

        <Footer />
      </body>
      <Yandex />
    </html>
  );
}
