export function generateToken(userID, roomID, userName) {
    return fetch(`https://choui-prebuilt.herokuapp.com/access_token?userID=${userID}&userName=${userName}&roomID=${roomID}&expired_ts=7200`).then((res) => res.json())
}


export function randomId(len) {
    let result = "";
    if (result) return result;
    var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP"
    var maxPos = chars.length;
    len = len || 5;
    for (let i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return result;
}


export function getRandomName() {
    const names = [
        "Oliver",
        "Jake",
        "James",
        "Connor",
        "Liam",
        "John",
        "Harry"
    ]

    return names[Math.round(Math.random() * names.length)]
}
