// // ** React Imports
// import { Fragment } from 'react'

// // ** Third Party Components
// import { useForm, Controller } from 'react-hook-form'
// import { ArrowLeft, ArrowRight } from 'react-feather'

// // ** Reactstrap Imports
// import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

// const defaultValues = {
//   city: '',
//   pincode: '',
//   address: '',
//   landmark: ''
// }

// const Address = ({ stepper }) => {
//   // ** Hooks
//   const {
//     control,
//     setError,
//     handleSubmit,
//     formState: { errors }
//   } = useForm({ defaultValues })

//   const onSubmit = data => {
//     if (Object.values(data).every(field => field.length > 0)) {
//       stepper.next()
//     } else {
//       for (const key in data) {
//         if (data[key].length === 0) {
//           setError(key, {
//             type: 'manual',
//             message: `Please enter a valid ${key}`
//           })
//         }
//       }
//     }
//   }

//   return (
//     <Fragment>
//       <div className='content-header'>
//         <h5 className='mb-0'>Address</h5>
//         <small>Enter Your Address.</small>
//       </div>
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <Row>
//           <Col md='6' className='mb-1'>
//             <Label className='form-label' for='address'>
//               Address
//             </Label>
//             <Controller
//               id='address'
//               name='address'
//               control={control}
//               render={({ field }) => (
//                 <Input placeholder='98  Borough bridge Road, Birmingham' invalid={errors.address && true} {...field} />
//               )}
//             />
//             {errors.address && <FormFeedback>{errors.address.message}</FormFeedback>}
//           </Col>
//           <Col md='6' className='mb-1'>
//             <Label className='form-label' for='landmark'>
//               Landmark
//             </Label>
//             <Controller
//               id='landmark'
//               name='landmark'
//               control={control}
//               render={({ field }) => (
//                 <Input placeholder='Borough bridge' invalid={errors.landmark && true} {...field} />
//               )}
//             />
//             {errors.landmark && <FormFeedback>{errors.landmark.message}</FormFeedback>}
//           </Col>
//         </Row>
//         <Row>
//           <Col md='6' className='mb-1'>
//             <Label className='form-label' for='pincode'>
//               Pincode
//             </Label>
//             <Controller
//               id='pincode'
//               name='pincode'
//               control={control}
//               render={({ field }) => <Input placeholder='658921' invalid={errors.pincode && true} {...field} />}
//             />
//             {errors.pincode && <FormFeedback>{errors.pincode.message}</FormFeedback>}
//           </Col>
//           <Col md='6' className='mb-1'>
//             <Label className='form-label' for='city'>
//               City
//             </Label>
//             <Controller
//               id='city'
//               name='city'
//               control={control}
//               render={({ field }) => <Input placeholder='Birmingham' invalid={errors.city && true} {...field} />}
//             />
//             {errors.city && <FormFeedback>{errors.city.message}</FormFeedback>}
//           </Col>
//         </Row>
//         <div className='d-flex justify-content-between'>
//           <Button type='button' color='primary' className='btn-prev' onClick={() => stepper.previous()}>
//             <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
//             <span className='align-middle d-sm-inline-block d-none'>Previous</span>
//           </Button>
//           <Button type='submit' color='primary' className='btn-next'>
//             <span className='align-middle d-sm-inline-block d-none'>Next</span>
//             <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
//           </Button>
//         </div>
//       </Form>
//     </Fragment>
//   )
// }

// export default Address

// import Sidebar from "@components/sidebar"
// // ** Icons Imports
// import { Link } from "react-feather"
// ** Reactstrap Imports
import { Form, Input, Label, Badge, Button, Col, Row, Card, CardBody, CardText, CardTitle } from "reactstrap"
// import { read, utils } from 'xlsx'
// import toast from 'react-hot-toast'
// import { useDropzone } from 'react-dropzone'
// import { DownloadCloud } from 'react-feather'
// import ExtensionsHeader from '@components/extensions-header'
import '@styles/react/libs/file-uploader/file-uploader.scss'
// import Flatpickr from 'react-flatpickr'
// import Select from "react-select"
// import { selectThemeColors } from "@utils"
import Select from "react-select"
import { selectThemeColors } from "@utils"


// import { Row, Col, Card, CardBody, Table, CardHeader, CardTitle, Input, Label } from 'reactstrap'

// import CardAction from '@components/card-actions'
// import { ChevronDown, RotateCw, X, Star } from 'react-feather'

import {
  Fragment
} from 'react'
// // ** Third Party Component
// import Select from "react-select"
// // // ** Utils
// import { selectThemeColors } from "@utils"
// import PickerRange from "./PickerRange"

const Information = ({ toggleSidebar }) => {
  // const [picker, setPicker] = useState(new Date())
  const colourOptions = [
      { value: "Intermediate", label: "Intermediate" },
      { value: "blue", label: "Blue" },
      { value: "purple", label: "Purple" },
      { value: "red", label: "Red" },
      { value: "orange", label: "Orange" }

  ]

  // const [picker, setPicker] = useState(new Date())
  // const colourOptions = [
  //   { value: "Intermediate", label: "Intermediate" },
  //   { value: "blue", label: "Blue" },
  //   { value: "purple", label: "Purple" },
  //   { value: "red", label: "Red" },
  //   { value: "orange", label: "Orange" }

  // ]

  return (
    <Fragment>
      <Row style={{ justifyContent: 'center' }}>
        <Col lg="10" style={{ paddingTop: '30px' }} >
          {/* <Card> */}
          {/* <h4 style={{ textAlign: 'center' }}>My Experience</h4> */}

          <Form>
            <h4 style={{ textAlign: 'center' }}>Application Questions</h4>
            <br></br>

            <div className="mb-1">
              <Label for="invoice-subject" className="form-label">
                Would you like to receive mobile text message updates from ( Company ) regarding the recruiting process? *
              </Label>
              <Row>
                <Col lg="4">
                  <div className='form-check'>
                    <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                    <Label className='form-check-label' for='ex1-active'>
                      Checked
                    </Label>
                  </div>
                </Col>
                <Col lg="4">
                  <div className='form-check'>
                    <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                    <Label className='form-check-label' for='ex1-active'>
                      Checked
                    </Label>
                  </div>
                </Col>
              </Row>
            </div>
            <br></br>
            <div className="mb-1">
              <Label for="invoice-subject" className="form-label">
                Are you willing to relocate your job? *
              </Label>
              <Row>
                <Col lg="4">
                  <div className='form-check'>
                    <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                    <Label className='form-check-label' for='ex1-active'>
                      Checked
                    </Label>
                  </div>
                </Col>
                <Col lg="4">
                  <div className='form-check'>
                    <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                    <Label className='form-check-label' for='ex1-active'>
                      Checked
                    </Label>
                  </div>
                </Col>
              </Row>
            </div>
            <br></br>
            <div className="mb-1">
              <Label for="invoice-subject" className="form-label">
                Do you have a direct family member who currently works for ( Company )? *
              </Label>
              <Row>
                <Col lg="4">
                  <div className='form-check'>
                    <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                    <Label className='form-check-label' for='ex1-active'>
                      Checked
                    </Label>
                  </div>
                </Col>
                <Col lg="4">
                  <div className='form-check'>
                    <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                    <Label className='form-check-label' for='ex1-active'>
                      Checked
                    </Label>
                  </div>
                </Col>
              </Row>
            </div>
            <br></br>
            <div className="mb-1">
              <Label for="invoice-subject" className="form-label">
                Have you previously worked for company as a Employee? *
              </Label>
              <Row>
                <Col lg="4">
                  <div className='form-check'>
                    <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                    <Label className='form-check-label' for='ex1-active'>
                      Checked
                    </Label>
                  </div>
                </Col>
                <Col lg="4">
                  <div className='form-check'>
                    <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                    <Label className='form-check-label' for='ex1-active'>
                      Checked
                    </Label>
                  </div>
                </Col>
              </Row>
            </div>
            <br></br>

            <div className="mb-1">
              <Label for="invoice-subject" className="form-label">
                Can you verify your authorization to work in the ( Country ) if hired for this position? *
              </Label>

              <Row>
                <Col lg="4">
                  <div className='form-check'>
                    <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                    <Label className='form-check-label' for='ex1-active'>
                      Checked
                    </Label>
                  </div>
                </Col>

                <Col lg="4">
                  <div className='form-check'>
                    <Input type='radio' id='ex1-active' name='ex1' defaultChecked />
                    <Label className='form-check-label' for='ex1-active'>
                      Checked
                    </Label>
                  </div>
                </Col>
              </Row>
            </div>
            <br></br>

            <div className="mb-1">
              <Label for="invoice-to" className="form-label">
                Speaking Proficiency*
              </Label>
              <Select
                theme={selectThemeColors}
                className="react-select"
                classNamePrefix="select"
                defaultValue={colourOptions[0]}
                options={colourOptions}
                isClearable={false}
              />
            </div>

            <br></br>

            <div className="d-flex flex-wrap mt-2">
              <Button className="me-1" color="primary" onClick={toggleSidebar}>
                Save and Continue
              </Button>
              <Button color="secondary" outline onClick={toggleSidebar}>
                Back
              </Button>
            </div>

          </Form>
          {/* </Card> */}
        </Col>
      </Row>
    </Fragment>

  )
}
export default Information
