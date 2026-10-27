import { useEffect,useState } from "react";
import {Link} from "react-router"
import Article from "~/components/article";
import axios from "axios";
// import { type ArticleTypes } from "./politics";
interface ArticleTypes{
    publishedAt: string
    title: string
    description: string
    url: string

}

export default function Technology() {

    const [articles, setArticles]= useState([]);
    useEffect(()=>{

        axios.get(`http://localhost:3000/technology`)
        .then((res)=>{

            setArticles(res.data.articles)
        })
        .catch((error)=>(console.log(error)))

    }, [])

    console.log(articles)
    return(

        <main className="flex items-center justify-center pt-28 pb-16 flex-col text-sky-600">
            <h1 className="self-start pl-16" style={{fontSize: "48px", fontWeight: "bold"}}>
                    Technology</h1>
            <div className="flex items-center flex pt-16 text-indigo-500 flex-col" style={{fontSize: "32px"}}>
                <Link to="/welcome">
                    <button className="bg-sky-100 hover:bg-blue-200 py-2 px-4 rounded">
                        Back to Welcome
                    </button>
                </Link>
                <div className="grid grid-cols-3 gap-3 mt-10 mx-3">
                    {
                       articles.map((a:ArticleTypes) =>(
                            <Article key= {a.url} Linked = {a.url} Datee={a.publishedAt} Title={a.title} Description={a.description}></Article>
                        ))
                    
                    
                    }
                </div>
            </div>





        </main>



    )
}





