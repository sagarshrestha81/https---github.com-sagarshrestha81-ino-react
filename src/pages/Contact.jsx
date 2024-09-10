export default function Contact() {
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
        <div className="p-1 col-lg-2 col-md-4 col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.detail}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere {item.id}
              </a>
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
