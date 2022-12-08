import React from 'react '


 function Header(airline){
    const {name, image_url} = airline.attributes
    return (
      <div className="wrapper">
        <h1>
          {" "}
          <img src="{image_url}" alt={name}/> {name}
        </h1>
        <div>
          <div className="totalReviews"></div>
          <div className="startRating"></div>
          <div className="totalOutOf"></div>
        </div>
      </div>
    );

 }

 export default Header;