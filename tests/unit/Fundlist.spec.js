import { mount } from "@vue/test-utils";

const App = {
    template: '<div>Hello</div>'
}

test('App', () => {
    const wrapper = mount(App)

    console.log(wrapper.html())
    expect(wrapper.html()).toBe('<div>Hello</div>')
})