import style from './ApplicationForm.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import image1 from '../../assets/applicationImage.png'


export default function ApplicationForm() {
  return (

    <div>
      <div className={style.containerHeader}>
        <div className={style.header}>
        <div className={style.ImageDiv}>
          <img src={image1} className={style.img} alt='' />
          <p>Adesola Sanni</p>
        </div>
        <div className={style.textDiv}>
          <h4 className={style.headerH4}>Hear what our interns are saying</h4>
          <h6 className={style.headerH6}>
          “ I started my Journey with innkeeper 6 months ago and all of my expectations towards the product design course i took has been met even more. Now i’m building my portfolio as i work with Innkeeper on different projects.”
          </h6>
        </div>
        <div className={style.seeDiv}>
          see more
        </div>
        </div>
        
      </div>
      <div className={style.container}>
      <h1>ApplicationForm</h1>
      <h4 className={style.h4}>Fill in the correct information in the appropriate places below. </h4>
      <form>
        <div className={style.formName}>
        <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter firstname" />
        
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter lastname" />
        </Form.Group>
        </div>
        <div>
        <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        </div>
        <div className={style.formName}>
        <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Age" />
        
        </Form.Group>
        <Form.Group className={`mb-4 ${style.selectAge}`} controlId="formBasicEmail">
        <Form.Label>Gander</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select gender</option>
          <option value="1">Female</option>
          <option value="2">Male</option>
        </Form.Select>
        </Form.Group>
        </div>
        <div>
        <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Choose Course </Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select Course Of Choice</option>
          <option value="1">Software Engineering</option>
          <option value="2">Product Management</option>
        </Form.Select>
        </Form.Group>
        </div>
        <div>
        <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Select Payment option </Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select Course Of Choice</option>
          <option value="1">Learn now pay later </option>
          <option value="2">Instant payment</option>
        </Form.Select>
        </Form.Group>
        </div>
        <div>
        <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter a specific location" />
        </Form.Group>
        </div>
        <div>
        <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Learn mode </Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select Learn mode</option>
          <option value="1">online </option>
          <option value="2">onsite</option>
        </Form.Select>
        </Form.Group>
        </div>
        <div>
        <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter your phone number" />
        </Form.Group>
        </div>
        <Button className={style.button}>Submit</Button>
        
      </form>
    </div>
    </div>
    

  )
}
