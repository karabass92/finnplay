import { FC } from 'react'
import { IMultiselectInputOptions } from '../../../interfaces/interfaces'
import FilterItem from '../FilterItem/FilterItem'
import styles from './MultiselectInput.module.scss'


type Props = {
    header: string,
    options: IMultiselectInputOptions[] | undefined,
    currentFilter: number[],
    setFilter: (newFilter: number[]) => void
}


const MultiselectInput: FC<Props> = ({ 
    header,
    options, 
    currentFilter, 
    setFilter 
}) => {
    return (
        <section className={styles.container}>
            <h2>{header}</h2>
            <div className={styles.groupsContainer}>
                {
                    options?.map(option => {
                        return (
                            <FilterItem 
                                key={option.id} 
                                id={option.id} 
                                value={option.name}
                                filterArray={currentFilter}
                                changeFilter={setFilter}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}


export default MultiselectInput