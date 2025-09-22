/*
* 将HTML特殊字符转换为转义字符
*/
function htmlEscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case '"':
                return "&quot;";
            case "&":
                return "&amp;";
        }
    });
}

/*
* 将转义字符转换为HTML特殊字符
*/
function htmlUnescape(str) {
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
        switch (match) {
            case "&lt;":
                return "<";
            case "&gt;":
                return ">";
            case "&quot;":
                return '"';
            case "&amp;":
                return "&";
        }
    });
}

module.exports = {
    htmlEscape,
    htmlUnescape
}