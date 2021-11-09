import React from "react";

// import AppMovie from "./movie/AppMovie"
const list = () => {
  return (
    <div className="form_container">
      {/* <AppMovie/> */}
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">About MOVIE SPACE</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <h2>Intro</h2>
            <p>
            The Movie Space app aims to solve exactly that problem by providing the user with relevant details about any movie easily. Users can search a keyword and get a list of all the movies having this keyword in the title.

            </p>
          </div>
          <div className="feature col">
            <h2>Functions</h2>
            <p>
            On searching a keyword, we get the list of movies displayed in the form of tiles—these tiles have a rating along with the poster and a brief summary of the movie’s storyline that the API has fetched.
            </p>
          </div>
          <div className="feature col">
            <h2>Conclusion</h2>
            <p>
            The MOVIE SPACE app basically helps us to search and know the details of the movies like poster, user rating and  summary. The user data is stored in a database. 
The details about the movies is made available by using an API. User can easily search the movie options then decide what to watch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default list;
