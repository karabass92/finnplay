import { FC, useState, useEffect } from 'react'
import { useDebounce } from '../../shared/hooks/hooks'
import search from '../../shared/images/search.svg'
import styles from './SearchInput.module.scss'


type Props = {
    searchValue: string,
    setSearchValue: (searchValue: string) => void
}


const SearchInput: FC<Props> = ({
    searchValue,
    setSearchValue
}) => {

    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [value, setValue] = useState<string>(searchValue)

    const debouncedSearchValue = useDebounce(value, 1000)

    useEffect(() => {
        setSearchValue(debouncedSearchValue)
    }, [debouncedSearchValue, setSearchValue])

    return (
        <div className={styles.container}>
            <input 
                type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <span className={(isFocused || value ) ? styles.active : ''}>
                Search
            </span>
            <img src={search} alt="" />
        </div>
    )
}


export default SearchInput