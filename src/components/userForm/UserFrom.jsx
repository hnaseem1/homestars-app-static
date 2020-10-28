import { React, useState, useEffect } from 'react';
import { postData } from '../../helpers/Functions';
import { APIURL } from '../../helpers/Contants';

const UserForm = ({ setUserId }) => {
const [userName, setUserName] = useState("");
const [users, setUsers] = useState([
    { label: "Loading ...", value: "" }
]);
const [loading, setLoading] = useState(true);
const [value, setValue] = useState();

useEffect(() => {
    let unmounted = false;
    const getUsers = async () => {
        const response = await fetch(`${APIURL}/users`);
        const body = await response.json();
        if (!unmounted) { 
            setUsers(body.map(({ username, id }) => ({ label: username, value: id })));
            setLoading(false);
        }
    }
    getUsers();
    return () => {
        unmounted = true;
    };
}, [])

const handleSave = async (e) => {
    e.preventDefault()
    const response = await fetch(`${APIURL}/users/${userName}`);
    if (!response.ok) {
        const newUser = await postData(`${APIURL}/users`, { username: `${userName}` })
    }
}

const handleOnChange = (e) => {
    setValue(e.currentTarget.value)
    setUserId(e.currentTarget.value)
}

return (
    <div>
        <form>
            <label>Username</label>
            <input className="user-input" value={userName} onChange={(e) => { setUserName(e.target.value) }}/>
            <button type="submit" className="message-submit" onClick={handleSave}>
                Create User
            </button>
            <br />
            <label for="channels">Available Users</label>
            <select name="users" id="users" disabled={loading} onChange={handleOnChange}>
                    {users.map(({ label, value }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
            </select>
        </form>
    </div>
    )
};

export default UserForm;