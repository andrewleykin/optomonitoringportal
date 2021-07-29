import React, { useState } from 'react';
import useLocalStorage from 'react-use-localstorage';
import AppBlock from '../../ui/block';
import AppCheckbox from '../../ui/checkbox';
import AppFormRow from '../../ui/formRow';
import AppCollapse from '../../ui/collapse';
import './index.css';

const AppLegends = ({data}) => {
  const [localIsOpenTree, setLocalIsOpenTree] = useLocalStorage('legends.isOpenTree', "false");
  const [settings, setSettings] = useState({
    count: false,
    isOpenTree: localIsOpenTree === "true",
  })
  const [editSettings, setEditSettings] = useState(settings)

  const changeSettings = (key, show) => {
    if (key === 'isOpenTree') {
      setLocalIsOpenTree(show)
    }
    setEditSettings({
      ...editSettings,
      [key]: show
    })
  }

  const openModal = () => {
    setEditSettings(settings)
  }

  const confirmModal = () => {
    setSettings(editSettings)
  }

  const AppLegendItem = ({title, count, children}) => {
    return (
      <AppCollapse 
        title={title} 
        count={count} 
        isShowCount={settings.count}
        isOpen={settings.isOpenTree}
      >
        {children}
      </AppCollapse>
    )
  }

  const modalContent = (
    <>
      <AppFormRow>
        <AppCheckbox value={editSettings.count} onChange={value => changeSettings('count', value)} label="Отображать количество событий в дереве" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.isOpenTree} onChange={value => changeSettings('isOpenTree', value)} label="Всегда отображать развернутое дерево при следующем заходе" />
      </AppFormRow>
    </>
  )

  return (
    <AppBlock 
      title="Виджет с легендой" 
      modalTitle="Настройка виджета с легендой"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
      isHorizontalCollapse
    >
      <div className="app-legend">
        {data.map((item, index) => (
          <AppLegendItem 
            key={index}
            title={item.title} 
            count={item.count}
          >
            {item.childrens.map((children, ind) => (
              <div key={`${index}.${ind}`} className="app-legend__item">
                <span className="app-legend__badge" style={{backgroundColor: children.color}}></span>
                {children.title}
              </div>
            ))}
          </AppLegendItem>
        ))}
      </div>
    </AppBlock>
  );
}

export default AppLegends;
