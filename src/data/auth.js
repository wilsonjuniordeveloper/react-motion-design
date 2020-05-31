export function signIn(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve({
                token: '0187rerg0grghtr77hrtthr3r3rdsb76idbtircbtr673cbrsa',
                user: {
                    name: 'Dirgo',
                    email: 'diego@rocketsat.com.br'
                }
            })
        },2000)
    })
}