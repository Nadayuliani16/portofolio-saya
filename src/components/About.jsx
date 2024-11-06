import '../styles/About.css'

import { FaLaravel } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { SiMysql} from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";

function About() {
  return (
    <section id="about">
        <div className='wrapper'>
            <h3>About</h3>
            <p>Halo, saya Nada Yuliani, seorang developer front-end yang berfokus pada pengembangan website. Saat ini, 
               saya menempuh studi di jurusan Teknologi Informasi di Politeknik Negeri Padang. Saya berkomitmen untuk 
               menciptakan pengalaman web yang menarik secara visual, responsif, dan mudah digunakan, baik di layar besar 
               maupun kecil. Saya bersemangat untuk menerapkan pengetahuan yang telah saya pelajari dan mendapatkan pengalaman 
               langsung dalam industri, dengan tujuan untuk memperkuat kemampuan sebagai front-end programmer. </p>
            <h4>Skills</h4>
            <div className="skills">
                <FaLaravel />
                <FaHtml5 />
                <RiFlutterFill />
                <SiMysql />
                <FaPhp />
                <FaCss3Alt />
                <IoLogoJavascript />
                <FaReact />
            </div>
        </div>
    </section>
  )
}

export default About