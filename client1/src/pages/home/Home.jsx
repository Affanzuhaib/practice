import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./home.css";

const Home = () => {
  return (
    <div>
      
      <Header/>
      <div className="homeContainer">
      <h1 className="homeTitle">Major Accomodation places</h1>
      <Featured/>

        <div className="container1">
        <p className="spans1">
            Haven shows you the most amazing Hostels based on 5 transparent criteria for every destination.
            We usually only highlight the best hostels in the area and bring you the safest accomodations around the selected area. 
            However, not every destination comes with a 5(five) Star Hostel. So, we try to accomodate you in the better place.
            We share lists of the coolest hostels in major destinations around the area.
        </p>
        <br/>
        <h1 className="spans2">
             Three Simple Steps for you:
        </h1>
        <br/>
        <p className="spans3">
            1.Pick your area
            <br/><br/>
            2.Get the coolest hostel
            <br/><br/>
            3.Contact 
            <br/><br/>
            <h1 className="spann4">Your Destination is not listed?</h1>
            <br/>
            <p className="spann5">
                It simply means there is currently no 5 Star Hostel, nor a hostel destination guide.
                
                Not to worry, there is a simple solution. Drop us an <a href = "mailto: suprajavarma90@gmail.com">e-mail</a> with your missing destinations.
                
                We will send you over to the coolest hostel in the area. After all, we are your Haven!
            </p>
        </p>
        <br/>
       </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
