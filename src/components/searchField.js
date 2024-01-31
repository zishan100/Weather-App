import { TextField } from '@mui/material';

export default function ({ searchs, setSearchs }) {

    return (
        <TextField
            sx={{ marginTop: '1rem', width: '40%' }}
            id='outlined-input'
            variant='outlined'
            label='Enter Location'
            value={searchs}
            onChange={(e) => setSearchs(e.target.value)}
        />
    );
}