import './List.css'

const List = (users) => {
    return (
        <div className='listGroup'>
        {users.users.map((e,idx) => (
            <ul key={idx}>
                <li>{e.username}</li>
                <li>{e.email}</li>
                <li>{e.phone}</li>
            </ul>
        ))}
        </div>
    )
}
export default List