import {Dialogs} from './Dialogs';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';

let mapStateToProps = (state: AppStateType) => {
    return { dialogsData: state.dialogsData }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateMessage: (text: string) => {
            dispatch( updateNewMessageActionCreator(text) )
        },
        addMessage: () => {
            dispatch( addMessageActionCreator() )
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)
