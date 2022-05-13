import {MyPosts} from './MyPosts';
import {addNewPostAC, ProfileDataType, updateNewPostAC} from '../../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    profileData: ProfileDataType
}

type MapDispatchToPropsType = {
    updatePost: (text: string) => void
    addPost: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return { profileData: state.profileData }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updatePost: (text: string) => {
            dispatch( updateNewPostAC(text) )
        },
        addPost: () => {
            dispatch( addNewPostAC() )
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)