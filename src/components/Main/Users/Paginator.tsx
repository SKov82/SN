import React from 'react';
import css from './Users.module.css';

type PaginatorType = {
    currentPage: number
    pageSize: number
    totalCount: number
    getUsers: (currentPage: number, pageSize: number) => void
}

export const Paginator = ({currentPage, pageSize, totalCount, getUsers}: PaginatorType) => {
    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = [...Array(pagesCount)].map((el, i) => ++i)
    pages.length = 200

    const onPageChanged = (page: number) => {
        getUsers(page, pageSize)
    }

    return <div>
        {pages.map(page => {
            return (
                <span key={page}
                      onClick={ () => onPageChanged(page) }
                      className={`${css.pageNumber} ${page === currentPage ? css.currentPageNumber : ''}`}
                >
                {` ${page} `}
                </span>
            )
        })}
    </div>
};
