import { Form as VeeForm, Field as VeeField, ErrorMessage } from "vee-validate"
import { required, email, min, alpha, alpha_spaces as alphaSpace  } from "@vee-validate/rules"
import {defineRule} from 'vee-validate'
export default {
    install(app) {
        app.component('VeeForm', VeeForm)
        app.component('VeeField', VeeField)
        app.component('ErrorMessage', ErrorMessage)

        defineRule('required', required)
        defineRule('email', email)
        defineRule('min', min)
        defineRule('alphaSpace', alphaSpace)
        defineRule('alpha', alpha)
    }
}