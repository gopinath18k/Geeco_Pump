import React from 'react'

export const WarrantyRegistration = () => {

  var Pumps=["Submersible","Borewell","Jet Pump","Water Pump"] 
  
  for(let i=0;i<Pumps.length;i++){
    Pumps=Pumps+"/n"
    
  }
    // console.log(Pumps)
  return (
    <div>WarrantyRegistration
      <>
      {/* {Pumps.map((pump)=>(
        <li key={pump.id}>{Pumps}</li>
        
      ))} */}
      

      
      </>
    </div>
  )
}
