import React, { useState, useEffect } from 'react';
import useLocalStorage from 'react-use-localstorage';
import AppBlock from '../../ui/block';
import AppCheckbox from '../../ui/checkbox';
import AppFormRow from '../../ui/formRow';
import AppCollapse from '../../ui/collapse';
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
    if (editSettings.showUnwatchWell !== settings.showUnwatchWell) {
      onChangeSettings({
        showUnwatchWell: editSettings.showUnwatchWell,
      })
    }
  }

  const AppPickWellItem = ({title, count, statuses, type, childrens, icon, openIcon, link}) => {
    if (type === 'list') {
      return (
        <div className="pickwell__line pickwell__children">
          <img src={icon} alt={`${title} icon`} />
          <a href={link}>{title}</a>
          <AppPickWellItemStatus colors={statuses} />
        </div>
      )
    }

    return (
      <AppCollapse 
        icon={icon}
        openIcon={openIcon}
        title={title} 
        count={count} 
        isShowCount={settings.count} 
        isOpen={settings.isOpenTree}
        headerClass="pickwell__line"
        headerExtra={<AppPickWellItemStatus colors={statuses} />}
      >
        {childrens.map(item => (
          <AppPickWellItem key={item.id} {...item} />
        ))}
      </AppCollapse>
    )
  }

  const AppPickWellItemStatus = ({colors}) => {
    if (!settings.status) return null

    return (
      <div className="pickwell__status">
        {colors.map((backgroundColor, index) => (
          <div key={index} className="pickwell__status-item" style={{backgroundColor}} />
        ))}
      </div>
    )
  }

  const modalContent = (
    <>
      <AppFormRow>
        <AppCheckbox value={editSettings.count} onChange={value => changeSettings('count', value)} label="???????????????????? ???????????????????? ?????????????? ?? ????????????" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.status} onChange={value => changeSettings('status', value)} label="???????????????????? ?????????????????? ?????????????? ?? ????????????" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.isOpenTree} onChange={value => changeSettings('isOpenTree', value)} label="???????????? ???????????????????? ?????????????????????? ???????????? ?????? ?????????????????? ????????????" />
      </AppFormRow>
      <AppFormRow>
        <AppCheckbox value={editSettings.showUnwatchWell} onChange={value => changeSettings('showUnwatchWell', value)} label="???????????????????? ???????????????? ???? ?????? ??????????????????????" />
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
      title="???????????? ?? ?????????????? ????????????????" 
      modalTitle="?????????????????? ?????????????? ?? ?????????????? ????????????????"
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
            placeholder="?????????????? ?????????????? ???????????????? ?????? ?????????? ????????????????" 
          />
        </div>
        <div className="pickwell__list">
          {filteredData.map(item => (
            <AppPickWellItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </AppBlock>
  );
}

export default AppPickWell;
