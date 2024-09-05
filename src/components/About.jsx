
export default function  About(props) {
    console.log(props)
    return(
        <div>
            <h3 className="heading">
            {props.title}            </h3>
            <div className="detail">
            AADIM NATIONAL COLLion or
            
            </div>
            <button className="btn btn-warning">
                Read more {props.tag}
            </button>
        </div>
    )
}