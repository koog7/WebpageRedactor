import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {ChangeEvent, useEffect, useState} from "react";
import axiosAPI from "../axios/AxiosAPI.tsx";
import {useNavigate} from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';

interface Props{
    title:string;
    content:string;
}
const FormEdit = () => {

    const [selectedValue, setSelectedValue] = useState<string>('home');
    const [pageInfo, setPageInfo] = useState<Props>({ title: '', content: '' });
    const navigate = useNavigate();

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

    const getContentValue = (content: string) => {
        setPageInfo({ ...pageInfo, content: content  });
    };
    const putData = async () => {
        await axiosAPI.put(`/pages/${selectedValue}.json`, pageInfo)
        await navigate(`/pages/${selectedValue}`)
    }
    return (
        <div>
            <FormControl fullWidth sx={{marginTop: '50px'}}>
                <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>Page</InputLabel>
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
            <Editor
                apiKey="n2ytyxjlf985xw9tvzqe223rod497qp5yqnvpdomo46d76g0"
                onEditorChange={getContentValue}
                value={pageInfo.content}
                init={{
                    height: 300,
                    menubar: false,
                    toolbar:
                        'undo redo copy | formatselect | \
                        fontsize bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | \
                        removeformat | help'
                }}
            />
            <Button variant="contained" onClick={putData}>Submit changes!</Button>
        </div>
    );
};

export default FormEdit;