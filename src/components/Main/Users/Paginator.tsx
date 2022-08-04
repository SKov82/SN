import React, {ChangeEvent, useState} from 'react';
import css from './Users.module.css';

type PaginatorType = {
    currentPage: number
    pageSize: number
    totalCount: number
    getUsers: (currentPage: number, pageSize: number) => void
    setPageSize: (pageSize: number) => void
}

export const Paginator = ({currentPage, pageSize, totalCount, getUsers, setPageSize}: PaginatorType) => {
    let pagesCount = Math.ceil(totalCount / pageSize)
    let [leftBorder, rightBorder] = [currentPage - 4, currentPage + 4]

    if (leftBorder < 2) leftBorder = 2
    if (currentPage < 6) rightBorder += 6 - currentPage
    if (rightBorder > pagesCount-1) rightBorder = pagesCount-1
    if (currentPage > pagesCount - 6) leftBorder = pagesCount - 9

    // let pages = [...Array(9)].map((el, i) => i + leftBorder)
    let pages = [...Array(pagesCount)].map((el, i) => ++i)
        .filter(i => i >= leftBorder && i <= rightBorder)
    pages.unshift(1)
    pages.push(pagesCount)

    // let pages = [...Array(pagesCount)].map((el, i) => ++i)
    // pages.length = 200

    const onPageChanged = (page: number) => getUsers(page, pageSize)
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPageSize(+e.currentTarget.value)
        getUsers(currentPage, +e.currentTarget.value)
    }

    return <div className={css. wrapper}>
        <span className={css.left}>{`Показывать на странице `}
            <select name="count" value={pageSize} onChange={onSelectChange}>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </span>

        <span className={css.right}>
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
        </span>
    </div>
};
