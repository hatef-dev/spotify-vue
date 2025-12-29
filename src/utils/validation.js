import { Form as VeeForm, Field as VeeField, ErrorMessage, configure } from 'vee-validate'
import {
  required,
  email,
  min,
  alpha,
  alpha_spaces as alphaSpace,
  min_value as minValue,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'
import { defineRule } from 'vee-validate'
export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('email', email)
    defineRule('min', min)
    defineRule('minValue', minValue)
    defineRule('passwordMismatch', confirmed)
    defineRule('alphaSpace', alphaSpace)
    defineRule('alpha', alpha)
    defineRule('countryExcluded', excluded)
    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          alphaSpaces: `The field ${ctx.field} may only contain alphabetical characters and spaces.`,
          email: `The field  must be a valid ${ctx.field}.`,
          minValue: `The field ${ctx.field} is too low.`,
          countryExcluded: `Due to restrictions, we do not accept users from this location.`,
          passwordMismatch: `The passwords do not match.`,
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
}
