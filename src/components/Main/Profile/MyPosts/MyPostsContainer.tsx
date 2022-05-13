import {MyPosts} from './MyPosts';
import {
    addNewPostActionCreator, ProfileDataType, updateNewPostActionCreator
} from '../../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../../redux/redux-store';

type mapStateToPropsType = {
    profileData: ProfileDataType
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return { profileData: state.profileData }
}
let mapDispatchToProps = (dispatch: any) => {
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
