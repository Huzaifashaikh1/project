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
import Flatpickr from 'react-flatpickr'
import Select from "react-select"
import { selectThemeColors } from "@utils"


// import { Row, Col, Card, CardBody, Table, CardHeader, CardTitle, Input, Label } from 'reactstrap'

// import CardAction from '@components/card-actions'
// import { ChevronDown, RotateCw, X, Star } from 'react-feather'

import {
    Fragment, useState
} from 'react'
// // ** Third Party Component
// import Select from "react-select"
// // // ** Utils
// import { selectThemeColors } from "@utils"
// import PickerRange from "./PickerRange"

const Information = ({ toggleSidebar }) => {
    const [picker, setPicker] = useState(new Date())
    const colourOptions = [
        { value: "Intermediate", label: "Intermediate" },
        { value: "blue", label: "Blue" },
        { value: "purple", label: "Purple" },
        { value: "red", label: "Red" },
        { value: "orange", label: "Orange" }

    ]

    return (
        <Fragment>
            <Row style={{ justifyContent: 'center' }}>
                <Col lg="10" style={{paddingTop:'30px'}} >
                    {/* <Card> */}
                        {/* <h4 style={{ textAlign: 'center' }}>My Experience</h4> */}

                        <Form>
                            <h4 style={{textAlign:'center'}}>Work Experience</h4>


                            <div className="mb-1">
                                <Label for="invoice-subject" className="form-label">
                                    Job Title*
                                </Label>
                                <Input id="invoice-subject" defaultValue="UI/UX Designer" placeholder="" size="sm" />
                            </div>
                            <div className="mb-1">
                                <Label for="invoice-subject" className="form-label">
                                    Company*
                                </Label>
                                <Input id="invoice-subject" defaultValue="KAISPE" placeholder="" size="sm" />
                            </div>
                            <div className="mb-1">
                                <Label for="invoice-subject" className="form-label">
                                    Location*
                                </Label>
                                <Input id="invoice-subject" defaultValue="Karachi" placeholder="" size="sm" />
                            </div>

                            <div className="mb-1">
                                <div className='form-check form-check-inline'>
                                    <Input type='checkbox' id='basic-cb-unchecked' />
                                    <Label for='basic-cb-unchecked' className='form-check-label'>
                                        Currently Working
                                    </Label>
                                </div>
                            </div>
                            <div className="mb-1">
                                <Label className='form-label' for='date-time-picker'>
                                    Date & Time
                                </Label>
                                <Flatpickr
                                    value={picker}
                                    data-enable-time
                                    id='date-time-picker'
                                    className='form-control'
                                    onChange={date => setPicker(date)}
                                />
                            </div>

                            <div className="mb-1">
                                <Label for="invoice-subject" className="form-label">
                                    Description
                                </Label>
                                <Input type="textarea" id="invoice-subject" defaultValue="Mobile Applications · UI/UX · Web Application Design · User Interface Prototyping · User Experience Design (UED) · Wireframing · Figma (Software)" placeholder="" size="sm" />
                            </div>

                            <div className="d-flex flex-wrap mt-2">
                                <Button className="me-1" color="primary" onClick={toggleSidebar}>
                                    Save and Continue
                                </Button>
                            </div>
                            <br></br>
                            <hr></hr>

                            <h4 style={{textAlign:'center'}}>Education</h4>


                            <div className="mb-1">
                                <Label for="invoice-subject" className="form-label">
                                    School or University*
                                </Label>
                                <Input id="invoice-subject" defaultValue="DHA SUFFA University" placeholder="" size="sm" />
                            </div>
                            <div className="mb-1">
                                <Label for="invoice-subject" className="form-label">
                                    Degree*
                                </Label>
                                <Input id="invoice-subject" defaultValue="Bachelors" placeholder="" size="sm" />
                            </div>
                            <div className="mb-1">
                                <Label for="invoice-subject" className="form-label">
                                    Field of Study*
                                </Label>
                                <Input id="invoice-subject" defaultValue="Computer Science" placeholder="" size="sm" />
                            </div>
                            <div className="mb-1">
                                <Label for="invoice-subject" className="form-label">
                                    CGPA / Percentage
                                </Label>
                                <Input id="invoice-subject" defaultValue="2.92" placeholder="" size="sm" />
                            </div>

                            <Row>
                                <Col md='6' sm='12' className='mb-1'>
                                    <Label className='form-label' for='date-time-picker'>
                                        Start Date
                                    </Label>
                                    <Flatpickr
                                        value={picker}
                                        data-enable-time
                                        id='date-time-picker'
                                        className='form-control'
                                        onChange={date => setPicker(date)}
                                    />
                                </Col>
                                <Col md='6' sm='12' className='mb-1'>
                                    <Label className='form-label' for='date-time-picker'>
                                        End Date ( Actual or Expected )
                                    </Label>
                                    <Flatpickr
                                        value={picker}
                                        data-enable-time
                                        id='date-time-picker'
                                        className='form-control'
                                        onChange={date => setPicker(date)}
                                    />
                                </Col>
                            </Row>

                            <div className="d-flex flex-wrap mt-2">
                                <Button className="me-1" color="primary" onClick={toggleSidebar}>
                                    Save and Continue
                                </Button>
                            </div>

                            <br></br>
                            <hr></hr>

                            <h4 style={{textAlign:'center'}}>Languages</h4>

                            <div className="mb-1">
                                <Label for="invoice-subject" className="form-label">
                                    Language*
                                </Label>
                                <Input id="invoice-subject" defaultValue="English" placeholder="" size="sm" />
                            </div>
                            <div className="mb-1">
                                <div className='form-check form-check-inline'>
                                    <Input type='checkbox' id='basic-cb-unchecked' />
                                    <Label for='basic-cb-unchecked' className='form-check-label'>
                                        I am fluent in this language
                                    </Label>
                                </div>
                            </div>

                            <Row>
                                <Col md='6' sm='12' className='mb-1'>
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
                                </Col>
                                <Col md='6' sm='12' className='mb-1'>
                                    <Label for="invoice-to" className="form-label">
                                        Employment Type*
                                    </Label>
                                    <Select
                                        theme={selectThemeColors}
                                        className="react-select"
                                        classNamePrefix="select"
                                        defaultValue={colourOptions[0]}
                                        options={colourOptions}
                                        isClearable={false}
                                    />
                                </Col>
                            </Row>

                            <div className="d-flex flex-wrap mt-2">
                                <Button className="me-1" color="primary" onClick={toggleSidebar}>
                                    Save and Continue
                                </Button>
                            </div>

                            <br></br>
                            <hr></hr>

                            <h4 style={{textAlign:'center'}}>Social Network ( URLs )</h4>


                            <div className="mb-1">
                                <Label for="invoice-subject" className="form-label">
                                LinkedIn
                                </Label>
                                <Input id="invoice-subject" defaultValue="https//:hamza.arif" placeholder="" size="sm" />
                            </div>
                            <div className="mb-1">
                                <Label for="invoice-subject" className="form-label">
                                Behance
                                </Label>
                                <Input id="invoice-subject" defaultValue="https//:hamza.arif" placeholder="" size="sm" />
                            </div>

                            <br></br>
                            {/* <hr></hr> */}
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
