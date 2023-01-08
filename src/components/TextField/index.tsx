import 'react'
import styles from './styles.module.scss'

const TextField = ({ type, textParts }: any) => {
    return (<div className={styles.input}>
        {textParts.map((part: {
            text: string;
            bold?: boolean;
            italic?: boolean;
            underline?: boolean;
            strike?: boolean;
            linkUrl?: string;
        })=> {
            const modifiers: any[]| undefined = Object.keys(part)
            modifiers.shift()
            if(modifiers && modifiers.length>=1){
                return <span className={`${(modifiers.map(i=>styles[i])).join(' ')}`}>{part.text}</span>
            }

            return <>{part.text}</>
        })}
    </div>)
}

export default TextField