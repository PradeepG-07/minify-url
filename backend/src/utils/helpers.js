export function getRandomString(requiredStringLength = 6) {
    const characterArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    let output = "";
    for (let index = 1; index <= requiredStringLength; index++) {
        const randomIndex = Math.floor(Math.random() * characterArray.length);
        output += characterArray[randomIndex];
    }

    return output;
}

getRandomString(6)