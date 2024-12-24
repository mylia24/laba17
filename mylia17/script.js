function task1() {
    let dateTimeNow = new Date();

    let timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    let dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    let formattedTime = dateTimeNow.toLocaleTimeString('uk-UA', timeOptions);
    let formattedDate = dateTimeNow.toLocaleDateString('uk-UA', dateOptions);

    console.log(`${formattedTime}, ${formattedDate}`);
}

function logInformation(attempt, number, isCorrect) {
    let dateTimeNow = new Date();

    let dateOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };

    let formattedDate = dateTimeNow.toLocaleDateString('uk-UA', dateOptions);
    let result = isCorrect ? "вірно" : "не вірно"

    console.log(`${formattedDate} Спроба ${attempt}: число ${number} - ${result}`);
}

function task2() {
    do {
        const targetNumber = Math.floor(Math.random() * 100) + 1;
        let attempt = 0;
        let previousDifference = null;
        let guessed = false;

        alert("Гра 'Вгадай число'! Вам потрібно вгадати число від 0 до 100.");

        while (!guessed) {
            let usersNumber = prompt("Введіть ваше число або натисніть 'Скасувати' для виходу:");
            if (usersNumber === null) {
                alert("Гру завершено.");
                return;
            }

            usersNumber = Number(usersNumber);

            if (isNaN(usersNumber) || usersNumber < 0 || usersNumber > 100) {
                alert("Будь ласка, введіть число від 0 до 100.");
                continue;
            }

            attempt++;
            const difference = Math.abs(targetNumber - usersNumber);

            if (usersNumber === targetNumber) {
                logInformation(attempt, usersNumber, true)
                alert(`За ${attempt} спроб(и) ви вгадали число ${targetNumber}!`);
                guessed = true;
            } else {
                logInformation(attempt, usersNumber, false)
                
                let feedback = "";

                if (difference === 0) {
                    feedback = "Ви вгадали!";
                } else if (difference <= 5) {
                    feedback = "Дуже гаряче!";
                } else if (difference <= 10) {
                    feedback = "Гаряче!";
                } else if (difference <= 20) {
                    feedback = "Тепліше.";
                } else if (difference <= 30) {
                    feedback = "Холодно.";
                } else {
                    feedback = "Дуже холодно!";
                }

                if (previousDifference !== null) {
                    if (difference < previousDifference) {
                        feedback += " Тепліше, ніж попереднього разу.";
                    } else if (difference > previousDifference) {
                        feedback += " Холодніше, ніж попереднього разу.";
                    }
                }

                previousDifference = difference;
                alert(feedback);
            }
        }
    } while (confirm("Бажаєте спробувати ще раз?"));

    alert("Дякую за гру!");
}