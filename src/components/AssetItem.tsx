
type AssetItemProps = {
    symbol : string
    price: number
    onDelete: (symbol: string) => void
}

export function AssetItem({symbol, price, onDelete}: AssetItemProps){
    
    return(
        <div key={symbol}>
            {symbol} - Price: {price}
            <button onClick={()=> onDelete(symbol)}>Delete</button>
        </div>
    )
}