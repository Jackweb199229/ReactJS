import "./App.css";
import "./index.css";
import Card from "./Component/Card";

const jobOpenings = [
  {
    brandLogo:
      " https://img.freepik.com/premium-vector/google-logo_1273375-1572.jpg?semt=ais_hybrid&w=740&q=80 ",
    companyName: "Google",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURsmbRJ4V2i53XX70PU8bCeZMXWjVXgMvh-TQc68pMX6VRJ6VDVLSlmo&s",
    companyName: "Meta",
    datePosted: "2 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Bangalore, India",
  },
  {
    brandLogo:
      " https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    companyName: "Amazon",
    datePosted: "10 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "7 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "1 day ago",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Remote",
  },
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hour",
    location: "Noida, India",
  },
];

function App() {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-title"> Top Tech Job Openings</h1>
      </nav>
      <div className="Parent">
        {jobOpenings.map((job) => (
          <Card
            brandLogo={job.brandLogo}
            companyName={job.companyName}
            datePosted={job.datePosted}
            tag1={job.tag1}
            tag2={job.tag2}
            pay={job.pay}
            location={job.location}
          />
        ))}
      </div>
    </>
  );
}

export default App;
