import {useNavigate, useParams} from "react-router-dom";
import axiosAPI from "../axios/AxiosAPI.tsx";
import {useEffect, useState} from "react";
interface Props{
    title:string;
    content:string;
}
const Home = () => {
    const [pageData , setPageData] = useState<Props>()
    const navigate = useNavigate();
    const {pageName} = useParams();


    useEffect(() => {
        if(window.location.pathname === '/'){
            axiosAPI.get(`/pages/home.json`)
                .then(response => {
                    setPageData(response.data)
                });
        }else if(window.location.pathname !== '/' && pageName !== 'admin'){
            axiosAPI.get(`/pages/${pageName}.json`)
                .then(response => {
                    setPageData(response.data)
                });
        }
    }, [pageName]);

    return (
        <div className={'page-block'}>
            {pageData ? (
                <>
                    <h1>{pageData.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: pageData.content }}></p>
                </>
            ) : (
                <p>Something gone wrong...</p>
            )}
        </div>
    );
};

export default Home;