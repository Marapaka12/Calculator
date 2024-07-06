let string = "";
const buttons = document.querySelectorAll('button');
const input = document.getElementById('display');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                string = eval(string);
            } catch (error) {
                string = "Error";
            }
            input.value = string;
        } else if (buttonText === 'AC') {
            string = "";
            input.value = string;
        } else if (buttonText === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else if (buttonText === '%') {
            string = (parseFloat(string) / 100).toString();
            input.value = string;
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});