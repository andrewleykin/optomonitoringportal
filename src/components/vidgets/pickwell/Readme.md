Пример вызова виджета

```js

const data = {
  wells: [
    {
      id: "1",
      title: "ПАО “Газпром нефть”",
      count: "4",
      statuses: ["#006c42", "#43525a", "#fddb2a", "#e02a27"],
      type: "folder",
      link: undefined,
      icon: 'closeFolderImgSrc',
      openIcon: 'openFolderImgSrc',
      childrens: [
        {
          id: "1.1",
          title: "ПАО “Газпромнефть-Хантос”",
          count: "0",
          statuses: ["#006c42", "#fddb2a"],
          type: "folder",
          link: undefined,
          icon: 'closeFolderImgSrc',
          openIcon: 'openFolderImgSrc',
          childrens: [
            {
              id: "1.1.1",
              title: "Новопортовское НГКМ",
              count: "2",
              statuses: ["#006c42", "#43525a"],
              type: "folder",
              link: undefined,
              icon: 'closeFolderImgSrc',
              openIcon: 'openFolderImgSrc',
              childrens: [
                {
                  id: "1.1.1.1",
                  title: "Куст № 7",
                  count: "2",
                  statuses: ["#006c42"],
                  type: "folder",
                  link: undefined,
                  icon: 'closeFolderImgSrc',
                  openIcon: 'openFolderImgSrc',
                  childrens: [
                    {
                      id: "1.1.1.1.1",
                      title: "Скважина 2066",
                      count: undefined,
                      statuses: ["#006c42"],
                      type: "list",
                      link: "#",
                      icon: 'listImgSrc',
                      openIcon: undefined,
                      childrens: []
                    }
                  ]
                },
                {
                  id: "1.1.1.2",
                  title: "Куст № 9",
                  count: undefined,
                  statuses: [],
                  type: "list",
                  link: "#",
                  icon: 'listImgSrc',
                  openIcon: undefined,
                  childrens: []
                }
              ],
            },
            {
              id: "1.1.2",
              title: "Новопортовское НГКМ 2",
              count: "2",
              statuses: ["#006c42", "#43525a"],
              type: "folder",
              link: undefined,
              icon: 'closeFolderImgSrc',
              openIcon: 'openFolderImgSrc',
              childrens: [
                {
                  id: "1.1.2.2",
                  title: "Куст № 9",
                  count: undefined,
                  statuses: [],
                  type: "list",
                  link: "#",
                  icon: 'listImgSrc',
                  openIcon: undefined,
                  childrens: []
                }
              ],
            }
          ],
        }
      ],
    },
    {
      id: "2",
      title: "list in one level",
      count: undefined,
      statuses: [],
      type: "list",
      link: "#",
      icon: 'listImgSrc',
      openIcon: undefined,
      childrens: []
    }
  ]
}

const settings = {
  showUnwatchWell: false // default
}

// такой же тип как и при передачи settings
const onChangeSettings = (settings) => {}

<AppPickWell data={data} settings={settings} onChangeSettings={onChangeSettings} />


interface WellsItem {
  id: string,
  title: string,
  count: number | undefined,
  statuses: string[],
  type: 'list' | 'folder',
  link: string | undefined,
  icon: srtring,
  openIcon: string | undefined,
  childrens: WellsItem[]
}

```