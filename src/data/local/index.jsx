export function setUser (x) {
    localStorage.setItem("opal-user", JSON.stringify(x))
}

export function getUser () {
    return JSON.parse(localStorage.getItem("opal-user"));
}

export function removeUser () {
    localStorage.removeItem("opal-user");
}