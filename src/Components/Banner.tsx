import Violin3 from "../assets/violin-solo1.jpg";
import Violin4 from "../assets/violin3.jpg";
import Violin5 from "../assets/violin-solo3.jpg";

function Banner () {
    return ( 
        <div className="Banner">
            <div className="grid-container">
                <div className="box imgSmall">
                    <img src={Violin3} alt="violin 3" />
                </div>
                <div className="box number-box non-mobile">1</div>
                <div className="box imgSmall non-mobile-img">
                    <img src={Violin5} alt="violin 5" />
                </div>
                <div className="box number-box message">2</div>
                <div className="description"></div>
                <div className="box imgLarge">
                    <img src={Violin4} alt="violin 4" />
                </div>
            </div>
        </div>
     );
}

export default Banner;