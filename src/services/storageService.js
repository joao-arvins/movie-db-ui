const get = (key) => {
    let item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
}

const set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export default {
    get,
    set
}