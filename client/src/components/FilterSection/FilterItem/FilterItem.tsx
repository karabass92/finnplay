import { FC } from 'react'
import styles from './FilterItem.module.css'


type Props = {
    id: number,
    value: string,
    filterArray: number[],
    changeFilter: (filterArray: number[]) => void
}


const FilterItem: FC<Props> = ({ 
    id, 
    value, 
    filterArray, 
    changeFilter 
}) => {

    const onClickHandler = () => {
        let newFilter: number[] = []
        if(filterArray.includes(id)) {
            newFilter = filterArray.filter(el => el !== id)
            changeFilter(newFilter)
            return
        }
        newFilter = filterArray.concat(id)
        changeFilter(newFilter)
    }

    return (
        <div 
            className={filterArray.includes(id) ? styles.checked : styles.default} 
            onClick={onClickHandler}
        >
            <span>{value}</span>
        </div>
    )
}


export default FilterItem