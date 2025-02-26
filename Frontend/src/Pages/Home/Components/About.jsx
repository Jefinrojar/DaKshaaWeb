import React from "react";
import college from "../../../assets/college.png";
import logo from "../../../assets/logo.png";
function About() {
  return (
    <>
      <div className="mt-56">
        <p className="text-7xl text-sky-500 font-semibold text-center " data-aos="fade-down">
          About Us
        </p>
        <div className="flex mx-28 mt-16 justify-center items-center gap-12">
          <div className="border-2 border-sky-900 p-3 h-full" data-aos="fade-right">
            <div className="h-auto w-100 bg-sky-900 bg-opacity-50 p-8 relative clip-bottom-right" data-aos="fade-right">
              <p className="absolute px-8 pr-12 py-3 top-0 left-0 text-2xl clip-path-slant-right font-poppins text-white bg-sky-500 bg-opacity-70">
                K.S.Rangasamy College of Technology
              </p>
              <p className="text-sky-400 font-poppins leading-7 mt-16 text-justify">
                K.S.Rangasamy College of Technology (KSRCT) was started in the
                year 1994. This institution is located in a scenic campus area
                near Tiruchengode, Tamil Nadu. It is a pioneering Institution in
                providing quality technical education with 14 U.G., 11 P.G. and
                12 Ph.D. programs. The College is approved by AICTE and
                affiliated with Anna University, Chennai. KSRCT has been granted
                Autonomous status by UGC and secured the 99th position in NIRF
                2017 ranking and 51 - 100 band in NIRF Innovation Ranking 2023
                on Engineering discipline. KSRCT is DST - FIST sponsored,
                eligible departments with NBA Tier 1 category and NAAC with A++
                grade. This holistic learning experience includes cutting-edge
                infrastructure, an AICTE - IDEA Lab, an ATAL Community
                Innovation Centre, MSME incubation centre an IIC 5.0 rated 4
                stars with mentor status. The National Technical Textile Mission
                (NTTM) funded with 6.5 crore rupees earmarked for fostering
                cutting-edge research and development. Nasscom Future Skills
                Prime certifications, digital libraries, TNSCST IPR Cell,
                Centers of research excellence and etc., for enhancing students
                technical skills in the campus. The institute research centers
                are engaged in consultancy and R&D activities of several
                government bodies such as DST, DBT, DAE, CSIR, DRDO, and ISRO
                along with other private industries.
              </p>
            </div>
          </div>
          <img
            className="w-1/2 border-2 border-sky-900 p-3"
            src={college}
            alt=""
            data-aos="fade-left"
          />
        </div>
      </div>
      <div className="my-28">
        <div className="flex flex-row-reverse mx-28 mt-16 justify-center items-center gap-12">
          <div className="border-2 border-sky-900 p-3 h-full" data-aos="fade-right">
            <div className="h-auto w-100 bg-sky-900 bg-opacity-50 p-8 relative clip-bottom-left">
              <p className="absolute px-8 pr-12 py-3 top-0 left-0 text-2xl clip-path-slant-right font-poppins text-white bg-sky-500 bg-opacity-70">
                Dakshaa T25
              </p>
              <p className="text-sky-400 font-poppins leading-7 mt-16 text-justify pb-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore recusandae voluptatibus cupiditate, laudantium quis, repellat velit tenetur nemo dolorum ipsa suscipit, eos esse. Consequuntur minima quia aperiam ipsum maiores perspiciatis libero nesciunt omnis in iure neque at voluptas atque incidunt numquam, ut deleniti sint eligendi? Enim quo rerum beatae nemo unde saepe eos inventore nisi excepturi? Consectetur fuga nobis labore quo soluta sunt. Perspiciatis, quod unde non molestiae repellendus est officiis ea itaque sequi temporibus ex omnis beatae doloribus debitis voluptatum aliquam ducimus in eveniet exercitationem consectetur! Accusantium dolore quaerat, facilis molestias libero quo. Harum quis sunt accusamus deserunt facilis ut, aliquid modi fugit doloremque expedita culpa repudiandae et esse aspernatur? Non maxime hic dignissimos, totam nesciunt sapiente repudiandae ipsa autem possimus delectus quidem eos aliquam, minus assumenda nostrum accusantium et libero labore aut officia iusto doloribus. Doloribus recusandae beatae veniam in asperiores? Magnam corrupti id aut facilis repellendus accusantium est inventore, consectetur dolor beatae voluptates minima, sint vitae. Quam, laboriosam tempora! Deleniti accusantium alias commodi harum incidunt unde mollitia sed neque tempore. Fugit tenetur voluptas consectetur veniam exercitationem ex rerum placeat ratione nisi voluptate ullam nesciunt vero sit sapiente unde modi, minima, laboriosam perspiciatis quod pariatur obcaecati minus quos.
              </p>
            </div>
          </div>
          <img className="w-1/2" src={logo} alt="" data-aos="fade-left"/>
        </div>
      </div>
    </>
  );
}

export default About;
