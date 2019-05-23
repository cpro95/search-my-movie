import React from "react";
import Navbar from "./navbar";

const Detail = props => {
  console.log(props.location.state);
  const detailData = props.location.state;

  var youtube_link;
  var link_str;
  var target_str = "" + detailData.c19;

  link_str = target_str.substr(
    target_str.indexOf("videoid") + 8,
    target_str.length
  );
  youtube_link = `http://www.youtube.com/watch?v=${link_str}`;

  var title = "";

  if (detailData.c00 !== detailData.c16) {
    title = detailData.c00 + " (" + detailData.c16 + ")";
  } else {
    title = detailData.c00;
  }

  return (
    <section>
      <Navbar />
      <div
        className="container-fluid"
        style={{
          background: "black",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: "url(" + detailData.c20 + ")"
        }}
      >
        <div className="text-light">
          <img
            style={{ marginTop: "20px", width: "22rem" }}
            src={detailData.c08}
            alt="Poster"
          />
          <br />
          <br />
          <div className="bg-dark">
            <h1>{title}</h1>
            <h4>{detailData.c03}</h4>
            <span className="badge badge-light">
              Rating: {detailData.rating}
            </span>
            {" / "}
            <span className="badge badge-primary">
              premiered: {detailData.premiered}
            </span>
            <p className="lead">{detailData.c01}</p>
            <a className="btn btn-light btn-sm" href={youtube_link}>
              View Trailer
            </a>{" "}
            <a
              className="btn btn-primary btn-sm"
              href={`http://www.imdb.com/title/${detailData.uniqueid_value}`}
            >
              Learn More
            </a>
            <p className="text-success">
              <span className="badge badge-warning">Location</span>
              {detailData.strPath}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
