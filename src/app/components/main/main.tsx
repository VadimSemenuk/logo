import styles from "./main.module.css";
import Contacts from "@/app/components/main/contacts";

export default function Main() {
  return (
    <div
      id='main'
      className={styles.main}
      style={{
        height: 'calc(100vh - 100px)',
        display: 'flex',
        gap: '40px',
        flexDirection: 'column',
        justifyContent: 'center',
        scrollMarginTop: '100px',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              border: '6px solid #FFFFFF',
              borderLeft: 'none',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              style={{
                maxHeight: '700px',
                maxWidth: '700px',
              }}
              src="/main.png"
            />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '50%',
            padding: '0 30px',
          }}
        >
        <span
          style={{
            fontSize: '80px',
          }}
        >
          <span style={{ color: 'inherit' }}>Майя</span>
          , логопед для взрослых онлайн и офлайн в Бресте
        </span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100px',
        }}
      >
        <Contacts />
      </div>
    </div>
  );
}
