export async function loginUser(
    email: string,
    password: string
){
    await new Promise((resolve)=>{
        setTimeout(resolve, 1000)
    })
    return email === "pedro@email.com" && password === "12345"
}



