import {MyPosts} from './MyPosts';
import {
    addNewPostActionCreator, ProfileDataType, updateNewPostActionCreator
} from '../../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../../redux/redux-store';
import {Dispatch} from 'redux';

type mapStateToPropsType = {
    profileData: ProfileDataType
}

type mapDispatchToPropsType = {
    updatePost: (text: string) => void
    addPost: () => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return { profileData: state.profileData }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updatePost: (text: string) => {
            dispatch( updateNewPostActionCreator(text) )
        },
        addPost: () => {
            dispatch( addNewPostActionCreator() )
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)
