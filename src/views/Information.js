import { Fragment, useState, useRef } from "react"

import {
    Button,
    UncontrolledCollapse,
    ListGroup,
    ListGroupItem,
    Badge,
    Row,
    Col,
    CardText,
    Card,
    CardBody
} from "reactstrap"

import {
    Share2,
    MessageSquare,
    PhoneCall,
    PenTool,
    MapPin,
    ShoppingBag,
    Server,
    FileText,
    User,
    Link
} from "react-feather"

import Wizard from "@src/@core/components/wizard"
import Address from "./../components/steps/Address"
import SocialLinks from "./../components/steps/SocialLinks"
// import PersonalInfo from "./../components/steps/PersonalInfo"
// import AccountDetails from "./../components/steps/AccountDetails"
// import Info from "../components/steps/Info"
import PersonalInfo from "../components/steps/PeronalInfo"

const Information = () => {

    // ** Ref
    const ref = useRef(null)

    // ** State
    const [stepper, setStepper] = useState(null)

    const steps = [
        {
            id: "account-details",
            title: "Account Details",
            subtitle: "Enter Your Account Details.",
            icon: <FileText size={18} />,
            content: <PersonalInfo stepper={stepper} type="wizard-modern" />
        },
        // {
        //     id: "personal-info",
        //     title: "Personal Information",
        //     subtitle: "Fill out form",
        //     icon: <Link size={18} />,
        //     content: <Info stepper={stepper} type="wizard-modern" />
        // },
        // {
        //     id: "personal-info",
        //     title: "Personal Info",
        //     subtitle: "Add Personal Info",
        //     icon: <User size={18} />,
        //     content: <PersonalInfo stepper={stepper} type="wizard-modern" />
        // },
        {
            id: "step-address",
            title: "Address",
            subtitle: "Add Address",
            icon: <MapPin size={18} />,
            content: <Address stepper={stepper} type="wizard-modern" />
        },
        {
            id: "social-links",
            title: "Social Links",
            subtitle: "Add Social Links",
            icon: <Link size={18} />,
            content: <SocialLinks stepper={stepper} type="wizard-modern" />
        }

    ]

    return (
        <Fragment>
            {/* <Card>
                <CardBody> */}
                    <Row className="my-2">
                        <Col className="d-flex align-items-center justify-content-center mb-2 mb-md-0" xs="12">
                            <div className="modern-horizontal-wizard">
                                <Wizard
                                    type="modern-horizontal"
                                    ref={ref}
                                    steps={steps}
                                    options={{
                                        linear: false
                                    }}
                                    instance={(el) => setStepper(el)}
                                />
                            </div>
                        </Col>
                    </Row>
                {/* </CardBody>
            </Card> */}
        </Fragment>
    )
}


export default Information
