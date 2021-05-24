window.dom = {
    find(selector, scope) {
        return Array.from((scope || document).querySelectorAll(selector))
    },
    style(element, name, value) {
        if (arguments.length === 3) {
            element.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return element.style[name]
            } else if (name instanceof Object) {
                for (key in name) {
                    element.style[key] = element[key]
                }
            }
        }
    },
    each(list, fn) {
        for (let i = 0; i < list.length; i++) {
            fn.call(null, list[i], i)
        }
    }
}