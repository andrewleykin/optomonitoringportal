Пример вызова виджета

```js

const data = {
  title: 'ПАО “ГАЗПРОМ” — ООО "Газпромнефть-Ямал" — Новопортовское НКГМ — Куст №9 —',
  well: 'Скважина №2066',
  color: '#e02a27',
  warning: 'Внимание! Возможна негерметичность эксплутационной колонны',
  events: [
    {
      title: 'Состояние скважины:',
      color: '#e02a27',
      value: 'В работе'
    },
    {
      title: 'Состояние системы:',
      color: '#fddb2a',
      value: 'Под наблюдением'
    },
    {
      title: 'Датчик DAS:',
      color: '#006c42',
      value: 'Нет связи (21.06.2021  14:20)'
    },
    {
      title: 'Датчик DTS:',
      color: '#006c42',
      value: 'Нет связи 21.06.2021  14:20)'
    },
    {
      title: 'Датчик давления:',
      color: '#e02a27',
      value: 'Нет связи (21.06.2021  14:20)'
    }
  ]
}

// Событие при нажатие на кнопку "Открыть"
const onOpen = () => {}

// Событие при нажатие на кнопку "X"
const onClose = () => {}

<AppMapBlock data={data} onOpen={onOpen} onClose={onClose} />

```