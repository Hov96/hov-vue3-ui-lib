import type { App } from 'vue'

// Style
import './styles/main.css'

// Components
import HButton from './components/Button.vue'
import HInput from './components/Input.vue'
import Loading from './components/Loading.vue'

export { HButton, HInput, Loading }

// For global registration (Vue.use())
export default {
    install(app: App) {
        app.component('HButton', HButton)
        app.component('HInput', HInput)
        app.component('Loading', Loading)
    },
}
