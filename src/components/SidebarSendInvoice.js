import Sidebar from "@components/sidebar"
// ** Icons Imports
import { Link } from "react-feather"
// ** Reactstrap Imports
import { Form, Input, Label, Badge, Button, Col, Row } from "reactstrap"
// ** Third Party Component
import Select from "react-select"
// ** Utils
import { selectThemeColors } from "@utils"
import PickerRange from "./PickerRange"
const colourOptions = [
    { value: "ocean", label: "Ocean" },
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" }

]

const SidebarSendInvoice = ({ open, toggleSidebar }) => {
    return (
        <Sidebar
            width={500}
            size="lg"
            open={open}
            title="Add Experience"
            headerClassName="mb-1"
            contentClassName="p-0"
            bodyClassName="pb-sm-0 pb-3"
            toggleSidebar={toggleSidebar}
        >
            <Form>
                <div className="mb-1">
                    <Label for="invoice-from" className="form-label">
                        Title*
                    </Label>
                    <Input id="invoice-from" defaultValue="UI/UX Developer" placeholder="" />
                </div>
                <div className="mb-1">
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
                </div>

                {/* <Col md="6" sm="12" className="mb-1">
                    <PickerRange />
                </Col> */}
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

                </div>
                <div className="mt-2">
                    <Label for="invoice-message" className="form-label">
                        Description
                    </Label>

                    <Input type="textarea" cols="3" rows="3" id="invoice-message" defaultValue={``} />
                </div>

                {/*   <div className="mb-1">

          <Badge color="light-primary">

            <Link className="me-50" size={14} />

            <span className="align-middle">Invoice Attached</span>

          </Badge>

  </div>*/}

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

export default SidebarSendInvoice