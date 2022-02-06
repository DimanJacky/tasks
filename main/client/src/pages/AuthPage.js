import React, {useState} from 'react'
import {useHttp} from '../hooks/http.hook';

export const AuthPage = () => {
    const {request} = useHttp()
    const [chapterData, setChapterData] = useState(
        [
            {
                chapter: 'javascript',
                themes: [
                    {
                        themeName: 'language',
                        lessons: [
                            {
                                title: 'Геттеры и сеттеры',
                                name: 'gettersSetters'
                            },
                            {
                                title: 'Map и Set',
                                name: 'mapSet'
                            }
                        ]
                    },
                    {
                        themeName: 'browser',
                        lessons: [
                            {
                                title: 'Навигация по DOM-элементам',
                                name: 'DOMElements'
                            }
                        ]
                    }
                ]
            },
            {
                chapter: 'react',
                themes: [
                    {
                        themeName: 'hook',
                        lessons: [
                            {
                                title: 'хук useState',
                                name: 'useState'
                            },
                            {
                                title: 'хук useEffect',
                                name: 'useEffect'
                            }
                        ]
                    },
                    {
                        themeName: 'context',
                        lessons: [
                            {
                                title: 'контекст',
                                name: 'context'
                            }
                        ]
                    }
                ]
            }
        ]
    );

    const [lessonsChapter, setLessonsChapter] = useState({});

    console.log('chapterData', chapterData);
    console.log('lessonsChapter', lessonsChapter);

    const selectHandler = (event) => {
        const selectChapterData = chapterData.find(({chapter}) => chapter === event.target.value);
        setLessonsChapter(selectChapterData);
    }



    const registerHandler = async () => {
        try {
            const chapter = document.querySelector('#chapter').value;
            const lesson = document.querySelector('#lesson').value;
            console.log('document.querySelector(\'#chapter\').value', document.querySelector('#chapter').value);
            console.log('document.querySelector(\'#chapter\').name', document.querySelector('#chapter').name);
            const data = await request('/api/auth/register', 'POST', {chapter, lesson})
            console.log('Data', data)
        } catch (e) {

        }
    }

    const chooseLesson = (name) => {
        document.querySelector('#lesson').value = name;
    }

    return (
        <>
            <div>
                <h1>Auth Page</h1>
                <label>Раздел</label><br />
                <select name="chapter" id="chapter" onChange={selectHandler}>
                    <option value="1">Выберите раздел</option>
                    <option value="javascript">javascript</option>
                    <option value="react">react</option>
                    <option value="layout">верстка</option>
                    <option value="lodash">lodash</option>
                </select><br />
                <input type="text" name="lesson" id="lesson" /><br />

                <button onClick={registerHandler}>Регистрация</button>
                {
                    lessonsChapter.themes && lessonsChapter.themes.map((lesson, i) => (
                        <>
                            <h3>
                                {lesson.themeName}
                            </h3>
                            {
                                lesson.lessons && lesson.lessons.map((lessonName, i) => (
                                    <div key={i} onClick={() => chooseLesson(lessonName.name)}>
                                        {lessonName.title}
                                    </div>
                                ))
                            }
                        </>
                    ))
                }
            </div>
        </>
    )
}
