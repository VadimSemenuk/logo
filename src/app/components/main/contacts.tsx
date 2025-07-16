export default function Contacts() {

  const contacts = [
    {
      link: 'https://www.instagram.com/logo_adult',
      image: '/social/instagram.svg',
      description: 'instagram',
    },
    {
      link: 'https://t.me/maya_babanova',
      image: '/social/telegram.svg',
      description: 'telegram',
    },
    {
      link: 'viber://chat?number=%2B375445931003',
      image: '/social/viber.svg',
      description: 'viber',
    },
    {
      link: 'mailto:maya_babanova@yandex.by',
      image: '/social/email.svg',
      description: 'email',
    }
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
      }}
    >
      <span
        style={{
          fontSize: '18px',
          fontWeight: '500',
        }}
      >Контакты</span>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          width: '100%',
        }}
      >
        {
          contacts.map(contact => (
            <a
              key={contact.link}
              href={contact.link}
            >
              <img
                style={{
                  width: '28px',
                }}
                src={contact.image}
                alt={contact.description}/>
            </a>
          ))
        }
      </div>
    </div>
  );
}
