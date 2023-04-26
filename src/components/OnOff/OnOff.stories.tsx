import React, { useState } from 'react'
import { OnOff2 } from './UncontrolledOnOff'
import { action, actions } from '@storybook/addon-actions';


export default {
    title: 'OnOff',
    component: OnOff2,
}

const callBack = actions('on or off clicked');

export const OnMode = () => <OnOff2 on={true} onChange={actions} />
export const OffMode = () => <OnOff2 on={false} onChange={actions} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff2 on={value} onChange={setValue} />
}

