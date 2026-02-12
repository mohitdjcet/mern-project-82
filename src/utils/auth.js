export function isLoggedIn() {
    return localStorage.getItem("isAuth") === "true";
}

export function login() {
    localStorage.setItem("isAuth", "true");
}

export function logout() {
    localStorage.removeItem("isAuth");
}