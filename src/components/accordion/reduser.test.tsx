import { Reduser, StateType, TOGGLE_COLLAPSED } from "./reduser"

test('collapsed should be true', () => {
    const state: StateType = {
        collapsed: false
    }
    const newState = Reduser(state, { type: TOGGLE_COLLAPSED })
    expect(newState.collapsed).toBe(true)
})
test('collapsed should be false', () => {
    const state: StateType = {
        collapsed: true
    }
    const newState = Reduser(state, { type: TOGGLE_COLLAPSED })
    expect(newState.collapsed).toBe(false)
})

test('collapsed should be false', () => {
    const state: StateType = {
        collapsed: true
    }
    expect(() => {
        Reduser(state, { type: 'FAKE_TYPE' })
    }).toThrowError()

})