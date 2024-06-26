function capitalize(string) {
    let arr = string.split("");
    return arr[0].toUpperCase() + string.substring(1);
}

module.exports = capitalize;
