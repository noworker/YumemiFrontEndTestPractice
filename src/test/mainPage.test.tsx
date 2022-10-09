import {render , screen} from '@testing-library/react'
import MainPage from '../pages/mainPage/main-page'
import {useMainPageLogic} from '../pages/mainPage/main-page.hook'

test('render MainPage', () => {
    const hook = useMainPageLogic()
    expect(hook.title).toBe('hello world');
})