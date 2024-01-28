import Form from "./Form";

const List = ({ data, showForm }) => {
  console.log(showForm);
  return (
    <div className=" overflow-y-auto my-10  ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        {data.map((dataItem) => (
          <div
            className=" flex flex-col justify-center items-center"
            key={dataItem.id}
          >
            <div className="shadow-lg w-[350px] mx-auto flex flex-col justify-center items-center py-5 ">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src={dataItem.img}
                  className="w-full h-full object-cover rounded-full"
                  alt=""
                />
              </div>
              <h3 className="font-[Ubuntu] font-bold text-2xl mt-5 mb-1">
                {dataItem.name}
              </h3>
              <p className="font-[Ubuntu]  text-green-800 font-bold">
                {dataItem.email}
              </p>
              <p className="font-[Ubuntu] font-medium text-xl">
                {dataItem.city}
              </p>
              <button className="text-white py-2 px-5 rounded-full bg-green-800 hover:bg-green-700 mt-1  border-none outline-none">
                contact
              </button>
            </div>
            {showForm && <Form showForm={showForm} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
