// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Daniel",
  headerTagline: [
    //Line 1 For Header
    "Masters Student ",
    //Line 2 For Header
    "in Software Engineering",
    ""
  ],
  //   Header Paragraph
  headerParagraph:
    "Passionate software engineer with an interest in distributed systems and machine learning pipelines",

  //Contact Email
  contactEmail: "danielhawkins856@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "C++ Relational Database", //Project Title - Add Your Project Title Here
      para:
        "a database written in C++ re-implementing the standard database component including; indexing, block file management, and file checksums", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://www.matillion.com/wp-content/uploads/2020/11/database-1200.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/dimpdash/OurSQL",
    },
    {
      title: "PCB Planner with Machine Learning", //Project Title - Add Your Project Title Here
      para:
        "Exploration into PCB track planner with a recurrent neural network encoder and neural net decoder", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://resources.altium.com/sites/default/files/inline-images/migrate/aHViPTY1NjQ2JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVjY2Y3MjlhMmNjN2YuanBnJnZlcnNpb249MDAwMCZzaWc9YjQ2NmFmYTlhYWE2YTQ3ZTg3MDkwNGFlMTg0Zjk0ODc%25253D",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/dimpdash/pcb-router",
    },
    {
      title: "RFID Doorbell", //Project Title - Add Your Project Title Here
      para:
        "In a team of four, constructed a RFID Doorbell for the Melbourne University Robotics club", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://github.com/dimpdash/RFID-doorbell/blob/main/RFID%20Doorbell.jpg?raw=true",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/dimpdash/RFID-doorbell",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "A student undertaking a Masters of Software Engineering at the University of Melbourne. I have a keen interest in the problems arisen from large datasets and how distributed systems can be applied to solve them.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: designIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/dimpdash" },
  ],

  // End Contact Section ---------------
}
