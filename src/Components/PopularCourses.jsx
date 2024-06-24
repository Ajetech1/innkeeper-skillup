import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CoursesData from "./CoursesData";
import { Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";

function PopularCourses() {
  return (
    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
      <h1 className="text-center mb-5">Popular Courses</h1>
      <div className="row">
        {CoursesData.map((course, index) => (
          <React.Fragment key={index}>
            <div className="col-lg-4 col-md-6">
              <Card
                bg={course.variant.toLowerCase()}
                text={
                  course.variant.toLowerCase() === "light" ? "dark" : "black"
                }
                className="mb-2 px-3 py-2 text-sm-start text-center"
              >
                <h6 className="py-3">
                  {course.price}
                  <span className="float-end">&gt;</span>
                </h6>
                <Card.Img variant="top" src={course.image} alt={course.title} />{" "}
                {/* Added image */}
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text as="div" style={{ fontSize: "12px" }}>
                    {course.description && Array.isArray(course.description) ? (
                      <ul>
                        {course.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No description available</p>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            {index === CoursesData.length - 1 && (
              <Col xs={12} className="text-center mb-5 mt-3">
                <Button onClick={() => (window.location.href = "/all-courses")}>
                  See all courses
                </Button>
              </Col>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="d-flex flex-sm-row flex-column w-50 mx-auto align-items-center justify-content-between bg-primary-subtle border p-3 rounded" style={{borderColor: "#a8b5c2"}}>
        <input type="text" placeholder="Search for Courses" className="bg-transparent text-sm-start text-center" style={{border: "none"}} />
        <CiSearch />
      </div>
    </div>
  );
}

export default PopularCourses;
