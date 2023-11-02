import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "./DetailCard";
import DetailComment from "./DetailComment";
import { Spinner } from "react-bootstrap";

const Detail = () => {
  const params = useParams();
  const filmId = params.filmId;
  const getDetails = () => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?i=${filmId}&apikey=13490e25`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error While Getting the datas");
        }
      })
      .then((datas) => {
        setDetails(datas);
        setLoading(false);
      })
      .catch((err) => console.log("Error: ", err));
  };
  const getComments = () => {
    setLoading(true);
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${filmId}`, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTlhZWY2ZTNkZDAwMTQ5NWU0M2YiLCJpYXQiOjE2OTg5NDA4MjksImV4cCI6MTcwMDE1MDQyOX0.DIwBjSnA6TS6N64jXwSw1zRb8-GfqlIysKwAQF2MHOI",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the comments");
        }
      })
      .then((datas) => {
        setComments(datas);
        setLoading(false);
      })
      .catch((err) => console.log("Error: ", err));
  };
  const [details, setDetails] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetails();
  }, []);
  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <div>
        {loading && (
          <div className="position-relative start-50 my-5">
            <Spinner animation="border" variant="danger" role="status" />
          </div>
        )}
        <DetailCard datas={details} />
      </div>
      <div>
        {loading && (
          <div className="position-relative start-50 my-5">
            <Spinner animation="border" variant="danger" role="status" />
          </div>
        )}
        <DetailComment comments={comments} />
      </div>
    </>
  );
};

export default Detail;
