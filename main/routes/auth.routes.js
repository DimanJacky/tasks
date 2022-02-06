const {Router} = require('express')
const router = Router()
const utils = require('../utils');

router.post('/register', async (req, res) => {
    try {

        const chapter = req.body.chapter; // Название раздела
        const lesson = req.body.lesson; // Название темы

        console.log('req.body', req.body);

        const folderFiles = 'C:\\project\\tasks\\main\\files\\';

        const folderLesson = folderFiles + `${chapter}\\`;

        // Копирование файла

        // Из этой папки копируются файлы
        const srcDir = folderLesson + `${lesson}\\src`;

        console.log('srcDir', srcDir);

        // Файлы копируются в эту папку
        const destDir = `C:\\project\\tasks\\${chapter}`;

        // Папка src удаляется и заменяется другой
        const destDir1 = `C:\\project\\tasks\\${chapter}\\src`;

        // Вызываем поочередно функции
        // Сначала нужно удалить папку src
        // И создать новую папку
        (async function main() {
            await utils.deleteDirectory(destDir1);
            await utils.copyFolderRecursiveSync(srcDir, destDir);
        })()



    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }

})

module.exports = router
