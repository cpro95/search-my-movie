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

      <div className="card has-text-centered">
        <div className="card-image">
          {/* <figure className="image is-3by5"> */}
          <img style={{ width: "360px" }} src={detailData.c08} alt="Poster" />
          {/* </figure> */}
        </div>
        <div className="card-content">
          <div className="content">
            <p className="title is-2">{title}</p>
            <p className="subtitle is-4">{detailData.c03}</p>
            <p className="subtitle is-6">
              <span className="tag is-info">Rating: {detailData.rating}</span>
              <span className="tag is-dark">
                / premiered: {detailData.premiered}
              </span>
            </p>
          </div>

          <div className="content has-text-centered">{detailData.c01}</div>
          <a className="button is-primary" href={youtube_link}>
            View Trailer
          </a>
          <a
            className="button is-info"
            href={`http://www.imdb.com/title/${detailData.uniqueid_value}`}
          >
            Learn More
          </a>
          <p className="subtitle is-6">
            <span className="tag is-warning">My Location</span>
             {detailData.strPath}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
