import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Pen, Trash3 } from "react-bootstrap-icons";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CHARACTERS, DELETE_CHARACTER } from "../../queries/character-query";

const CardPage = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [characters, setCharacters] = useState([]);

    // Graphql Client Query
    const { loading, error, data, refetch } = useQuery(GET_CHARACTERS);
    const [removeCharacterMutation] = useMutation(DELETE_CHARACTER);

    useEffect(() => {
        refetch();
    }, [refetch]);

    useEffect(() => {
        if (data && data.allCharacters) {
            setCharacters(data.allCharacters);
        }
    }, [data]);

    if (loading) { return <div>Loading</div> }
    if (error) { return <div>Error: {error.message}</div> }

    // Handler For View
    const handlerForView = (_id) => {
        navigate(`/view/${_id}`);
    }

    // Handler For Edit
    const handlerForEdit = (_id) => {
        navigate(`/edit/${_id}`);
    }

    // Handler For Remove
    const handlerForRemove = async (_id) => {
        try {
            await removeCharacterMutation({ variables: { id: _id } });
            refetch();
        } catch (error) {
            console.log("Error Occure While Removing Character");
            console.log(error.message);
        }
    };

    return (
        <>
            <div className="container border border-3 rounded p-3 m-3" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-8">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        name="search"
                                        id="search"
                                        className="form-control"
                                        placeholder="Search..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-4">
                                <Link to="/add" className="btn btn-primary w-100">Add</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {characters && characters.length >= 1 && characters.map((char) => {
                        return (
                            <div key={char._id} className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <div className="card my-2" style={{ width: "16rem" }}>
                                    <img alt={char.name} src={char.image} style={{ height: "180px" }} className="card-img-top" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{char.name}</h5>
                                        <p className="card-text">{char.actor}</p>
                                        <div className="text-center">
                                            <Search className="mx-2" onClick={() => handlerForView(char._id)} />
                                            <Pen className="mx-2" onClick={() => handlerForEdit(char._id)} />
                                            <Trash3 className="mx-2" onClick={() => handlerForRemove(char._id)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
};

export default CardPage;
