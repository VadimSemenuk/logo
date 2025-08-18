import styles from "./about.module.css";
import Study1 from "../../../../public/img/study/sm/1.webp";
import Study2 from "../../../../public/img/study/sm/2.webp";
import Study3 from "../../../../public/img/study/sm/3.webp";
import Study4 from "../../../../public/img/study/sm/4.webp";
import Study5 from "../../../../public/img/study/sm/5.webp";
import Study6 from "../../../../public/img/study/sm/6.webp";
import Study7 from "../../../../public/img/study/sm/7.webp";
import Study8 from "../../../../public/img/study/sm/8.webp";
import Study9 from "../../../../public/img/study/sm/9.webp";
import Study1Orig from "../../../../public/img/study/bg/1.webp";
import Study2Orig from "../../../../public/img/study/bg/2.webp";
import Study3Orig from "../../../../public/img/study/bg/3.webp";
import Study4Orig from "../../../../public/img/study/bg/4.webp";
import Study5Orig from "../../../../public/img/study/bg/5.webp";
import Study6Orig from "../../../../public/img/study/bg/6.webp";
import Study7Orig from "../../../../public/img/study/bg/7.webp";
import Study8Orig from "../../../../public/img/study/bg/8.webp";
import Study9Orig from "../../../../public/img/study/bg/9.webp";
import Arrow from "@/app/components/common/icons/arrow";
import Image from "next/image";

interface Props {
  onMePageRequest(): void;
}

const studyItems = [
  {
    sm: Study1.src,
    original: Study1Orig.src
  },
  {
    sm: Study2.src,
    original: Study2Orig.src
  },
  {
    sm: Study3.src,
    original: Study3Orig.src
  },
  {
    sm: Study4.src,
    original: Study4Orig.src
  },
  {
    sm: Study5.src,
    original: Study5Orig.src
  },
  {
    sm: Study6.src,
    original: Study6Orig.src
  },
  {
    sm: Study7.src,
    original: Study7Orig.src
  },
  {
    sm: Study8.src,
    original: Study8Orig.src
  },
  {
    sm: Study9.src,
    original: Study9Orig.src
  },
]

export default function Study({ onMePageRequest }: Props) {

  const handleStudyItemClick = (item: string) => {
    window.open(item, "_blank");
  }

  return (
    <div className={styles.study}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
          Мои дипломы и сертификаты
        </h2>

        <div className={styles.openHelp}>Нажмите для увеличения</div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {
            studyItems.map((item, i) => (
              <div
                key={i}
                className={styles.studyItem}
                onClick={() => handleStudyItemClick(item.original)}
              >
                <Image
                  src={item.original}
                  alt="Диплом"
                  width={0}
                  height={0}
                />
              </div>
            ))
          }
        </div>


        <button
          style={{
            marginTop: '40px'
          }}
          onClick={onMePageRequest}
        >
          <span style={{ display: "inline-flex", transform: "rotate(-180deg)" }}><Arrow /></span>
          Обо мне
        </button>
      </div>
    </div>
  );
}
