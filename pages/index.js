import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Link from 'next/link'
const Index = () => (
    <div className="container">
        <Header />
        <div className="body">
            <h1>Fly to the Zenith</h1>
            <div className="info">
                <p>
                    Project Jatayu is the Autonomous Unmanned Aerial Vehicle
                    team of RVCE. The project's aim is to build and test a <b>fully autonomous piloting system</b> which has the potential to be
                    deployed.
            </p>
            </div>
            <div className="info">
                <Link href="/about">
                    <a>LEARN MORE</a>
                </Link>
            </div>

            <br />
            <br />

            <hr />
            
            <br />
            <br />

            <div className="info">
                <h4>OUR APPROACH</h4>
                <h2>Divide and Conquer</h2>
                <p>
                    Project Jatayu is an inter-disciplinary Autonomous UAV team, 
                    comprising of various subsystems which work together, to complete out the tasks.
                </p>
            </div>
            <div className="subs clearfix">
                <div className="box">
                    <h3>Aerodynamics</h3>
                    <p>The science with which a drone flies, and all the physics involved in it, lies in the hands of Aerodynamics Subsystem.</p>
                </div>
                <div className="box">
                    <h3>Propulsion</h3>
                    <p>The science and action of driving a drone in the air, is handled by the Propulsion Subsystem.</p>
                </div>
                <div className="box">
                    <h3>Computer Vision</h3>
                    <p>This subsystem is responsible for handling the Image Analysis and Detection tasks, for the imagery generated by the drones.</p>
                </div>
            </div>
            <div className="subs clearfix">
                <div className="box">
                    <h3>Image Transmission</h3>
                    <p>This subsystem works closely with Image Processing team and its job is to transfer the images and other related data from drone to base computer.</p>
                </div>
                <div className="box">
                    <h3>Autonomy</h3>
                    <p>Autonomy is an important part of the mission process, as the drone should be autonomous.</p>
                </div>
                <div className="box">
                    <h3>Structures</h3>
                    <p>Handled by Mechanical and Aerospace engineers, this subsystem is responsible for structural integrity of the drone.</p>
                </div>
            </div>

            <div className="info">
                <Link href="/subsystems">
                    <a>SUBSYSTEMS</a>
                </Link>
            </div>

            <style jsx>{`
                body {
                    height: 100%
                    margin: 0;
                    padding: 0px;
                }
                .container {
                    min-height: 100%;
                    position: relative;
                    margin: 0;
                    padding: 0;
                }
                .body {
                    font-size: 18px;
                    padding: 4em 10em 2em 10em;
                    font-family: "Inter"
                }
                h1, h2 {
                    text-align: center;
                    font-size: 72px;
                    font-vairant: bold;
                } 
                h2 {
                    font-size: 44px;
                }
                h4 {
                    text-align: center;
                    font-size: 18px;
                    color: #222;
                }
                hr {
                    border-top: 0.5px solid #efefef;
                }
                .info {
                    text-align: center;
                    padding: 0em 24em 2em 24em;
                }
                .clearfix::after {
                    content: "";
                    display: table;
                    clear: both;
                }
                .box  {
                    float: left;
                    width: 32%;
                    height: 10em;
                    padding: 0.4em;
                }
                a {
                    background-color: #222;
                    color: #fff;
                    font-size: 15px;
                    box-shadow: 0em 0.7em 1em 0.3em #ccc;
                    padding: 1em 2em 1em 2em;
                    text-decoration: none;
                    border: 0px solid;
                    border-radius: 0.5em;
                    transition: 0.5s ease;
                    width: 5em;
                    margin: 4em;
                    font-weight: bold;
                }
                a:hover {
                    box-shadow: 0em 0.7em 4em 0.3em #ccc;
                }
                subs {
                    width: 100%;
                    text-align: right;
                    margin: 0;
                    padding: 0;
                }
                    `}</style>
            </div>
            <Footer />
        </div>
)

export default Index
