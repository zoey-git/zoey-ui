import Test from './test'


const components = [
    Test
]

// 定义install方法，接收Vue作为参数。如果使用use注册插件，则所有的组件都将被注册
const install = (Vue) => {
    // 判断是否按照
    if (install.installed) return
    install.installed = true
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
    // or
    // components.map(component => Vue.use(component))
}


// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具有install才能被Vue.use()方法安装
    install,
    // 以下具体的组件列表
    ...components
}