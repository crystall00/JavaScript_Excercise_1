function isPangram(str) {
    let s = str.toLowerCase();
    let letters = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 26; i++)
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    return true;
}


console.log(isPangram("The quick brown fox jumps over the lazy dog"));