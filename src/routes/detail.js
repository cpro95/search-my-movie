import React from 'react';
import Navbar from '../components/navbar';

const Detail = props => {
  // console.log(props.location.state);
  const detailData = props.location.state;

  var youtube_link;
  var youtube_embed_link;
  var imdb_link;
  var link_str;
  var target_str = '' + detailData.c19;

  link_str = target_str.substr(
    target_str.indexOf('videoid') + 8,
    target_str.length
  );
  youtube_link = `https://www.youtube.com/watch?v=${link_str}`;
  youtube_embed_link = `https://www.youtube.com/embed/${link_str}`;
  imdb_link = `http://www.imdb.com/title/${detailData.uniqueid_value}`;

  var title = '';

  if (detailData.c00 !== detailData.c16) {
    title = detailData.c00 + ' (' + detailData.c16 + ')';
  } else {
    title = detailData.c00;
  }

  return (
    <section>
      <Navbar />
      <div
        className="container-fluid"
        style={{
          background: 'black',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: 'url(' + detailData.c20 + ')'
        }}
      >
        <div className="text-light">
          <img
            className="img-fluid"
            style={{ marginTop: '20px', marginBottom: '20px' }}
            src={detailData.c08}
            alt="Poster"
          />
          <div className="bg-dark mb-2 p-3" style={{ opacity: '0.9' }}>
            <h1 className="mb-3">{title}</h1>
            <h4 className="mb-3">{detailData.c03}</h4>
            <span className="badge badge-light">
              Rating: {parseFloat(detailData.rating).toFixed(1)}
            </span>
            {' / '}
            <span className="badge badge-primary">
              premiered: {detailData.premiered}
            </span>
            <p className="lead mt-3 mb-3">{detailData.c01}</p>
            <div className="embed-responsive embed-responsive-16by9 my-3">
              <iframe
                className="embed-responsive-item"
                src={youtube_embed_link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
              />
            </div>
            <div className="mb-3">
              <a
                className="btn btn-light btn-sm"
                target="blank"
                href={youtube_link}
              >
                View Trailer
              </a>{' '}
              <a
                className="btn btn-primary btn-sm"
                target="blank"
                href={imdb_link}
              >
                Learn More
              </a>
            </div>
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
