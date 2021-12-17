import './Tiles.css'

const Tiles = (users) =>{
    return (
        <div className='cardGroup'>
            {users.users.map((e,idx) => (
                <article className='card' key={idx}>
                    <h2>{e.username}</h2>
                    <p>{e.email}</p>
                    <p>{e.phone}</p>
                </article>
            ))}
        </div>
    )
}
export default Tiles