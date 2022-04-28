import timer from './modules/timer'
import slider from './modules/slider'
import menu from './modules/menu'
import modal from './modules/modal'
import formValidate from './modules/formValidate'
import tabs from './modules/tabs'
import calc from './modules/calc'
import form from './modules/sendForm'
import anotherCalc from './modules/anotherCalc'
import helpers, { animate } from './modules/helpers'


timer('16 april 2022')
slider()
menu()
modal()
formValidate()
tabs()
calc(100)
anotherCalc()
form({
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})
sendForm({
    formId: 'form2', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})
sendForm({
    formId: 'form3', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})

helpers()