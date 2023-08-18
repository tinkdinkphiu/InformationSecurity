// Function dùng để tạo key
function generateKey(plain, key) {
    // Tách key ra thành mảng
    key = key.split("")
    // Khai báo giá trị key để return
    let finalKey = ""
    // Nếu độ dài text và key bằng thì return
    if(plain.length == key.length) {
        finalKey = key.join("")
    }
    // Nếu độ dài text dài hơn
    else {
        let keyIndex = 0
        // Lặp theo độ dài của plain
        for(let i = 0; i < plain.length; i++) {
            // Kiểm tra dấu cách trong plain để tạo key
            if(plain.charAt(i) == " ") {
                finalKey += " "
            }
            else {
                // Kiểm tra keyIndex vượt quá độ dài của key
                if(keyIndex == key.length) {
                    keyIndex = 0
                }
                // Tạo key
                finalKey += key[keyIndex]
                keyIndex ++
            }
        }
    }
    return finalKey
}
// Function dùng để mã hóa
function encrypt(plain, key) {
    // Chuyển đổi thành chữ hoa
    key = key.toUpperCase()
    let cipher = ""
    // Loop mã hóa từng ký tự trong chuỗi
    for (let i = 0; i < plain.length; i++) {
        // Nếu là chữ hoa
        if (plain.charCodeAt(i) >= 65 && plain.charCodeAt(i) <= 90) {
            // Sử dụng công thức mã hóa
            var encrytedChar = ((plain.charCodeAt(i) - 65) + (key.charCodeAt(i) - 65)) % 26
            // Ký tự encryptedChar đã được mã hóa thành ký tự khác, mang số từ 0 - 25
            // Cộng vào 65 để đưa về chữ trong bảng mã ASCII và chuyển chữ vào kết quả cipher
            cipher += String.fromCharCode(encrytedChar + 65)
        }
        // Nếu là chữ thường
        else if (plain.charCodeAt(i) >= 97 && plain.charCodeAt(i) <= 122) {
            // Công thức mã hóa
            var encryptedChar = ((plain.charCodeAt(i) - 65 - 32) + (key.charCodeAt(i) - 65)) % 26
            // Cộng thêm 32 để thành chữ thường trong bảng ASCII
            cipher += String.fromCharCode(encryptedChar + 65 + 32)
        }
        // Ký tự đặc biệt
        else {
            cipher += plain.charAt(i)
        }
    }
    return cipher
}
// Function dùng để giải mã
function decrypt(cipher, key) {
    // Chuyển đổi thành chữ hoa
    key = key.toUpperCase()
    let plain = ""
    for (let i = 0; i < cipher.length; i++) {
        // Nếu là chữ hoa
        if (cipher.charCodeAt(i) >= 65 && cipher.charCodeAt(i) <= 90) {
            // Sử dụng công thức giải mã, + 26 để phòng trường hợp phép trừ ra số âm
            var decryptedChar = ((cipher.charCodeAt(i) - 65) - (key.charCodeAt(i) - 65) + 26) % 26
            // Ký tự encryptedChar đã được mã hóa thành ký tự khác, mang số từ 0 - 25
            // Cộng vào 65 để đưa về chữ trong bảng mã ASCII và chuyển chữ vào kết quả cipher
            plain += String.fromCharCode(decryptedChar + 65)
        }
        // Nếu là chữ thường
        else if (cipher.charCodeAt(i) >= 97 && cipher.charCodeAt(i) <= 122) {
            // Công thức mã hóa
            var decryptedChar = ((cipher.charCodeAt(i) - 65 - 32) - (key.charCodeAt(i) - 65) + 26) % 26
            // Cộng thêm 32 để thành chữ thường trong bảng ASCII
            plain += String.fromCharCode(decryptedChar + 65 + 32)
        }
        // Ký tự đặc biệt
        else {
            plain += cipher.charAt(i)
        }
    }
    return plain
}
// Function để bắt đầu giải mã
function beginDecrypt() {
    // Khai báo tin nhắn và khóa
    let inCipher = $("#decryptMsg").val()
    let inKey = $("#decryptKey").val()
    // Kiểm tra xem có khóa không
    if(inKey.length === 0) {
        $("#decryptPlain").html("Vui lòng nhập khóa để giải mã")
    }
    // Kiểm tra xem có thông điệp không
    else if(inCipher.length === 0) {
        $("#decryptPlain").html("Vui lòng nhập thông điệp cần giải mã")
    }
    // Thực hiện giải mã
    else {
        let generatedKey = generateKey(inCipher, inKey)
        let plain = decrypt(inCipher, generatedKey)
        $("#decryptPlain").html(plain)
    }
}