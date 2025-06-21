import bicycle_inverted from "./assets/bicycle_inverted.png";
import gears from "./assets/gears.png";
import seat from "./assets/seat.png";
import handles from "./assets/handles.png";

function Hero(){
    return(
        <div>
            <div className="hero-section">
                <div className="hero_left">
                    <p class="bold">RICKY</p>
                    <p class="semibold">CYCLES</p>
                    <p className="bold subheading">Get 70% Off Bikes for Commuters</p>
                    <button className="btn">BUY IT</button>
                </div>
                <div className="hero_right">
                    <img src={bicycle_inverted} alt="Inverted Bicycle"/>
                </div>
            </div>
            <div className="below-hero-wrapper">
                <div className="text-left">
                    <h2>DEAL OF THE WEEK</h2>
                    <text className="text-left-subheading semibold">RIDERUSH PRO 0.4E</text>
                    <p className="text-left-p">The <i>RIDERUSH PRO 0.4E</i> combines sleek design with unmatched agility, offering cyclists a thrilling ride
                        with effortless gear changes. Engineered for speed and comfort, it redefines the urban cycling experience, making every
                        commute a seamless journey. </p>
                </div>
                <card className="floating-card">
                    <h3 className="card-heading">FILL OUT THE FORM</h3>
                    <br/>
                    <text className="labels">NAME</text>
                    <br/>
                    <input type="Text" class="text-field"/>
                    <br/>
                    <text className="labels">EMAIL</text>
                    <br/>
                    <input type="Text" class="text-field"/>
                    <br/>
                    <div className="checkbox-row">
                        <input type="Checkbox"/>
                        <text className="checkbox-text">Marketing Agreement</text>
                    </div>
                    <button className="btn-card btn">BUY IT</button>
                </card>
            </div>
            <div className="grid">
                <h2 className="center-heading">BEST QUALITY</h2>
                <div className="image-div">
                    <div className="image-block">
                        <div className="image-container1">
                            <img src={gears} alt="bicycle" width="300px" height="150px"/>
                        </div>
                        <h2>LIGHTWEIGHT DESIGN:</h2>
                        <p className="image-text">Crafted with a sleek, lightweight frame, our urban bike effortlessly navigates crowded city streets.</p>
                    </div>
                    <div className="image-block">
                        <div className="image-container2">
                            <img src={seat} alt="bicycle" width="300px" height="150px"/>
                        </div>
                        <h2>COMFORTABLE ERGONOMICS:</h2>
                        <p className="image-text">Engineered for comfort with cushioned saddles and ergonomic grips, ensuring a pleasant journey even on longer trips.</p>
                    </div>
                    <div className="image-block">
                        <div className="image-container3">
                            <img src={handles} alt="bicycle" width="300px" height="150px"/>
                        </div>
                        <h2>PRACTICAL ACCESSORIES</h2>
                        <p className="image-text">Complete with fenders, a rear rack, and integrated lights, our urban bike is equipped for all-weather.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;