import Link from 'next/link'

const Footer = () => (
    <div className="footer clearfix">
        <div className="box">
            <h4>Contact</h4>
            <p>+91 83100 32933</p>
            <p><a href="mailto:jatayurvce@gmail.com">jatayurvce@gmail.com</a></p>
            <p>R V College of Engineering,</p>
            <p>Bengaluru, Karnataka</p>
        </div>
        <div className="box">
            <h4>Social</h4>
            <p><a href="https://www.instagram.com/projectjatayu/">Instagram</a></p>
            <p><a href="https://www.facebook.com/ProjectJatayu">Facebook</a></p>
            <p><a href="https://www.linkedin.com/in/project-jatayu-rvce-a9b14781/?originalSubdomain=in">Linkedin</a></p>
        </div>
        <div className="box">
            <h4>More</h4>
            <p>Links</p>
            <p>to our software</p>
            <p>can go here</p>
            <p>i guess</p>
        </div>
        <div>
            <p className="bottom-logo">PROJECT JATAYU</p>
        </div>
        <style jsx>{`
            .footer {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                background-color: #222;
                padding: 2em 10em 2em 10em;
                color: #eee;
                bottom: 0;
                background-image: linear-gradient(to bottom, #222 0%, #3f3f3f 100%);
            }
            .clearfix::after {
                content: "";
                clear: both;
                display: table
            }
            .box  {
                float: left;
                width: 33.33%;
            }
            h4 {
                font-size: 18px;
                font-weight: bold;
            }
            a {
                color: #999;
                text-decoration: none;
                transition: 0.5s ease;
            }
            a:hover {
                color: #fff;
            }
            .bottom-logo {
                font-size: 32px;
                padding: 5em 0em 0em 0em;
            }
                    `}
        </style>
    </div>
    )

export default Footer
