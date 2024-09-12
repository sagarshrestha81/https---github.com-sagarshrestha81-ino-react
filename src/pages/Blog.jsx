import { Link } from 'react-router-dom';
import "./Blog.css";
export default function Blog() {
   
      const data = [
        {
          id: 1,
          name: "hari",
          detail: "lives in koteshwor",
        },
        {
          id: 2,
          name: "ram",
          detail: "lives in chabahil",
        },
        {
          id: 3,
          name: "Shyam",
          detail: "lives in Jorpati",
        },
        {
          id: 4,
          name: "Krishna",
          detail: "lives in Jadibuti",
        },
      ];
    
      const DataList = () => {
        return (data.map((item, idx) => {
          return (
            <div className="p-1 col-lg-2 col-md-4 col-sm-6" key={idx}>
              <div className={`card ${idx % 2== 0 ? "active":"" }`} >
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.detail}</p>
                  <Link to={`/blog/detail/${item.id}/class${item.id+10}`} className="btn btn-primary">
                    View {item.id}
                  </Link>
                </div>
              </div>
            </div>
          );
        }))
      };
    
      return (
        <>
          <div className="container">
            <div className="row">{DataList()}</div>
          </div>
        </>
      );
    }
    