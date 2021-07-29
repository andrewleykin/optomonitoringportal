import React, { useState, useEffect } from 'react';
import useLocalStorage from 'react-use-localstorage';
import AppBlock from '../../ui/block';
import AppCheckbox from '../../ui/checkbox';
import AppFormRow from '../../ui/formRow';
import {ReactComponent as SearchIcon} from './search.svg';
import './index.css';

const searchTerm = (items, term) => {
  return items.reduce((acc, item) => {
    if (item.title.toLowerCase().indexOf(term.toLowerCase()) >= 0) {
      acc.push(item);
    } else if (item.childrens && item.childrens.length > 0) {
      let newItems = searchTerm(item.childrens, term);
      if (newItems && newItems.length > 0) {
        acc.push({
          ...item,
          childrens: newItems,
        });
      }
    }
    return acc;
  }, []);
};


const AppPickWell = ({data, settings: propsSettings = {}, onChangeSettings}) => {
  const [localIsOpenTree, setLocalIsOpenTree] = useLocalStorage('pickwell.isOpenTree', "false");
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data.wells || []);
  const [settings, setSettings] = useState({
    count: true,
    status: true,
    isOpenTree: localIsOpenTree === "true",
    showUnwatchWell: propsSettings.showUnwatchWell || false
  })
  const [editSettings, setEditSettings] = useState(settings)

  const changeShow = (key, show) => {
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
    if (editSettings.showUnwatchWell !== settings.showUnwatchWell) {
      onChangeSettings({
        showUnwatchWell: editSettings.showUnwatchWell,
      })
    }
  }

  const AppPickWellItem = ({title, count, colors, isParent = true, children}) => {
    const [isOpenItem, setIsOpenItem] = useState(search.length > 0 ? true : settings.isOpenTree);
    const toggleIsOpenItem = () => isParent && setIsOpenItem(!isOpenItem);
    const HeaderTag = isParent ? 'button' : 'span';
  
    return (
      <div className={`pickwell__item ${isOpenItem ? 'active' : ''}`}>
        <HeaderTag className="pickwell__item-header" onClick={toggleIsOpenItem}>
          {isParent && (
            <div className="pickwell__item-icon">{isOpenItem ? '-' : '+'}</div>
          )}
          <span className="pickwell__item-name">{title}</span>
          {count !== undefined && settings.count && (
            <span className="pickwell__item-count">({count})</span>
          )}
          {settings.status && (
            <div className="pickwell__item-status">
              {colors.map((backgroundColor, index) => (
                <div key={index} className="pickwell__item-status-item" style={{backgroundColor}} />
              ))}
            </div>
          )}
        </HeaderTag>
        <div className="pickwell__item-body">
          {children}
        </div>
      </div>
    )
  }

  const modalContent = (
    <>
      <AppFormRow>
        <AppCheckbox value={editSettings.count} onChange={value => changeShow('count', value)} label="Отображать количество скважин в дереве" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.status} onChange={value => changeShow('status', value)} label="Отображать состояние скважин в дереве" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.isOpenTree} onChange={value => changeShow('isOpenTree', value)} label="Всегда отображать развернутое дерево при следующем заходе" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.showUnwatchWell} onChange={value => changeShow('showUnwatchWell', value)} label="Отображать скважины не под наблюдением" />
      </AppFormRow>
    </>
  )

  useEffect(() => {
    if (search.length === 0) {
      setFilteredData(data.wells)
      return
    }

    const _data = searchTerm(data.wells, search);

    setFilteredData(_data)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <AppBlock 
      title="Виджет в выбором скважины" 
      modalTitle="Настройка виджета с выбором скважины"
      modalContent={modalContent}
      onOpenModal={openModal}
      onConfirmModal={confirmModal}
    >
      <div className="pickwell">
        <div className="pickwell__input">
          <SearchIcon />
          <input 
            value={search} 
            onInput={e => setSearch(e.currentTarget.value)} 
            placeholder="Начните вводить название или номер скважины" 
          />
        </div>
        <div className="pickwell__list">
          {filteredData.map(item => (
            <AppPickWellItem key={item.id} title={item.title} count={item.count} colors={item.statuses}>
              {item.childrens.map(item => (
                <AppPickWellItem key={item.id} title={item.title} count={item.count} colors={item.statuses}>
                  {item.childrens.map(item => (
                    <AppPickWellItem key={item.id} title={item.title} count={item.count} colors={item.statuses}>
                      {item.childrens.map(item => (
                        <AppPickWellItem key={item.id} title={item.title} count={item.count} colors={item.statuses}>
                          {item.childrens.map(item => (
                            <AppPickWellItem key={item.id} title={item.title} colors={item.statuses} isParent={false} />
                          ))}
                        </AppPickWellItem>
                      ))}
                    </AppPickWellItem>
                  ))}
                </AppPickWellItem>
              ))}
            </AppPickWellItem>
          ))}
        </div>
      </div>
    </AppBlock>
  );
}

export default AppPickWell;
