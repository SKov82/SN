import React from 'react'
import TestRenderer, { act } from 'react-test-renderer'
import { store } from '../../../redux/redux-store'
import { Provider } from 'react-redux'
import { ProfileStatus } from './ProfileStatus'

test('render ProfileStatus component', () => {
    const testRenderer = TestRenderer.create(
        <Provider store={store}>
            <ProfileStatus userID={23880} status={'OK'} />
        </Provider>,
    )
    const testInstance = testRenderer.root

    expect(testRenderer.toJSON().children[1].children[0]).toBe('OK')

    expect(testInstance.findByType(ProfileStatus).props.userID).toBe(23880)
    expect(testInstance.findByType(ProfileStatus).props.status).toBe('OK')

    expect(testInstance.findByType('span').children).toStrictEqual(['OK'])

    act(() => {
        testInstance.findByType('div').props.onDoubleClick()
    })
    expect(testInstance.findByType('input').props.value).toBe('OK')
})
