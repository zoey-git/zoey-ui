import ZTest from './src/test'

ZTest.install = Vue => {
    Vue.component(ZTest.name, ZTest)
}


export default ZTest