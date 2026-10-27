import { useEffect, useState } from "react";
import { Link } from "react-router";
import Article from "~/components/article";
import axios from "axios"; 


interface ArticleTypes{
    pubDate: string
    title: string
    description: string
    link: string
}


export default function Politics() {

    const [articles, setArticles]= useState([]);

    useEffect(()=>{

        
        axios.get(`http://localhost:3000/politics`)
        .then((res)=>{
            // console.log(res.data.articles)
            setArticles(res.data.results)
            // take the articles staxe and use the map method and the articles component to display articles on the politics page
        // michael's last day, don't forget
        })
        .catch((error)=>{console.log(error)})





    },[]) 

        console.log(articles)
    return(
        <main className="flex items-center justify-center pt-28 pb-16 flex-col text-sky-600">
            <h1 className="self-start pl-16" style={{fontSize: "48px", fontWeight: "bold"}}>
                    Politics</h1>
           
            <div className="flex items-center flex pt-16 text-indigo-500 flex-col" style={{fontSize: "32px"}}>
                
                <Link to="/welcome">
                    <button className="bg-sky-100 hover:bg-blue-200 py-2 px-4 rounded">
                        Back to Welcome
                    </button>
                </Link>
                <div className="grid grid-cols-3 gap-3 mt-10 mx-3">
                  
                    {
                        articles.map((a:ArticleTypes) =>(
                            <Article key={a.link} Linked = {a.link} Datee={a.pubDate} Title={a.title} Description={a.description}></Article>
                        ))


                    }
                </div>
                
            </div>


        </main>

    )
}

