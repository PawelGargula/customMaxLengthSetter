const textAria = document.querySelector('textarea');
const maxLengthFromDB = textAria.maxLength;

textAria.addEventListener('input', () => {
    textAria.maxLength = maxLengthFromDB - getOccurrencesOfEnters(); 
    if (textAria.value.length > textAria.maxLength) {
        textAria.value = textAria.value.substring(0, textAria.maxLength);
        textAria.maxLength = maxLengthFromDB - getOccurrencesOfEnters();
    }
});

function getOccurrencesOfEnters() {
    return (textAria.value.match(/\n/g) || []).length;
}