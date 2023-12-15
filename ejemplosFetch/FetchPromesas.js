const llamadaApi = async ()=>{
      
    await fetch('https://pokeapi.co/api/v2/pokemon/45')
         .then((respuesta)=>{
             respuesta.json()
                .then((evento)=>{
                    console.log(evento);
                   })
                .catch(()=>{ 
                    console.log("detectado error Json"); 
                   })
             
         })
         .catch((error)=>{
             console.log("detectado error llamada",error);
         })
        
}


llamadaApi();

