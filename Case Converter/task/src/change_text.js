function myProperCase(str, simbol=" ") {
    let arr_words = str.trim().split(simbol)
    str = ""
    for (let i = 0; i < arr_words.length; i++)
        str += arr_words[i].charAt(0).toUpperCase() + arr_words[i].slice(1).toLowerCase() + simbol
    return str.trim()
}

function mySentenceCase(str) {
    let arr_words = str.trim().split(" ")
    for (let i = 0; i < arr_words.length - 1; i++) {
        if (i === 0)
            arr_words[i] = myProperCase(arr_words[i])

        if (arr_words[i].endsWith("!") || arr_words[i].endsWith(".") || arr_words[i].endsWith("?") || arr_words[i].endsWith(";")){
            arr_words[i + 1] = myProperCase(arr_words[i + 1])
        }
    }
    return arr_words.join(" ")
}


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}



let upper_case = document.getElementById("upper-case")
let lower_case = document.getElementById("lower-case")
let proper_case = document.getElementById("proper-case")
let sentence_case = document.getElementById("sentence-case")
let save_text_file = document.getElementById("save-text-file")
let text_field = document.getElementById("field")


upper_case.addEventListener("click", function() {
    text_field.value = text_field.value.toUpperCase()
});

lower_case.addEventListener("click", function() {
    text_field.value = text_field.value.toLowerCase()
});

proper_case.addEventListener("click", function() {
    text_field.value = myProperCase(text_field.value.toLowerCase(), " ")
});

sentence_case.addEventListener("click", function() {
    text_field.value = mySentenceCase(text_field.value.toLowerCase())
});

save_text_file.addEventListener("click", function() {
    download("hello.txt", text_field.value)
});
