import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {ChangeEvent, useEffect, useState} from "react";
import axiosAPI from "../axios/AxiosAPI.tsx";

interface Props{
    title:string;
    content:string;
}
const FormEdit = () => {

    const [selectedValue, setSelectedValue] = useState<string>('home');
    const [pageInfo, setPageInfo] = useState<Props>({ title: '', content: '' });

    const getValue = (e: SelectChangeEvent) => {
        const value = e.target.value;
        setSelectedValue(value);
    };

    useEffect(() => {
        axiosAPI.get(`/pages/${selectedValue}.json`)
            .then(response => {
                setPageInfo(response.data);
            })
    }, [selectedValue]);


    const getTitleValue = (event: ChangeEvent<HTMLInputElement>) => {
        setPageInfo({ ...pageInfo, title: event.target.value });
    };

    const getContentValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setPageInfo({ ...pageInfo, content: event.target.value });
    };

    return (
        <div>
            <FormControl fullWidth sx={{marginTop: '50px'}}>
                <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Page"
                    value={selectedValue}
                    onChange={getValue}
                    sx={{
                        color: 'white',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                        '& .MuiSvgIcon-root': {
                            color: 'white',
                        },
                    }}
                >
                    <MenuItem value={'home'}>Home</MenuItem>
                    <MenuItem value={'about'}>About</MenuItem>
                    <MenuItem value={'contacts'}>Contacts</MenuItem>
                    <MenuItem value={'faq'}>FAQ</MenuItem>
                    <MenuItem value={'services'}>Services</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Title"
                value={pageInfo.title}
                fullWidth
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
                onChange={getTitleValue}
                sx={{
                    color: 'white',
                    marginTop:'75px',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '& .MuiSvgIcon-root': {
                        color: 'white',
                    },
                }}
            />
            <TextField
                label="Content"
                value={pageInfo.content}
                fullWidth
                margin="normal"
                multiline
                rows={4}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
                onChange={getContentValue}
                sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '& .MuiSvgIcon-root': {
                        color: 'white',
                    },
                }}
            />
        </div>
    );
};

export default FormEdit;