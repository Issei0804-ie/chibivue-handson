import { createApp } from "chibivue";
import {h} from "../../../packages/runtime-core/h";


const app = createApp({
    render() {
        return h('div', {}, [
            h('p', {}, ['Hello world.']),
            h('button', {}, ['click me!']),
        ])
    },
})

app.mount('#app')

