let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно  

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";
tg.MainButton.show();

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData("12345");
})
