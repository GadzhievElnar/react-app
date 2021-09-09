import React, { useEffect, useState } from 'react';

export const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        
        props.updateStatus(status);   
        setEditMode(false);
    }

    const onStatusChange = (event) => {        
        setStatus(event.target.value);
    }

    useEffect(() => setStatus(props.status), [props.status])

    return (

        <div>
            {editMode
                ? <div>
                    <input autoFocus={true} value={status} onBlur={deactivateEditMode} onChange={onStatusChange}/>
                </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{status || '-------'}</span>
                </div>
            }


        </div>
    );
}

export default ProfileStatusWithHooks;