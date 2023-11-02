import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const filmId = params.filmId;
  const [details, setDetails] = useState();
  useEffect(() => {
    getDetails();
  }, []);
  const getDetails = () => {
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
        console.log(details);
      })
      .catch((err) => console.log("Error: ", err));
  };

  return;
};

export default Detail;
