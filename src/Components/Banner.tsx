import Violin1 from "../assets/violin1.jpg";
import Violin2 from "../assets/violin3.jpg";
import Violin3 from "../assets/violin-solo1.jpg";
import Violin4 from "../assets/violin-solo2.jpg";
import Violin5 from "../assets/violin-solo3.jpg";

function Banner () {
    return ( 
        <div className="Banner">
            <div className="boxTop">
                <div className="boxLeft">
                    <h1>Portfolio</h1>
                    {/* <img src={Violin3} alt="violin 3" />
                    <img src={Violin4} alt="violin 4" />
                    <img src={Violin5} alt="violin 5" /> */}
                </div>
                <div className="boxRight">
                    {/* <img src={Violin2} alt="violin 1" /> */}
                </div>
            </div>
            <div className="boxBottom">
                <div className="boxLeft">
                    {/* <img src={Violin1} alt="violin 2" /> */}
                </div>
                <div className="boxRight">
                
                    {/* <img src={Violin4} alt="violin 4" /> */}
                </div>
            </div>
        </div>
     );
}

export default Banner;