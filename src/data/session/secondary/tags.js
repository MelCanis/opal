export const colors = {
    grey: "#3d3d3d",
    orange: "#ff9203",
    yellow: "#ffd505",
    green: "#86ff05",
    blue: "#3355ff",
    red: "#ff304f",
    violet: "#ec45ff",
}

export const filters = {
    text: {
        is: (x, y) => x == y,
        contains: (x, y) => x.includes(y)
    },
    number: {
        "=": (x, y) => x == y,
        "<": (x, y) => x < y,
        ">": (x, y) => x > y,
        "<=": (x, y) => x <= y,
        ">=": (x, y) => x >= y,
    },
    checkbox: {
        checked: x => x,
    }
}

export function getFilters(x) {
    return Object.keys(filters[x])
}
export function getFilter({attribute: {type}, filter: title}) {
    return filters[type][title]
}