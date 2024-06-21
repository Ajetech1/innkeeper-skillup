import productdesign from "../assets/images/product-design.png";
import frontend from "../assets/images/frontend.png";
import cybersecurity from "../assets/images/cybersecurity.png";

const courses = [
  {
    variant: "White",
    price: "#200,000",
    image: productdesign,
    title: "Product Design",
    description: [
      "User Experience Research & Design",
      "Wireframing & User Interface Design ",
      "Information Architecture & User Flow",
    ],
  },
  {
    variant: "white",
    price: "#250,000",
    image: frontend,
    title: "Frontend Development",
    description: ["HTML", "CSS", "Javascript(NetJS, React)"],
  },

  {
    variant: "white",
    price: "#300,000",
    image: cybersecurity,
    title: "Cybersecurity",
    description: ["Python", "C & C++", "Javascript, SQL"],
  },
  // Add more course objects as needed
];

export default courses;
