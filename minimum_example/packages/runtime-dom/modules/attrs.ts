export function addAttr(
    el: Element,
    attrName: string,
    attrValue: string
) {
    el.setAttribute(attrName, attrValue)
}

export function patchAttr(
    el: Element,
    attrName: string,
    attrValue: string
) {
    addAttr(el, attrName, attrValue)
}
