import {Dialogs} from './Dialogs';
import {addMessageAC, DialogsDataType, updateNewMessageAC} from '../../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {WithAuthRedirect} from '../../../hoc/withAuthRedirect';

type MapStateToPropsType = {
    dialogsData: DialogsDataType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    updateMessage: (text: string) => void
    addMessage: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsData,
        isAuth: state.auth.isAuth,
    }
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
// @ts-ignore
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (WithAuthRedirect(Dialogs))