import { React, useState, useEffect } from 'react';
import { postData } from '../../helpers/Functions';
import { APIURL } from '../../helpers/Contants';

const ChannelForm = ({ setChannelId }) => { 
    const [channelName, setchannelName] = useState("");
    const [channels, setchannels] = useState([
        { label: "Loading ...", value: "" }
    ]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState();

    useEffect(() => {
        let unmounted = false;
        const getchannels = async () => {
            const response = await fetch(`${APIURL}/channels`);
            const body = await response.json();
            if (!unmounted) {
                setchannels(body.map(({ name, id }) => ({ label: name, value: id })));
                setLoading(false);
            }
        }
        getchannels();
        return () => {
            unmounted = true;
        };
    }, [])

    const handleSave = async (e) => {
        e.preventDefault()
        const response = await fetch(`${APIURL}/channels/${channelName}`);
        if (!response.ok) {
            const newchannel = await postData(`${APIURL}/channels`, { name: `${channelName}` })
        }
    }

    const handleOnChange = (e) => {
        setValue(e.currentTarget.value)
        setChannelId(e.currentTarget.value)
    }

    return (
        <div>
            <form>
                <label>Channel Name</label>
                <input className="channel-input" value={channelName} onChange={(e) => { setchannelName(e.target.value) }} />
                <button type="submit" className="message-submit" onClick={handleSave}>
                    Create channel
            </button>
                <br />
                <label for="channels">Available channels</label>
                <select name="channels" id="channels" disabled={loading} onChange={handleOnChange}>
                    {channels.map(({ label, value }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    )
};

export default ChannelForm;