import { useEffect, useState } from "react";


// search da(Prodakshin da) ishlatiladi
export function useDebounce(value, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}