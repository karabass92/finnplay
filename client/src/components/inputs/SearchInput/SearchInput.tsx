import { FC, useState } from 'react'
import search from '../../../assets/img/search.svg'
import styles from './SearchInput.module.css'


type Props = {
    searchValue: string,
    setSearchValue: (searchValue: string) => void
}


const SearchInput: FC<Props> = ({
    searchValue,
    setSearchValue
}) => {

    const [isFocused, setIsFocused] = useState<boolean>(false)

    return (
        <div className={styles.container}>
            <input 
                type="text" 
                value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)}
                className={styles.searchInput}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <span className={(isFocused || searchValue ) ? styles.active : styles.placeholder}>
                Search
            </span>
            <img src={search} alt="" />
        </div>
    )
}


export default SearchInput