import {Dialogs} from './Dialogs';
import {addMessageAC, DialogsDataType} from '../../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {WithAuthRedirect} from '../../../hoc/withAuthRedirect';

type MapStateToPropsType = {
    dialogsData: DialogsDataType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    addMessage: (newMessage: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsData,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (newMessage: string) => {
            dispatch( addMessageAC(newMessage) )
        }
    }
}
// @ts-ignore
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (WithAuthRedirect(Dialogs))