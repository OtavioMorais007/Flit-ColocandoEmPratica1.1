const readXlsxFile = require('read-excel-file/node');
const validator = require('validator');

readXlsxFile("C:/workspace/DoDev/Node/Validator/Alunos.xlsx").then((rows) => {
    for (let i = 0; i < 11; i++) {
        let name = validator.isEmpty(rows[i][0])
        let email = validator.isEmail(rows[i][1])
        let age
        if (rows[i][2] > 0) {
            age = true
        } else {
            age = false
        }
        let registry = validator.isAlphanumeric(rows[i][3])

        if (!name && email && age && registry){
            console.log('Nome: ' + rows[i][0])
            console.log('E-mail: ' + rows[i][1])
            console.log('Idade: ' + rows[i][2])
            console.log('Matrícula: ' + rows[i][3])
            console.log('-----------------------')
        }
    }
})