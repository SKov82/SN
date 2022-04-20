import React from 'react';
import css from './MyPosts.module.css';
import {Post, PostType} from './Post/Post';

export function MyPosts({posts}: any) {
    let postsElements = posts.map((el: PostType) => <Post key={el.id} id={el.id} message={el.message} likes_count={el.likes_count}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const newPostHandler = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div>
            <div className={css.post_title}>Мои посты</div>
            
            <div className={css.new_post}>
                <textarea ref={newPostElement} name="new_post" id="new_post" rows={3}></textarea>

                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={ newPostHandler }
                >
                    Запостить
                </button>
            </div>

            {postsElements}
        </div>
    );
}
