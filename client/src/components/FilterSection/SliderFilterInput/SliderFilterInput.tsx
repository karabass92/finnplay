import { FC } from 'react'
import styles from './SliderFilterInput.module.css'


type Props = {
    minValue: number,
    maxValue: number,
    value: number,
    setValue: (newValue: number) => void
}


const SliderFilterInput: FC<Props> = ({
    minValue,
    maxValue,
    value,
    setValue
}) => {

    const sliderMarkerArray = Array.from({length: (maxValue - minValue - 1)}, (_, i) => minValue + i + 1)
    
    return (
        <section className={styles.container}>
            <h2>Columns</h2>
            <div className={styles.range}>
                <div 
                    className={`${styles.value} ${styles.left} ${value >= minValue ? `${styles.active}` : null}`}
                    onClick={() => setValue(minValue)}
                >
                    {minValue}
                </div>
                {
                    sliderMarkerArray.length > 0 
                    ? sliderMarkerArray.map((el, index) => {
                            return (
                                <div
                                    key={el}
                                    style={{
                                        left: `calc((100% - 24px)*${index + 1}/${maxValue - minValue})`
                                    }}
                                    className={`${styles.value} ${value >= el ? `${styles.active}` : null}`}
                                    onClick={() => setValue(el)}
                                >
                                    {el}
                                </div>
                            )
                        })
                    : null
                }
                <div 
                    className={`${styles.value} ${styles.right} ${value >= maxValue ? `${styles.active}` : null}`}
                    onClick={() => setValue(maxValue)}
                >
                    {maxValue}
                </div>
                <input 
                    type='range' 
                    min={minValue} 
                    max={maxValue} 
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                />
            </div>
        </section>
    )
}


export default SliderFilterInput