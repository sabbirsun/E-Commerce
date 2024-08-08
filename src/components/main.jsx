import React from "react";
import { SearchContext } from "../SearchContext";

const Home = () => {
  const inputRef = React.useRef();
  const { setSearchTerm, searchTerm } = React.useContext(SearchContext);
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main1.jpg"
            alt="Card"
            height={500}
          />

          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
     
              <div className="input-group mb-3">
  <input ref={inputRef} type="text" className="form-control" />
  {/* <input  type="text" className="input input-lg"/> */}
  <button className="btn btn-secondary" type="button" id="button-addon2"
   onClick={() => {
                  setSearchTerm(inputRef.current.value);
                }}>Search</button>
</div>
              {/* <button className="btn btn-dark "
                onClick={() => {
                  setSearchTerm(inputRef.current.value);
                }}
              >
                Search
              </button> */}
              {!!searchTerm && (
                <button className="btn btn-dark m-1"
                  onClick={() => {
                    setSearchTerm("");
                    inputRef.current.value = ""
                  }}
                >
                  Clear search
                </button>
              )}
              <h5 className="card-title fs-1 text fw-lighter">
                New Season Arrivals
              </h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
