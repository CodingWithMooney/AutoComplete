import { optionType} from './../Types/index'

 
type Props = {
    data: optionType
}

const SelectedUser = ({data}:Props): JSX.Element => {
   
    return (
        <section className="text-center">
        <img src={data.image} alt="userProfilePicture" />
        <h2 className="text-2xl font-black">
          {data.firstName} {data.lastName}
        </h2>
        <h3 className="text-1xl font-extrabold">
            <label htmlFor="phoneNumber">Phone:</label>{data.phone}
        </h3>
        <h3 className="text-1xl ">
            <label htmlFor="email">Email:</label>{data.email}
        </h3>
        <h3 className="text-1xl ">
            <label htmlFor="username">Username:</label>{data.username}
        </h3>
        <h3 className="text-1xl ">
            <label htmlFor="age">Age:</label>{data.age}
        </h3>
        
      </section>
    )
}

export default SelectedUser