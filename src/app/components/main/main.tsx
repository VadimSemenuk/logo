import styles from "./main.module.css";
import Contacts from "@/app/components/common/contacts/contacts";
import Image from "next/image";

export default function Main() {
  return (
    <div
      id='main'
      className={styles.main}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'var(--page-height)',
        maxWidth: 'var(--page-width)',
        margin: 'auto',
        padding: 'var(--page-padding)',
        scrollMarginTop: 'var(--header-height)',
      }}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.titleWrapper}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Image
              className={styles.logo}
              style={{
                width: '150px',
                height: "auto",
                borderRadius: '100px',
                objectFit: 'cover',
                marginTop: "-30px"
              }}
              src="/logo.png"
              alt="logo"
              width={0}
              height={0}
            />

            <h1
              style={{
                textAlign: 'center',
                fontSize: '44px',
              }}
            >
              Логопед для взрослых
            </h1>

            <span
              style={{
                fontSize: '44px',
                color: '#c28c45',
                textAlign: 'center',
              }}
            >
              Майя Бабанова
            </span>

            <span
              style={{
                fontSize: '36px',
                fontFamily: 'var(--font-great-vibes)',
                color: "#575757",
                marginTop: '30px',
                textAlign: 'center',
              }}
            >
              С любовью к слову и человеку
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              flexShrink: 0,
              gap: 20
            }}
          >
            {/*<span style={{ fontSize: '18px' }}>Контакты</span>*/}

            <Contacts />
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            loading="eager"
            rel="preload"
            src="/main.webp"
            alt="Логопед для взрослых"
            width={0}
            height={0}
            // sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
