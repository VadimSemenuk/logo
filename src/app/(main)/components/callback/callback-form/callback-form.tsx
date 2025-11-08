import styles from "./callback-form.module.css";
import {FormEvent, useEffect, useState} from "react";
import emailjs from '@emailjs/browser';
import {sendYandexEvent} from "@/components/seo/yandex";
import classNames from "classnames";

interface FormState {
  name: string;
  phone: string;
  message: string;
  privacyPolicyConfirmation: boolean;
}

const defaultFormState = {
  name: "",
  phone: "",
  message: "",
  privacyPolicyConfirmation: true
}

export default function CallbackForm() {

  useEffect(() => {
    emailjs.init({
      publicKey: "5_LvboDu7bpVJOhjH",
    });
  }, [])

  const [formState, setFormState] = useState<FormState>(defaultFormState)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formState.privacyPolicyConfirmation) return;

    setIsLoading(true)

    sendYandexEvent('reachGoal', '1');

    try {
      await emailjs.send(
        'service_2j77bum',
        'template_8m4nd0b',
        {
          name: formState.name,
          phone: formState.phone,
          message: formState.message,
        }
      )
      setIsSuccess(true)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
      setFormState(defaultFormState)
    }
  }

  return (
    <>
      {
        isSuccess === null &&
        <form
          className={classNames(isLoading ? styles.loading : "", styles.callbackForm)}
          onSubmit={handleSubmit}
        >
          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder="Ваше имя"
              name="name"
              required
              disabled={isLoading}
              value={formState.name}
              onChange={(e) => setFormState({...formState, name: e.target.value})}
            />
          </div>

          <div className={styles.inputWrapper}>
            <input
              type="tel"
              placeholder="Телефон для связи, c кодом страны"
              name="phone"
              required
              disabled={isLoading}
              value={formState.phone}
              onChange={(e) => {
                const value = e.target.value;
                const nextValue = value.replace(/[^0-9\+\(\)]/g, '').trim();
                setFormState({...formState, phone: nextValue})
              }}
            />
          </div>

          <div className={styles.inputWrapper}>
            <textarea
              placeholder="Сообщение (не обязательно)"
              name="message"
              disabled={isLoading}
              value={formState.message}
              onChange={(e) => setFormState({...formState, message: e.target.value})}
            />
          </div>

          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              id="privacyPolicyConfirmation"
              name="privacyPolicyConfirmation"
              checked={formState.privacyPolicyConfirmation}
              onChange={(e) => setFormState({...formState, privacyPolicyConfirmation: e.target.checked})}
            />
            <label htmlFor="privacyPolicyConfirmation">
              <span>Я соглашаюсь с &nbsp;</span>
              <a
                className={styles.dataProcessing}
                href="https://docs.google.com/document/d/1e9TWDvQ4PhZ5UTQhBLbYpbZXT-Bt0zu85dMAWtzXlXs/edit?usp=sharing"
                target="_blank"
              >Политикой обработки данных</a>
            </label>
          </div>

          <button
            className="accent"
            type="submit"
            disabled={isLoading || !formState.privacyPolicyConfirmation}
          >Отправить
          </button>
        </form>
      }

      {
        isSuccess === true &&
        <div className={styles.sendSuccess}>
          Ваше сообщение успешно отправлено
        </div>
      }

      {
        isSuccess === false &&
        <div className={styles.sendFailed}>
          Сообщение не отправлено. Повторите попытку позже
        </div>
      }
    </>
  );
}
