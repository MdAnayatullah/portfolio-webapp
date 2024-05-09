import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Remote Control PC- Android App",
    description:
      "I built a project that allowing users to control their desktop computers from their Android devices. The desktop application is built using JavaFX, On the Android side, we utilize Java to create a mobile interface, To establish a robust connection between the client (Android device) and server (desktop computer), we employ socket programming. It has followig features: Mouse Control, Virtual Keyboard / Text Input, File Transfer, Music Play, Media control, presentation control.",
    tools: ["Java", "Java FX", "XML", "Socket.io", "Android Studio"],
    role: "Android Developer",
    code: "https://github.com/MdAnayatullah/Remote-Control-PC-Android-App",
    demo: "",
    image: "",
  },
  {
    id: 2,
    name: "Emojify- Create your own emoji/avatar",
    description:
      "I have designed a web app that detects human expressions and creates emojis accordingly. For GUI part i have used Tkinter a python GUI toolkit. Open CV for face detection and training ad testing Tensorflow, Keras API & library of python, CNN layers used: Input, Convolutional, Activation, Pooling, Dense, Flattening, Dropout. More than 26K data trained of seven human expression: Happy, Sad, Angry, Disgusting, Surprise, Fear, Normal. ",
    tools: ["Python", "Numpy", "OpenCV", "TensorFlow", "Keras"],
    role: "Computer Vision Engineer",
    code: "https://github.com/MdAnayatullah/Minor_Project-Emojify",
    demo: "",
    image: "",
  },
  {
    id: 3,
    name: "Examination Control Management System (ECMS)",
    description:
      "we built a website that helps to assign the teachers duties, create timetable for individual teachers,There is a seprate section for each teachers and teachers get unique ID for Log in. We used HTML, CSS and JavaScript for frontend and PHP for backend and MYSQL database for data storing, SQL for database connection i.e query purpose i.e data Fetch, delete and Insert .",
    tools: ["HTML", "Bootstrap", "CSS", "JavaScript", "PHP", "MYSQL", "SQL"],
    code: "https://github.com/MdAnayatullah/examination-control-management-system",
    role: "Full Stack Developer",
    demo: "",
    image: "",
  },
  //   {
  //     id: 4,
  //     name: "Newsroom Management",
  //     description:
  //       "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
  //     tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
  //     code: "",
  //     demo: "",
  //     image: ayla,
  //     role: "Full Stack Developer",
  //   },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
