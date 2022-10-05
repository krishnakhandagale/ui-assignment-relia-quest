
import clsx from "clsx";
import { useCallback } from "react";
import { debounce } from "../../utils";

import { useStyles } from "./SearchBox.styled"
import { Props } from "./types";

export const SearchBox: React.FC<Props> = ({ placeholder = 'Search ...', onChange, isCaseInsensitive }: Props) => {

    const classes = useStyles();

    const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value || "";
        onChange && onChange(isCaseInsensitive ? text.toLocaleLowerCase().trim() : text.trim());
    }

    const onQueryChangeDebounced = useCallback(debounce(onQueryChange, 500), [onQueryChange]);

    return <div className={classes.searchBoxCnt}>
        <span className={clsx(classes.icon,'material-icons')}>search</span>
        <input
            className={classes.searchInput}
            type='search'
            placeholder={placeholder}
            onChange={(e) => onQueryChangeDebounced(e)}
        />
        
    </div>
};