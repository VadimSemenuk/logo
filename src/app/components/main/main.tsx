import styles from "./main.module.css";

export default function Main() {
  return (
    <div
      className={styles.main}
      style={{
        height: "100vh",
        // background: 'antiquewhite',
        // background: 'rgb(237, 211, 181)',
        background: '#E9E3D0',
        display: 'flex',
        gap: 60,
        position: "relative",
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
          gap: '30px'
        }}
      >
        <span
          style={{
            fontSize: '120px',
            fontWeight: '600',
          }}
        >
          Майя, логопед для взрослых оналйн и офлайн в Бресте
        </span>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            width: '100%',
          }}
        >
          <span
            style={{
              fontSize: '30px',
              fontWeight: '600',
            }}
          >Контакты: </span>
          <a
            href="https://www.instagram.com/logo_adult"
            target="_blank"
          >
            <img
              style={{
                width: '30px',
              }}
              src="/social/instagram.svg"
              alt="instagram"/>
          </a>
          <a
            href="https://t.me/maya_babanova"
            target="_blank"
          >
            <img
              style={{
                width: '30px',
              }}
              src="/social/telegram.svg"
              alt="instagram"/>
          </a>
          <a href="viber://chat?number=%2B375445931003">
            <img
              style={{
                width: '30px',
              }}
              src="/social/viber.svg"
              alt="instagram"/>
          </a>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '10px 20px',
          cursor: 'pointer',
        }}
        onClick={() => {
          document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
          return false;
        }}
      >
        <span
          style={{
            fontSize: '30px',
            color: 'white',
            fontWeight: '600',
          }}
        >Подробнее</span>
        <img src="/arrow_downward_alt_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"  />
      </div>
    </div>
  );
}
