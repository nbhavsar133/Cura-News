import { Link } from "react-router";

interface ArticleProps{
   Datee: string; 
   Title: string;
   Description: string;
   Linked: string
}

//replace predefined text with props from parent 

export default function Article({Datee, Title, Description, Linked}: ArticleProps) {
    const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long' // Options: 'short', 'medium', 'long', 'full'
  }).format(new Date(Datee));
    return(
        <Link to = {Linked} target="_blank" rel="noopener noreferrer">
            <button className="flex-items-center bg-blue-50 pt-2 pb-2 hover:bg-blue-100 py-1 px-1 rounded" >
                        <h1 className="flex pt-8 text-sky-600 " style={{fontSize: "16px"}}>
                            {formattedDate}: {Title}
                        </h1>
                        <h2 className = "flex pt-2 pb-6 text-blue-300" style={{fontSize: "12px"}}> 
                            {Description}
                        </h2>
            </button>
        </Link>               
    )





}