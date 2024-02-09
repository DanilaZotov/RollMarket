import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'server160.hosting.reg.ru',
  user: 'u2481097_abab',
  password: 'uY4aW1qZ4rhH4aI7',
  database: 'u2481097_default'
})

connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

connection.end()