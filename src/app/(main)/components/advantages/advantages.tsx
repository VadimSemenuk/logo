import styles from "./advantages.module.css"

const advantages = [
  {
    name: "Специализация на взрослых",
    description: "Логопедия для взрослых имеет свои важные особенности, учет которых позволяет сделать наши занятия приятными и эффективными"
  },
  {
    name: "Большой опыт",
    description: "Уже более 4 лет я работаю со взрослыми индивидуально, и за это время получила много опыта с различными случаями. Основываясь на нем, я смогу выстроить эффективный план для быстрейшего достижения положительного результата"
  },
  {
    name: "Подтвержденные результаты",
    description: <span>Наши клиенты достигают реальных и ощутимых результатов и <a href="#feedbacks">делятся</a> своими положительными эмоциями</span>
  },
  {
    name: "Консультации и поддержка",
    description: "Я всегда готова поддержать клиентов в процессе работы, отвечая на вопросы между занятиями, помогая с домашними заданиями и практическими рекомендациями. Я забочусь о том, чтобы результат сохранялся на долгое время, и продолжаю поддерживать контакт с клиентами даже после завершения курса"
  },
]

export default function Advantages() {
  return (
    <div
      id="advantages"
      className={styles.advantages}
    >
      <h2 className={styles.title}>Почему Вам стоит работать со мной?</h2>

      <ul className={styles.advantagesItems}>
        {
          advantages.map((advantage, index) => (
            <li
              key={index}
              className={`${styles.advantageItem} card`}
            >
              <div className={styles.advantageItem_titleWrapper}>
                <span className={styles.advantageItem_title}>{advantage.name}</span>
                <div className={styles.advantageItem_counter}>{index + 1}</div>
              </div>
              <div className={styles.advantageItem_description}>{advantage.description}</div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}