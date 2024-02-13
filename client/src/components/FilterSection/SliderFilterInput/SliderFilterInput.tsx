import { FC } from 'react'
import styles from './SliderFilterInput.module.css'


type Props = {
    value: number,
    setValue: (newValue: number) => void
}


const SliderFilterInput: FC<Props> = ({
    value,
    setValue
}) => {
    return (
        <section className={styles.container}>
            <h2>Columns</h2>
            <input 
                type="range" 
                min={2} 
                max={4} 
                value={value} 
                onChange={(e) => setValue(Number(e.target.value))}
            />
        </section>
    )
}


export default SliderFilterInput