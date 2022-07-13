import React, {ChangeEvent, KeyboardEvent, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {getUserStatus, updateUserStatus} from '../../../redux/profile-reducer';

export const ProfileStatus = (props: {userID: number, status: string | null}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const editModeHandler = () => setEditMode(!editMode)

    const dispatch = useDispatch()
    const [status, setStatus] = useState<string | null>(
        useSelector<AppStateType, string | null>(state => state.profileData.status)
    )

    // const mounted = useRef(null);
    // useEffect(() => {
    //     if (!mounted.current) {
    //         // do componentDidMount logic
    //         dispatch(getUserStatus(props.userID))
    //     } else {
    //         // do componentDidUpdate logic
    //         setStatus(status)
    //     }
    // });

    return <div onDoubleClick={editModeHandler}>
        {`Статус: `}
        { editMode
            ? <span onBlur={editModeHandler} >
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