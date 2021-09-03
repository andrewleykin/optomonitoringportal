Пример вызова виджета

```js

const data = [
  {
    id: 1,
    variable: 'P (Атм.)',
    value: '25.14',
    threshold: '<25',
    createdUser: 'Щербаков А.В.',
    createdAt: '21.03.2021   14:10',
    comment: 'comment',
    isActive: true,
    color: '#006c42'
  }
]

// Добавление значения
const onAddData = (data) => {
  // Пример объекта который приходит
  // const data = {
  //   comment: "qwe"
  //   deleteAfter: "09/21/2021 12:34"
  //   endDepth: "12"
  //   endWatch: "09/03/2021 12:34"
  //   important: "1"
  //   startDepth: "1"
  //   startWatch: "09/03/2021 12:34"
  //   threshold: "1"
  //   timeInterval: "123"
  //   value: "12"
  // }
}

// Изменение статуса isActive
const onChangeStatus = (status, id) => {
  // status - boolean
}

// Удаление порогового значенния
const onDeleteData = (id) => {}

const settings = {
  showMyThreshold: false, // default
  showAllCrit: false,     // defaul
  emailNotif: false,      // defaul
  emails: '',             // defaul
  telegramNotif: false,   // defaul
  phones: ''              // default
}

// такой же тип как и при передачи settings
const onChangeSettings = (settings) => {}

<AppThreshold data={data} settings={settings} onChangeSettings={onChangeSettings} onAddData={onAddData} onChangeStatus={onChangeStatus} onDeleteData={onDeleteData} />

```