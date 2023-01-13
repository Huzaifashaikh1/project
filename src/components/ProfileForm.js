import Sidebar from "@components/sidebar"

// ** Icons Imports
// import { Link } from "react-feather"
// ** Reactstrap Imports
import { Form, Input, Label, Badge, Col, Row, CardBody, Button, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap"
// ** Third Party Component

import Avatar from '@components/avatar'


const SkillForm = ({ open, toggleSidebar }) => {
    return (
        <Sidebar
            width={500}
            size="lg"
            open={open}
            title="Edit Account"
            headerClassName="mb-1"
            contentClassName="p-0"
            bodyClassName="pb-sm-0 pb-3"
            toggleSidebar={toggleSidebar}
        >
            <Form>
                <div className='d-flex justify-content-center align-items-center mb-1'>
                    <Avatar className='me-1' imgHeight='10' imgWidth='10' style={{width:'100px', height:'100px'}} />
                </div>
                <div className='profile-user-info d-flex justify-content-center'>
                    <h6 className='mb-0'>Huzaifa</h6>
                    <hr></hr>
                </div>
                

                <div className="mb-1">
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
                </div>
                <div className="mb-1">
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
                </div>
                <div className="mb-1">
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
                </div>

                <div className="mb-1">
                    <Row>
                        {/* <div className='demo-inline-spacing'> */}
                        <Col md='6' sm='12' lg="6" className='mb-1'>
                            <div className='form-check form-switch'>
                                <Label for='exampleCustomSwitch' className='form-check-label'>
                                    SMS Notification
                                </Label>
                                <Input type='switch' name='customSwitch' id='exampleCustomSwitch' />
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className='form-check form-switch'>
                                <Label for='exampleCustomSwitchDisabled' className='form-check-label'>
                                    Email Notification
                                </Label>
                                <Input disabled type='switch' name='customSwitchDisabled' id='exampleCustomSwitchDisabled' />
                            </div>
                        </Col>
                        {/* </div> */}

                    </Row>
                </div>

                <div className="d-flex flex-wrap mt-2" style={{ paddingLeft: "130px" }}>
                    <Button className="me-1" color="primary" onClick={toggleSidebar}>
                        Save
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