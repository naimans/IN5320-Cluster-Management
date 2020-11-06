import React, {useState} from 'react'
import i18n from '@dhis2/d2-i18n'
import { Menu, MenuItem, MenuSectionHeader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import styles from './App.module.css'
import { List } from './components/List'


const MyApp = () => {

  const [value, setValue] = useState();

    return (
        <div className={styles.container}>
            <nav className={styles.menu} data-test-id="menu">
                <MenuSectionHeader label={i18n.t('Menu')} />
                <Menu>
                    <MenuItem
                        label={i18n.t('Organization Units')}
                        dataTest="menu-map"
                        value="map"
                        onClick={function onClick(payload){setValue(payload.value)}}
                    />
                    <MenuItem
                        label={i18n.t('Cluster List')}
                        dataTest="menu-clusterList"
                        onClick={function onClick(payload){setValue(payload.value)}}
                        value="clusterList"
                    />
                </Menu>
            </nav>
            <main className={styles.main}>
                <List selected={value}/>
            </main>
        </div>
    )
}

export default MyApp
