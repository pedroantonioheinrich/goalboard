

export async function getCryptoPrice(symbol:string){
    const cryptoMap: Record<string, string> = {
        BTC: "bitcoin",
        ETH: "ethereum",
    }

    const coinId = cryptoMap[symbol]


    try{
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`)
        if(!response.ok){
            throw new Error('erro ao buscar dados')
        }
        const data = await response.json()

        return data[coinId].usd

    }catch(erro){
        console.log('Erro ', erro)
    }

    
}
