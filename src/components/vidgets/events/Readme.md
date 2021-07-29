Пример вызова виджета

```js

const data = [
  {
    color: '#006c42',
    date: '03.05.2021',
    time: '15:00',
    well: '2096',
    bush: 'куст',
    field: 'месторождение',
    organization: 'организация 1',
    organization_two: 'организация 2',
    event: 'смена чего-то'
  },
  {
    color: '#fddb2a',
    date: '03.05.2021',
    time: '15:00',
    well: '2096',
    bush: 'куст',
    field: 'месторождение',
    organization: 'организация 1',
    organization_two: 'организация 2',
    event: 'смена чего-то'
  }
]

const settings = {
  critical: false,   // default
  important: false,  // default
  date: new Date()   // default
}

// такой же тип как и при передачи settings
const onChangeSettings = (settings) => {}

<AppEvents data={data} settings={settings} onChangeSettings={onChangeSettings}>

```