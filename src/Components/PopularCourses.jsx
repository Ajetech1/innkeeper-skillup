import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CoursesData from "./CoursesData";
import PrimaryButton from "./PrimaryButton";

function PopularCourses() {
  return (
    <Row
      style={{
        paddingLeft: "50px",
        paddingRight: "50px",
        gap: "10px",
      }}
    >
      <h1 className="text-center mb-5">Popular Courses</h1>
      {CoursesData.map((course, index) => (
        <>
          <Col xs={12} md={4} lg={3} className="mx-3" key={index}>
            <Card
              bg={course.variant.toLowerCase()}
              text={course.variant.toLowerCase() === "light" ? "dark" : "black"}
              style={{ width: "auto", height: "auto" }}
              className="mb-2"
            >
              <h6 style={{ marginLeft: "16px", margin: "30px" }}>
                {course.price}
                <span class="float-end">&gt;</span>
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
          </Col>
          {index === CoursesData.length - 1 && (
            <Col xs={12} className="text-center mb-5 mt-3">
              <PrimaryButton
                onClick={() => (window.location.href = "/all-courses")}
              >
                See all courses
              </PrimaryButton>
            </Col>
          )}
        </>
      ))}
    </Row>
  );
}

export default PopularCourses;
