const llamadaApi = async ()=>{
    try{
        const llamada =  await fetch('https://pokeapi.co/api/v2/pokemon/45')
        const datos = await llamada.json()
        console.log(datos)
    }
    catch(error){
        console.log("detectado error",error);
    }
}

llamadaApi()


//----- OPCION 2

// const llamadaApi = async ()=>{
//     try{
//         const llamada =  await(await fetch('https://pokeapi.co/api/v2/pokemon/45')).json()
//         console.log(llamada)
//     }
//     catch(error){
//         console.log("detectado error",error);
//     }
//   }
  
//   llamadaApi()