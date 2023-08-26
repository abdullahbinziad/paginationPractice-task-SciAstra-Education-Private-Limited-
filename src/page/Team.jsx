import { useState } from "react";
import { useEffect } from "react";
import "./universityCard.css";

import TeamSection from "../components/TeamSection";

const Team = () => {
  const [universities, setUniversities] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [advisors, setAdvisors] = useState([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setUniversities(data[2]["universities"]);
        setMentors(data[1]["mentors"]);
        setAdvisors(data[0]["mentors_Advisor"]);
      });
  }, []);

  // const universities =data[2]["universities"]
  // const mentor = data[2]["mentors"];
  // const mentor&advisor = data[2]["mentors & Advisor"];
  // console.log(universities);

  return (
    <div className=" w-full mx-atuo   my-10">
      <section className="w-3/4 mx-auto">
        <h1 className="text-4xl my-20 text-indigo-500 font-bold  leading-[50px] py-3 text-center">
          Learn From Scientists , Research Scholars from  

          <br />
          <span className=" text-pink-500">the top institutes in
          the world</span>
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  sm:grid-cols-1 gap-10">
          {universities.map((university, index) => (
            <div key={university.id} className="">
             
                <div className="ag-courses_box">
                  <div className="ag-courses_item  shadow-lg flex-1 bg-white">
                    <a href="#" className="ag-courses-item_link">
                      <div
                        className={` flex  ag-courses-item_bg bg-color-${
                          index % 5
                        }`}
                      ></div>

                      <div className="ag-courses-item_title ">
                        {university.name}
                      </div>
                    </a>
                  </div>
               
              </div>
            </div>
          ))}
        </div>{" "}
      </section>

      <section className="mt-10 md:mt-24 w-3/4 mx-auto">
        <h1 className="text-4xl 2xl:text-5xl my-10 text-indigo-500 font-bold  leading-10 py-3 text-center">
          Meet Your Mentors
        </h1>

        <TeamSection data={mentors} />
      </section>
     
      <section className="mt-10 md:mt-24  w-3/4 mx-auto">
        <h1 className="text-4xl 2xl:text-5xl my-10 text-indigo-500 font-bold  leading-10 py-3 text-center">
          Meet Your Mentors Advisor
        </h1>

         
             <TeamSection data={advisors} />
    
      </section>
    </div>
  );
};

export default Team;
