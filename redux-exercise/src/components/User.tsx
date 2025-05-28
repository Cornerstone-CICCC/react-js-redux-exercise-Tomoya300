import { useDispatch, useSelector } from "react-redux"
import { incrementAge, setFirstname, setLastname } from "./UserSlice"

type UserState = {
  user: {
    firstname: string,
    lastname: string,
    age: number
  }
}

const User = () => {
  const { firstname, lastname, age } = useSelector((state: UserState) => state.user)
  const dispatch = useDispatch()

  const handleIncrementAge = () => {
    dispatch(incrementAge())
  }

  return (
    <div>
      <h1>User</h1>
      <h3>Fullname: {firstname} {lastname} Age: {age}</h3>
      <div>
        <button onClick={handleIncrementAge}>Increment Age</button>
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" value={firstname} onChange={e => dispatch(setFirstname(e.target.value))} />
        <label htmlFor="lastname">Last Name</label>
        <input type="text" value={lastname} onChange={e => dispatch(setLastname(e.target.value))} />
      </div>
    </div>
  )
}

export default User