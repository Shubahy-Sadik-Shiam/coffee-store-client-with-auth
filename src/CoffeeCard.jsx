import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, details, photo } = coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side mt-10 bg-[#F4F3F0] shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex gap-5 pt-7">
          <div className="ml-3 pt-2">
            <h2 className="card-title">{name}</h2>
            <p>{details}</p>
            <p>{quantity}</p>
            <p>{supplier}</p>
          </div>
          <div className="card-actions justify-end ">
            <div className="join join-vertical space-y-3">
              <button className="btn bg-[#f5e4b1] join-item">View</button>
              <Link to={`/updateCoffee/${_id}`}>
                <button className="btn bg-[#f5e4b1] join-item">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn text-lg bg-red-400 join-item"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
