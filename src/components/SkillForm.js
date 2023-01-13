import Sidebar from "@components/sidebar"

// ** Icons Imports
// import { Link } from "react-feather"
// ** Reactstrap Imports
import { Form, Input, Label, Badge, Col, Row, CardBody, Button, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap"
// ** Third Party Component
import Select from "react-select"
import Rating from 'react-rating'
import { Star } from 'react-feather'
// ** Utils
// import { selectThemeColors } from "@utils"
// import PickerRange from "./PickerRange"
// const colourOptions = [
//     { value: "ocean", label: "Ocean" },
//     { value: "blue", label: "Blue" },
//     { value: "purple", label: "Purple" },
//     { value: "red", label: "Red" },
//     { value: "orange", label: "Orange" }

// ]

const SkillForm = ({ open, toggleSidebar }) => {
    return (
        <Sidebar
            width={500}
            size="lg"
            open={open}
            title="Add Skill"
            headerClassName="mb-1"
            contentClassName="p-0"
            bodyClassName="pb-sm-0 pb-3"
            toggleSidebar={toggleSidebar}
        >
            <Form>
                <div className="mb-1">
                    <Label for="invoice-from" className="form-label">
                        Skills
                    </Label>
                    <div className='demo-inline-spacing' >

                        <UncontrolledButtonDropdown style={{ width: "700px" }}>
                            <DropdownToggle outline color='secondary' caret>
                                UI/ UX Designing
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                                    Option 3
                                </DropdownItem>
                                <DropdownItem divider></DropdownItem>
                                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                                    Separated Link
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>

                    </div>
                </div>
                <div className="mb-1">
                    <Label for="invoice-from" className="form-label">
                        Skill Level*
                    </Label>
                    {/* <CardBody>
                        <Rating
                            // direction={dir}
                            initialRating={2}
                            emptySymbol={<Star size={32} fill='#babfc7' stroke='#babfc7' />}
                            fullSymbol={<Star size={32} fill={filledColor} stroke={filledColor} />}
                        />
                        
                    </CardBody> */}
                </div>
                {/* <div className="mb-1">
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
                </div>
                <div className="mb-1">
                    <Label for="invoice-subject" className="form-label">
                        Company Name*
                    </Label>
                    <Input id="invoice-subject" defaultValue="KAISPE" placeholder="" />
                </div>

                <div className="mb-1">
                    <Label for="invoice-subject" className="form-label">
                        Location
                    </Label>
                    <Input id="invoice-subject" defaultValue="Karachi, Pakistan" placeholder="" />
                </div>

                <div className="mb-1">
                    <Label for="invoice-to" className="form-label">
                        Location Type*
                    </Label>

                    <Select
                        theme={selectThemeColors}
                        className="react-select"
                        classNamePrefix="select"
                        defaultValue={colourOptions[0]}
                        options={colourOptions}
                        isClearable={false}
                    />
                </div> */}

                {/* <Col md="6" sm="12" className="mb-1">
                    <PickerRange />
                </Col> */}
                {/* <Row>
                    <Col md='6' sm='12' className='mb-1'>
                        <Label className='form-label' for='nameMulti'>
                            Start Date
                        </Label>
                        <Input type='text' name='name' id='nameMulti' placeholder='First Name' />
                    </Col>
                    <Col md='6' sm='12' className='mb-1'>
                        <Label className='form-label' for='lastNameMulti'>
                            End Date
                        </Label>
                        <Input type='text' name='lastname' id='lastNameMulti' placeholder='Last Name' />
                    </Col>
                </Row>
                <Row>
                    <Col md='6' sm='12' className='mb-1'>
                        <Label className='form-label' for='nameMulti'>
                            Start Date
                        </Label>
                        <Input type='text' name='name' id='nameMulti' placeholder='First Name' />
                    </Col>
                    <Col md='6' sm='12' className='mb-1'>
                        <Label className='form-label' for='lastNameMulti'>
                            End Date
                        </Label>
                        <Input type='text' name='lastname' id='lastNameMulti' placeholder='Last Name' />
                    </Col>
                </Row>

                <div className="form-check form-check-inline">
                    <Input type="checkbox" defaultChecked id="basic-cb-checked" />
                    <Label for="basic-cb-checked" className="form-check-label">
                        Currently Working
                    </Label>

                </div> */}

                <div className="mt-2">
                    <Label for="invoice-message" className="form-label">
                        Description
                    </Label>

                    <Input type="textarea" cols="3" rows="3" id="invoice-message" defaultValue={``} />
                </div>
                <div className="d-flex flex-wrap mt-2">
                    <Button className="me-1" color="primary" onClick={toggleSidebar}>
                        Send
                    </Button>
                    <Button color="secondary" outline onClick={toggleSidebar}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </Sidebar>
    )
}

export default SkillForm