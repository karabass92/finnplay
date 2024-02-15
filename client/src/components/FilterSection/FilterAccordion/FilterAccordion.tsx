import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import {     
    setColumnsAmount, 
    setProviderFilter,
    setGroupFilter,
    setSortingType,
    resetAllFilters 
} from '../../../store/reducers/filterSlice'
import {createSelector} from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'
import MultiselectInput from '../MultiselectInput/MultiselectInput'
import Sorter from '../Sorter/Sorter'
import SliderFilterInput from '../SliderFilterInput/SliderFilterInput'
import styles from './FilterAccordion.module.scss'


type Props = {
    isVisible: boolean
}


const FilterAccordion: FC<Props> = ({ isVisible }) => {

    const dispatch = useAppDispatch()

    const selectProviders = createSelector(
        (state: RootState) => state.data.providers,
        (rawValue) => rawValue.map(el => ({id: el.id, name: el.name}))
    )
    const providerFilter = useAppSelector((state) => state.filters.providerFilter)
    const onProviderFilterChange = (newFilter: number[]) => dispatch(setProviderFilter(newFilter))

    const selectGroup = createSelector(
        (state: RootState) => state.data.groups,
        (rawValue) => rawValue.map(el => ({id: el.id, name: el.name}))
    )
    const groupFilter = useAppSelector((state) => state.filters.groupFilter)
    const onGroupFilterChange = (newFilter: number[]) => dispatch(setGroupFilter(newFilter))

    const currentSortType = useAppSelector((state) => state.filters.sorting)
    const onSortTypeChange = (sortType: string) => dispatch(setSortingType(sortType))

    const columnsAmount = useAppSelector((state) => state.filters.columnsAmount)
    const onColumnsAmountChange = (columnsAmount: number) => dispatch(setColumnsAmount(columnsAmount))

    const gamesAmount = useAppSelector((state) => state.data.gamesAmount)

    const resetFiltersHandler = () => dispatch(resetAllFilters())

    return (
        <div className={isVisible ? styles.isVisible : styles.container}>
            <MultiselectInput 
                header='Providers' 
                options={useAppSelector(selectProviders)}
                currentFilter={providerFilter}
                setFilter={onProviderFilterChange}
            />
            <MultiselectInput 
                header='Game groups' 
                options={useAppSelector(selectGroup)}
                currentFilter={groupFilter}
                setFilter={onGroupFilterChange}
            />
            <Sorter
                sortType={currentSortType}
                setSortType={onSortTypeChange}
            />
            <SliderFilterInput
                minValue={2}
                maxValue={4}
                value={columnsAmount}
                setValue={onColumnsAmountChange}
            />
            <div className={styles.gamesAmountInfo}>
                <span>{`Games amount: ${gamesAmount}`}</span>
                <div onClick={resetFiltersHandler}>Reset</div>
            </div> 
        </div>
    )
}


export default FilterAccordion