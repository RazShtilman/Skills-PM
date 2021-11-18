function noColor(){
    const elements = document.getElementsByName("understood");
    for (const element of elements) {
        element.classList.toggle('understood');
    }
}