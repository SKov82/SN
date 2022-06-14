import React, {useState} from 'react';

export const ProfileStatus = ({status}: any) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const editModeHandler = () => setEditMode(!editMode)

    return <div>
        {`Статус: `}
        { editMode
            ? <span onKeyDown={ (e) => {if (e.key === 'Enter') editModeHandler()} }
                   onBlur={editModeHandler}
              >
                <input autoFocus={true}
                       maxLength={300}
                    value={status}
                />
              </span>
            : <span onDoubleClick={editModeHandler}>
                {status}
              </span>
        }
    </div>
}