
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import image1 from '../../assets/applicationImage.png';
import style from './ApplicationForm.module.css';
import { toast } from 'react-toastify';

export default function ApplicationForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      gender: '',
      course: '',
      paymentOption: '',
      location: '',
      learnMode: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      age: Yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
      gender: Yup.string().required('Gender is required'),
      course: Yup.string().required('Course is required'),
      paymentOption: Yup.string().required('Payment option is required'),
      location: Yup.string().required('Location is required'),
      learnMode: Yup.string().required('Learn mode is required'),
      phoneNumber: Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must be digits only'),
    }),
    onSubmit: values => {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwsSaeO4dZL83uvqmXKM_giNQrvMyhZ8eTlNW2qTKpXezkptiMa2lDS6aQaAuNHvoOdNg/exec';

      fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.text())
      .then(data => {
        console.log('Form data submitted successfully:', data);
        toast.success('Form submitted successfully!');
      })
      .catch(error => {
        console.error('Error submitting form data:', error);
        toast.error('Error submitting the form. Please try again.');
      });
    },
  });

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
              “ I started my Journey with innkeeper 6 months ago and all of my expectations towards the product design course I took have been met even more. Now I’m building my portfolio as I work with Innkeeper on different projects.”
            </h6>
          </div>
          <div className={style.seeDiv}>
            see more &gt;
          </div>
        </div>
      </div>
      <div className={style.container}>
        <h1>Application Form</h1>
        <h4 className={style.h4}>Fill in the correct information in the appropriate places below.</h4>
        <form onSubmit={formik.handleSubmit}>
          <div className={style.formName}>
            <Form.Group className="mb-4" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter firstname"
                {...formik.getFieldProps('firstName')}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error text-danger">{formik.errors.firstName}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-4" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter lastname"
                {...formik.getFieldProps('lastName')}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="error text-danger">{formik.errors.lastName}</div>
              ) : null}
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-4" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error text-danger">{formik.errors.email}</div>
              ) : null}
            </Form.Group>
          </div>
          <div className={style.formName}>
            <Form.Group className="mb-4" controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Age"
                {...formik.getFieldProps('age')}
              />
              {formik.touched.age && formik.errors.age ? (
                <div className="error text-danger">{formik.errors.age}</div>
              ) : null}
            </Form.Group>
            <Form.Group className={`mb-4 ${style.selectAge}`} controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Select {...formik.getFieldProps('gender')}>
                <option value="">Select gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </Form.Select>
              {formik.touched.gender && formik.errors.gender ? (
                <div className="error text-danger">{formik.errors.gender}</div>
              ) : null}
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-4" controlId="formCourse">
              <Form.Label>Choose Course</Form.Label>
              <Form.Select {...formik.getFieldProps('course')}>
                <option value="">Select Course Of Choice</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Product Management">Product Management</option>
              </Form.Select>
              {formik.touched.course && formik.errors.course ? (
                <div className="error text-danger">{formik.errors.course}</div>
              ) : null}
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-4" controlId="formPaymentOption">
              <Form.Label>Select Payment option</Form.Label>
              <Form.Select {...formik.getFieldProps('paymentOption')}>
                <option value="">Select Payment Option</option>
                <option value="Learn now pay later">Learn now pay later</option>
                <option value="Instant payment">Instant payment</option>
              </Form.Select>
              {formik.touched.paymentOption && formik.errors.paymentOption ? (
                <div className="error text-danger">{formik.errors.paymentOption}</div>
              ) : null}
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-4" controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a specific location"
                {...formik.getFieldProps('location')}
              />
              {formik.touched.location && formik.errors.location ? (
                <div className="error text-danger">{formik.errors.location}</div>
              ) : null}
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-4" controlId="formLearnMode">
              <Form.Label>Learn mode</Form.Label>
              <Form.Select {...formik.getFieldProps('learnMode')}>
                <option value="">Select Learn mode</option>
                <option value="online">Online</option>
                <option value="onsite">Onsite</option>
              </Form.Select>
              {formik.touched.learnMode && formik.errors.learnMode ? (
                <div className="error text-danger">{formik.errors.learnMode}</div>
              ) : null}
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-4" controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                {...formik.getFieldProps('phoneNumber')}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="error text-danger">{formik.errors.phoneNumber}</div>
              ) : null}
            </Form.Group>
          </div>
          <Button className={style.button} type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}
