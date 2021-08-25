

export const Users = ({data}) => { 
    return(    
        <div className="users">
            <div ><img  className="img" src={data.img} alt="flags" /></div>
            <p>Name: {data.full_name}</p>
            <p>Age: {data.age}</p>
            <p>Country: {data.country}</p>
            <hr />

        </div>
    )
}