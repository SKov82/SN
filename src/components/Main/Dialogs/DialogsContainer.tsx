import {Dialogs} from './Dialogs';
import {addMessageAC, DialogsDataType, updateNewMessageAC} from '../../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    dialogsData: DialogsDataType
}
type MapDispatchToPropsType = {
    updateMessage: (text: string) => void
    addMessage: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return { dialogsData: state.dialogsData }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateMessage: (text: string) => {
            dispatch( updateNewMessageAC(text) )
        },
        addMessage: () => {
            dispatch( addMessageAC() )
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)