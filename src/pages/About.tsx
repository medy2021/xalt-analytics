import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import "../App.css"

const About = () => {
  interface TeamMember {
    name: string;
    title: string;
    description: string;
  }

  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Nitin Agarwal (Ph.D.)",
      title: "Co-Founder & Chief Data Science Officer",
      description: `Dr. Nitin is the Co-Founder and visionary Chief Data Science Officer at Xalt Analytics, bringing an extensive 25+ years of experience in the realms of data science and operations research. With over a decade dedicated to crafting data-driven solutions, Nitin has been instrumental in pioneering innovative approaches to drive substantial business value for our clients. Before co-founding Xalt Analytics, Nitin held the prestigious position of Chief Data Science Advisor at a leading Big Data Analytics firm in India. His illustrious career also includes nearly a decade spent at SAS Institute in the USA, where he contributed significantly to the advancement of data analytics solutions. Prior to this, Nitin served as a distinguished faculty member at the esteemed Indian Institute of Management (IIM), Indore, where he imparted his invaluable knowledge to future business leaders. In addition to his role at Xalt Analytics, Nitin continues to serve as a trusted Chief Data Science Advisor & Consultant for a prominent US-based Analytics firm. His academic credentials include a PhD from North Carolina State University, an MS in Operations Research from the University of North Carolina at Chapel Hill, and an undergraduate degree from the esteemed Indian Institute of Technology (IIT) Mumbai. Nitin's relentless pursuit of excellence and profound expertise in data science make him a driving force behind our commitment to delivering cutting-edge solutions that empower our clients to thrive in today's data-driven landscape.`
    },
    {
      name: "Ekanshu Ranjan",
      title: "Manager, Data Science",
      description: "Ekanshu brings over 6 years of comprehensive experience in the dynamic field of Data Science to our team. With a solid foundation in Information Technology, coupled with advanced studies culminating in a Master's degree in Data Science, Ekanshu is adept at leveraging cutting-edge technologies to drive impactful results. Before stepping into the realm of Data Science, Ekanshu spent 3 years honing his skills as a Software Test Engineer, where he developed a keen eye for detail and a passion for ensuring the quality and reliability of software systems. Throughout his career, Ekanshu has spearheaded numerous critical projects spanning NLP, Machine Learning, and Deep Learning domains. Whether working individually or leading a team, he has consistently delivered innovative solutions that have met and exceeded client expectations. Ekanshu's dedication to excellence, coupled with his technical expertise and leadership acumen, makes him an invaluable asset to our Data Science team. His commitment to staying at the forefront of emerging technologies ensures that we continue to deliver state-of-the-art solutions to our clients."
    },
    {
      name: "Lalit Bagora",
      title: "HR Head & Operations",
      description: "With over 15 years of invaluable experience in building and nurturing IT organizations from the ground up, Lalit serves as the cornerstone of our operations at Xalt. He has been leading operations at Xalt since its founding. In his role as HR Head & Operations, Lalit oversees a multifaceted portfolio encompassing HR, Administration, Finance, and Purchasing functions. His strategic vision and hands-on approach have been pivotal in driving operational efficiency and fostering a culture of excellence within our organization. Lalit's unparalleled expertise and unwavering dedication make him a trusted leader and mentor to our team. Under his guidance, we continue to thrive and grow, poised to tackle any challenge and seize every opportunity that comes our way."
    }
  ];

  return (
    <div className="">
      <Navbar />
      <img src="/images/about-us.jpg" style={{ width: "100%", height: "250px" }} alt="About Image" />
      <div className="container mx-auto  ">
        <div className="max-w-4xl mx-auto">
          <br /> <br />
          <h1 className="text-3xl md:text-4xl font-bold mb-8">About Us</h1>

          <div className="prose prose-lg max-w-none">
            <p>
              Xalt Analytics started its journey in 2017 with a view that power of data combining machine learning can bring transformational changes in the way world does business. Our aim is to build customized analytics solutions (by harmonizing different types data available in any form) for our clients and provide them with hidden insights from the data that enables them to stay ahead of the competition curve.
            </p>
            <img src="images/about-content.jpg" />

          </div>
        </div>
      </div>


      {/* team */}
      <div className="container mx-auto px-6 py-12 bg-sky-100">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">Our Team</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105"
              style={{ height: "450px", overflow: "hidden" }}
            >
              <h2 className="text-xl font-semibold text-center mb-2">{member.name}</h2>
              <h3 className="text-md text-gray-600 text-center mb-4">{member.title}</h3>
              <div className="overflow-y-auto" style={{
                maxHeight: "310px",
                scrollbarWidth: "none",  /* For Firefox */
                msOverflowStyle: "none"  /* For IE and Edge */
              }}>
                <p className="text-gray-700 text-center">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;