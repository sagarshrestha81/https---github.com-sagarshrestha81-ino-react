import { useParams } from "react-router-dom";
export default function BlogDetail(){

    const {id,classes}= useParams();
    // const params= useParams();

    console.log(id);
    console.log(classes);
    
    return <>blog detail {id} </>
}