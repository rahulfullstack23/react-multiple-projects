// component that receives

// const UserCard = ({name,age,city,role}) => {
//   return (
//     <div>
//         <h2>{name}</h2>
//         <p>{age}</p>
//         <p>{city}</p>
//         <p>{role}</p>
      
//     </div>
//   )
// }

// export default UserCard

// usercard with default props

const UserCard = (props) => {

    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.city}</p>
            <p>{props.role}</p>
        </>
    );
}

export default UserCard;