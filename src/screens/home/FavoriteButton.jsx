import { memo, useState } from "react"

function FavoriteButton() {
    const [isFavorite, setIsFavorite] = useState(false)

    // useEffect(() => {
    //     console.log("Holat o'zgardi!")
    // }, [isFavorite])


    return (
        <button onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? '💖' : '🤍'}
        </button>)
}


// export default FavoriteButton
export default memo(FavoriteButton)