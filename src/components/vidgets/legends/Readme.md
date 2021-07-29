Пример вызова виджета

```js

const data = [
  {
    title: 'Режим работы на скважине',
    count: 3,
    childrens: [
      {
        title: 'Ведется наблюдение',
        color: '#006c42'
      }
    ]
  },
  {
    title: 'События на скважине',
    count: 4,
    childrens: [
      {
        title: 'Критическое событие',
        color: '#e02a27'
      }
    ]
  }
]

<AppLegends data={data} />

```