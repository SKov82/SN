import React, {ChangeEvent, useState} from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {updateUserStatus} from '../../../redux/profile-reducer';

export const ProfileStatus = () => {
    const state = useSelector<AppStateType, string | null>(state => state.profileData.status)
    const [editMode, setEditMode] = useState<boolean>(false)
    const editModeHandler = () => setEditMode(!editMode)
    const [status, setStatus] = useState<string | null>(state)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value && setStatus(e.currentTarget.value)
    }

    return <div onDoubleClick={editModeHandler}>
        {`Статус: `}
        { editMode
            ? <span onBlur={editModeHandler} >
                <input onChange={ (e) => onChangeHandler(e) }
                       onKeyDown={ (e) => {
                           if (e.key === 'Enter') updateUserStatus(status)
                       }}
                       autoFocus={true}
                       maxLength={300}
                       value={status || ''}
                />
              </span>
            : <span> {status} </span>
        }
    </div>
}