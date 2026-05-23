import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"

import {AssetItem} from "../components/AssetItem.tsx"

import {getCryptoPrice} from "../services/marketService.ts"


type Asset = {
    symbol: string,
    price: number
}

export function Portfolio(){
    const [assets, setAssets] = useState<Asset[]>(JSON.parse(
      localStorage.getItem("assets") || "[]"
    ))
    const [newAsset, setNewAsset] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()


    useEffect(()=>{
        localStorage.setItem('assets', JSON.stringify(assets))
    },[assets])

    useEffect(()=>{
        async function refreshPrices(){
            const updateAssets = await Promise.all(
                assets.map(async (asset)=>{
                    const newPrice = await getCryptoPrice(asset.symbol)
                    return {
                        ...asset, 
                        price: newPrice
                    }
                })
            )
            setAssets(updateAssets)
        }
        refreshPrices()
        
    }, [])

    async function handleAddAsset(){
        const normalizeAsset = newAsset.toUpperCase().trim()
        if(!normalizeAsset){
            setMessage("The asset field must be filled!")
            return
        }
        if(assets.some(asset => asset.symbol === normalizeAsset)){
            setMessage(normalizeAsset + ' is on the list!')
            return
        }
        const price = await getCryptoPrice(normalizeAsset)

        setAssets([...assets, {
            symbol: normalizeAsset,
            price: price

        }])
        setNewAsset("")
        setMessage("")
    }

    function handleRemoveAsset(symbol : string){
        setAssets(assets.filter((item)=> item.symbol !== symbol))
        setMessage(symbol + ' was deleted!')
    }

    const total = assets.reduce((sum, asset)=> sum + asset.price, 0)
    return(
        <div>
            <h1>My Portfolio</h1>
            <button onClick={()=> navigate('/profile')}>Profile</button>
            <button onClick={()=> navigate('/dashboard')}>Dashboard</button>
            <input type="text" value={newAsset} onChange={(e)=>{setNewAsset(e.target.value)}} placeholder="Type your asset here..."/>
            <p>{message}</p>
            <button onClick={handleAddAsset}>Add</button>
            
            <p>Asset list:</p>
            {assets.map((asset)=>(<AssetItem key={asset.symbol} symbol={asset.symbol} price={asset.price}  onDelete={handleRemoveAsset}/>))}
            <p>Total portfolio value: ${total}</p>

        </div>
    )
}