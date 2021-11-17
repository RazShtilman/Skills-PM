function noColor(){
    const elements = document.getElementsByTagName('tr');
    for (const element of elements) {
        element.className = "without-color";
    }
}