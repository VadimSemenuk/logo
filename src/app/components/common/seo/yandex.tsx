import Script from 'next/script';

interface YandexMetrika {
  ym(metrikaId: number, action: string, actionId: string): void;
}

const counterId = 103798737;

export function Yandex() {
  return (
    <Script
      id="yandex-metrika"
      dangerouslySetInnerHTML={{
        __html: `
          (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103798737', 'ym');
      
          ym(${counterId}, 'init', {ssr:true, webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
<!--        <noscript><div><img src="https://mc.yandex.ru/watch/103798737" style="position:absolute; left:-9999px;" alt="" /></div></noscript>-->
        `,
      }}
    />
  );
}

export const sendYandexEvent = (action: string, goalId: string) => {
  try {
    (window as never as YandexMetrika).ym(counterId, action, goalId)
  } catch(err) {
    console.log(err);
  }
}