Пример вызова виджета

```js

const data = {
  date: '21.05.2021 23:00',
  well: {
    status: 'success',
    value: 'В работе'
  },
  system: {
    status: 'success',
    value: 'Под наблюдением'
  },
  das: {
    status: 'success',
    value: '21.05.2021 23:01'
  },
  dts: {
    status: 'warning',
    value: 'нет связи 21.05.2021 23:02'
  },
  pressure: {
    status: 'error',
    value: '21.05.2021 23:03'
  }
}

<AppSensors data={data} />

```