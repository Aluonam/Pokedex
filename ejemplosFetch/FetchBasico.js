const llamadaApi = async ()=>{
    const llamada =  await fetch('https://pokeapi.co/api/v2/pokemon/45')
    const datos = await llamada.json()
     console.log(datos); 
 }
//---------------------------------------- OPCION 2
//  const llamadaApi = async ()=>{
//      const llamada = await(await fetch('https://pokeapi.co/api/v2/pokemon/45')).json()
//     console.log(llamada)
//   }


llamadaApi();