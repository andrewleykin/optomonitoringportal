Пример вызова виджета

```js

const data = {
  wells: [
    {
      id: "1",
      title: "ПАО “Газпром нефть”",
      count: "4",
      statuses: ["#006c42", "#43525a", "#fddb2a", "#e02a27"],
      childrens: [
        {
          id: "1.1",
          title: "ПАО “Газпромнефть-Хантос”",
          count: "0",
          statuses: ["#006c42", "#fddb2a"],
          childrens: [
            {
              id: "1.1.1",
              title: "Новопортовское НГКМ",
              count: "2",
              statuses: ["#006c42", "#43525a"],
              childrens: [
                {
                  id: "1.1.1.1",
                  title: "Куст № 7",
                  count: "2",
                  statuses: ["#006c42"],
                  childrens: [
                    {
                      id: "1.1.1.1.1",
                      title: "Скважина 2066",
                      statuses: ["#006c42"],
                    }
                  ]
                },
                {
                  id: "1.1.1.2",
                  title: "Куст № 9",
                  count: "2",
                  statuses: ["#006c42"],
                  childrens: [
                    {
                      id: "1.1.1.2.1",
                      title: "Москва",
                      statuses: ["#006c42"],
                    }
                  ]
                }
              ],
            }
          ],
        }
      ],
    }
  ]
}

const settings = {
  showUnwatchWell: false
}

// такой же тип как и при передачи settings
const onChangeSettings = (settings) => {}

<AppPickWell data={data} settings={settings} onChangeSettings={onChangeSettings}>

```