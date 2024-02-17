import { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/appStore'
import { setSearchValue } from '../../entities/filter/api/filterSlice'
import SearchInput from '../../features/SearchInput/SearchInput'
import FilterAccordion from '../FilterAccordion/FilterAccordion'
import burger from '../../shared/images/burger.svg'
import styles from './FilterSection.module.scss'


const FilterSection: FC = () => {

    const dispatch = useAppDispatch()
    const [isShowFilters, setIsShowFilters] = useState<boolean>(false)

    const searchValue = useAppSelector((state) => state.filters.searchValue)
    const onSearchValueChange = (newValue: string) => dispatch(setSearchValue(newValue))

    return (
        <section className={styles.container}>
            <SearchInput 
                searchValue={searchValue} 
                setSearchValue={onSearchValueChange} 
            />
            <FilterAccordion
                isVisible={isShowFilters}
            />
            <div className={styles.showSwitch} onClick={() => setIsShowFilters(!isShowFilters)}>
                <img src={burger} alt="show/hide" />
                <span>
                    Hide filters 
                </span>
            </div>
        </section>
    )
}


export default FilterSection