import { users } from "./data";
import { Users } from "./Users";
import { useState } from "react";

export const ParentFilter = () => {    
    
    const [ country , setCountry] =useState(3); 
    const [ age , setAge] = useState(4);
        
        const UsersFilter = () => {   
            

    switch(age) {
        case 1:
            let under18 = users.filter((el)=>{
                return(el.age <18)
            })
           //Улутту чыгаруу 
            switch(country) { 
                case 1: 
             let kyrgyz18 = under18.filter((el)=>{
                 return el.country == "Kyrgyz"
             })
             //map улут
             return ( kyrgyz18.map((el)=>{
                 return(
                     <div>
                      <Users data ={el}/>
                     </div>
                 )
             })

             )
             case 2: 
             let others18 = under18.filter((el)=>{
                 return el.country != "Kyrgyz"
             })
             //map улут
             return ( others18.map((el)=>{
                 return(
                     <div>
                      <Users data ={el}/>
                     </div>
                 )
             })

             )
             case 3: 
             
             return ( under18.map((el)=>{
                 return(
                     <div>
                      <Users data ={el}/>
                     </div>
                 )
             })

             )
             
             
            }
            // улут бүттү
            case 2:
            let from18to24 = users.filter((el)=>{
                return(el.age > 18 && el.age < 24)
            })
            switch(country) { 
                case 1: 
             let kyrgyzfrom18to24 = from18to24.filter((el)=>{
                 return el.country == "Kyrgyz"
             })
             //map улут
             return ( kyrgyzfrom18to24.map((el)=>{
                 return(
                     <div>
                      <Users data ={el}/>
                     </div>
                 )
             })

             )
             case 2: 
             let othersfrom18to24 = from18to24.filter((el)=>{
                 return el.country != "Kyrgyz"
             })
             //map улут
             return ( from18to24.map((el)=>{
                 return(
                     <div>
                      <Users data ={el}/>
                     </div>
                 )
             })

             )
             case 3: 
             
             return ( from18to24.map((el)=>{
                 return(
                     <div>
                      <Users data ={el}/>
                     </div>
                 )
             })

             )
             
             
            }
            case 3:
            let under24 = users.filter((el)=>{
                return(el.age > 24)
            })
            switch(country) { 
                case 1: 
             let kyrgyzunder24 = under24.filter((el)=>{
                 return el.country == "Kyrgyz"
             })
             //map улут
             return ( kyrgyzunder24.map((el)=>{
                 return(
                     <div>
                      <Users data ={el}/>
                     </div>
                 )
             })

             )
             case 2: 
             let othersunder24 = under24.filter((el)=>{
                 return el.country != "Kyrgyz"
             })
             //map улут
             return ( othersunder24.map((el)=>{
                 return(
                     <div>
                      <Users data ={el}/>
                     </div>
                 )
             })

             )
             case 3: 
             
             return ( under24.map((el)=>{
                 return(
                     <div>
                      <Users data ={el}/>
                     </div>
                 )
             })

             )
             
             
            }
            case 4:
            let all = users.filter((el)=>{
                return(el.age )
            })
            switch(country) { 
                case 1: 
             let kyrgyzall = all.filter((el)=>{
                 return el.country == "Kyrgyz"
             })
             //map улут
             return ( kyrgyzall.map((el)=>{
                 return(
                     <div>
                      <Users data ={el}/>
                     </div>
                 )
             })

             )
             case 2: 
             let othersall = all.filter((el)=>{
                 return el.country != "Kyrgyz"
             })
             //map улут
             return ( othersall.map((el)=>{
                 return(
                     <div>
                      <Users data ={el}/>
                     </div>
                 )
             })

             )
             case 3: 
             
             return ( all.map((el)=>{
                 return(
                     <div>
                      <Users data ={el}/>                      
                     </div>
                 )
             })

             )
             
             
            }
            
    }
    
   
}
   return(
        <div>
            <div className="buttons">
                <input type="button" className="button" value="under 18" onClick={()=>{setAge(1)}} />
                <input type="button" className="button" value="from 18 to 24" onClick={()=>{setAge(2)}} />
                <input type="button" className="button" value="from 24 to ***" onClick={()=>{setAge(3)}} />
                <input type="button" className="button"  value="all" onClick={()=>{setAge(4)}} />
            </div>
            <div className="buttons2">
                    <input className="btnnational" type="button" value="kyrgyz" onClick={()=>{setCountry(1)}} />
                    <input className="btnnational" type="button" value="others" onClick={()=>{setCountry(2)}} />
                    <input className="btnnational" type="button" value="all" onClick= {()=>{setCountry(3)}} />
            </div>
            <div>{UsersFilter()}</div>
        </div>
    )
}