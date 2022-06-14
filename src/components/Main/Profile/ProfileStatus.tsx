import React, {useState} from 'react';

export const ProfileStatus = (props: any) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const editModeHandler = () => setEditMode(!editMode)

    return <div>
        Статус:
        { editMode
            ? <span onKeyDown={ (e) => {if (e.key === 'Enter') editModeHandler()} }
                   onBlur={editModeHandler}
              >
                <input value={props.status} />
              </span>
            : <span onDoubleClick={editModeHandler}>
                {props.status}
              </span>
        }
    </div>
}