import styles from './index.module.scss';
import TextField from './components/TextField';



function App() {

    const headElements = [
        {
            icon: '',
            title: 'add icon',
            action: () => {
                console.log('add icon');
            },
        },
        {
            icon: '',
            title: 'add cover',
            action: () => {
                console.log('add cover');
            },
        },
    ];

    const page = [
        {
            type: 'text',
            children: [
                {
                    text: 'Nodari Bobari ',
                },
                {
                    text: 'suck ',
                    bold: true,
                },
                {
                    text: 'ballzzz ',
                    italic: true,
                },
                {
                    text: 'every day ',
                    italic: true,
                    bold: true,
                },
                {
                    text: 'link ',
                    linkUrl: 'https://www.smashingmagazine.com/2021/05/building-wysiwyg-editor-javascript-slatejs/',
                },
            ],
        },
    ];

    return (
        <div className='App'>
            <div className={styles.head}>
                <div className={styles.headCont}>
                    <ul className={styles.pageControls}>
                        {
                            headElements.map((element) => {
                                return <li key={element.title} className={styles.control} onClick={element.action}>
                                    <span></span>
                                    <p>
                                        {element.title}
                                    </p>
                                </li>;
                            })
                        }
                    </ul>
                    <div className={styles.title}>
                        <div
                            onInput={e => console.log(e.currentTarget.textContent)}
                            contentEditable='true'
                            spellCheck='true'
                            placeholder='Untitled'
                            className={styles.text}
                        >

                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.mainCont}>
                {
                    page.map((el, index)=> {
                        return <TextField type={el.type as any} textParts={el.children}/>
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default App;
