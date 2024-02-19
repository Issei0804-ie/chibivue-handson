import { createApp } from "chibivue";
import {h} from "../../../packages/runtime-core/h";
import {reactive} from "../../../packages/reactivity/reactive";

const app = createApp({
    setup() {
        const state = reactive({count: 0})
        const increment = () => {
            state.count++
        }

        return function render() {
            return h('div', { id: 'my-app' }, [
                h('p', {}, [`count: ${state.count}`]),
                h(
                    'button',
                    {
                        onClick: increment,
                    },
                    ['click me!'],
                ),
            ])
        }
    },
})

app.mount('#app')
