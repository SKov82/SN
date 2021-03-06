import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {updateUserStatus} from '../../../redux/profile-reducer';

export const ProfileStatus = (props: {userID: number, status: string | null}) => {
    const dispatch = useDispatch()
    // const status = useSelector<AppStateType, string | null>(state => state.profileData.status)
    const [status, setStatus] = useState<string | null>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)
    const editModeHandler = () => setEditMode(!editMode)

    useEffect(() => setStatus(props.status), [props.status])

    return <div onDoubleClick={editModeHandler}>
        {`Статус: `}
        { editMode
            ? <span onBlur={editModeHandler}>
                <input value={status || props.status || ''}
                       onChange={ (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value) }
                       onKeyPress={ (e: KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter') {
                                editModeHandler()
                                dispatch(updateUserStatus(status || ''))
                            }
                       }}
                       autoFocus
                       maxLength={300}
                />
              </span>
            : <span> {status || props.status} </span>
        }
    </div>
}