import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ADD_CHARACTER } from "../../queries/character-query";

const AddPage = () => {

  const navigate = useNavigate();

  // State For Inputs
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [actor, setActor] = useState("");
  const [alive, setAlive] = useState(true);
  const [image, setImage] = useState("");

  // Graphql Query
  const [addCharacter] = useMutation(ADD_CHARACTER);

  // Handler For Submit
  const handlerForSubmit = async () => {
    try {
      await addCharacter({ variables: { input: { name: name, gender: gender, actor: actor, alive: alive, image: image } } });
      navigate("/");
    } catch (error) {
      console.log("Error Occure While Adding Character");
      console.log(error);
    }
  };

  // Handler For Back
  const handlerForBack = () => {
    setName("");
    setGender("");
    setActor("");
    setAlive(true);
    setImage("");
    navigate("/");
  }

  return (
    <div className="container border border-3 rounded p-3 p-md-5" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender:</label>
            <div className="form-check">
              <input
                type="radio"
                name="gender"
                id="rd1"
                value={gender}
                className="form-check-input"
                checked={gender === "male" ? true : false}
                onChange={(e) => setGender("male")}
              />
              <label htmlFor="rd1" className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="gender"
                id="rd2"
                value={gender}
                className="form-check-input"
                checked={gender === "female" ? true : false}
                onChange={(e) => setGender("female")} />
              <label htmlFor="rd2" className="form-check-label">Female</label>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="actor" className="form-label">Actor:</label>
            <input
              type="text"
              name="actor"
              id="actor"
              className="form-control"
              value={actor}
              onChange={(e) => setActor(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                name="alive"
                id="cb1"
                className="form-check-input"
                checked={alive ? true : false}
                onChange={(e) => setAlive(!alive)} />
              <label htmlFor="cb1" className="form-check-label">Alive</label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image:</label>
            <input
              type="text"
              name="image"
              id="image"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-12 col-md-12">
        <button
            type="button"
            onClick={handlerForSubmit}
            className="w-100 my-1 btn btn-primary"
          >Sumit</button>
          <button
            type="button"
            onClick={handlerForBack}
            className="w-100 my-1 btn btn-info"
          >Back</button>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
