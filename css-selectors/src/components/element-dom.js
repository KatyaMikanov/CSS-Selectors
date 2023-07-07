
export function newElement (options) {
const el = document.createElement (options.tag);

for (const[key,value] of Object.entries(options.params)) {
    if (key === 'classList') {
        for (const newClass of value) {
            el.classList.add(newClass);
        }
    } else {
        el[key] = value;
    }

    if (options.parent !== undefined) options.parent.append(el);

}

return el;
}