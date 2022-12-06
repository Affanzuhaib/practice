import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?addresses=kokapet,Gandipet,narsingi"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.homznspace.com/wp-content/uploads/2020/12/Elevation-5-ASBL-Spire-Hyderabad.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kokapet</h1>
              <h2>{data[0]} Hostels</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cdn.telanganatoday.com/wp-content/uploads/2022/10/gandipet.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Gandipet</h1>
              <h2>{data[1]} Hostels</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://assets.thehansindia.com/h-upload/2022/01/14/1194963-rea.webp"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Narsingi</h1>
              <h2>{data[2]} Hostel</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
