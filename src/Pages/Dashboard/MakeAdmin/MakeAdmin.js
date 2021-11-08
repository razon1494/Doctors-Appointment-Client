import {Alert, Button, TextField} from '@mui/material';
import React, {useState} from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin=() => {
    console.log('h');
    const [email, setEmail]=useState('');
    const [success, setSuccess]=useState(false);
    const {token}=useAuth();
    const handleAdminSubmit=e => {
        const user={email};
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                'authorization' : `Bearer ${token}`,
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json()).then(data => {
            if(data.modifiedCount) {
                console.log('Success', data);
                setEmail('')
                setSuccess(true)
            }

        })

        e.preventDefault();
    }
    const handleOnBlur=e => {
        setEmail(e.target.value);

    }
    return (
        <div>
            <h2>Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField id="standard-basic" label="Email" type="email" sx={{width:'50%'}} onBlur={handleOnBlur} variant="standard"  />
                <Button type="submit" variant='contained' >Make Admin</Button>
            </form>
            {
                success && <Alert severity='success'>Admin created</Alert>
            }
        </div>
    );
};

export default MakeAdmin;