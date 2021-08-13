Пример вызова виджета

```js

const settings = {
  important: false,        // default
  critical: false,         // default
  iconWellGroup: false,    // default
  stateHover: false,       // default
  stateHoverGroup: false,  // default
  showUnwatchWell: false   // default
}

// такой же тип как и при передачи settings
const onChangeSettings = (settings) => {}

// Событие при нажатие на кнопку "На весь экран"
const toggleFullScreen = () => {}

<AppMap settings={settings} onChangeSettings={onChangeSettings} toggleFullScreen={toggleFullScreen}>
  // сюда вставить карту
</AppMap>

```