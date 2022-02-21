Пример вызова виджета

```js

const filter = {
  dateFrom: '', // new Date()
  dateTo: '', // new Date()
  time: 'hour', // 'hour' | 'minutes'
  sensitivity: '',
  upper: ''
}

const onFilter = (filter) => void

<AppFilter onFilter={onFilter} />

```