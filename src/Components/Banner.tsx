import Violin3 from "../assets/violin-solo1.jpg";
import Violin4 from "../assets/violin-solo2.jpg";
import Violin5 from "../assets/violin-solo3.jpg";

function Banner () {
    return ( 
        <div className="Banner">
            <div className="boxTop">
                <div className="boxLeft">
                    {/* <h1>Portfolio</h1> */}
                    <div className="imgSmall">
                        <img src={Violin3} alt="violin 3" />
                    </div>
                    <div className="box">1</div>
                    <div className="imgSmall">
                        <img src={Violin5} alt="violin 5" />
                    </div>
                </div>
                <div className="boxRight">
                    <div className="box">2</div>
                </div>
            </div>
            <div className="boxBottom">
                <div className="boxLeft description">

                </div>
                <div className="boxRight">
                    <img src={Violin4} alt="violin 4" />
                </div>
            </div>
        </div>
     );
}

export default Banner;