import Violin1 from "../assets/violin1.jpg"

function Banner () {
    return ( 
        <div className="Banner">
            <div className="boxTop">
                <div className="boxLeft">
                    <h1>Portfolio</h1>
                    <img src={Violin1} alt="violin 1" />
                </div>
                <div className="boxRight"></div>
            </div>
            <div className="boxBottom">
                <div className="boxLeft"></div>
                <div className="boxRight"></div>
            </div>
        </div>
     );
}

export default Banner;