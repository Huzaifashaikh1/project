import { Accordion, AccordionBody, AccordionHeader, AccordionItem, CardBody, Row, Col, Button, Card, CardImg, Navbar, Collapse, Nav, NavItem, NavLink, CardText, Badge, TabContent, TabPane, Offcanvas, OffcanvasHeader } from 'reactstrap'

import { Fragment, useState } from "react"
import { User, Lock, Bookmark, Bell, Link, AlignJustify, Rss, Info, Image, Users, Edit} from 'react-feather'
// import Sidebar from "@components/sidebar";

import CardAction from '@components/card-actions'
import SidebarSendInvoice from '../components/SidebarSendInvoice'

const Education = () => {
    
    const [sendSidebarOpen, setSendSidebarOpen] = useState(false)

    // ** Functions to toggle add & send sidebar
  
    const toggleSendSidebar = () => setSendSidebarOpen(!sendSidebarOpen)

    // const [canvasPlacement, setCanvasPlacement] = useState('start')
    // const [canvasOpen, setCanvasOpen] = useState(false)

    // const toggleCanvasStart = () => {
    //     setCanvasPlacement('start')
    //     setCanvasOpen(!canvasOpen)
    // }
    

    // const toggleCanvasEnd = () => {
    //     setCanvasPlacement('end')
    //     setCanvasOpen(!canvasOpen)
    // }

    return (
        <Fragment>
            <CardAction title='Skills' actions='collapse'>
                <CardBody className='pt-0'>

                    <h5>DHA Suffa</h5>
                    <CardText>
                    BSCS - Computer Science
                    </CardText>
                    <CardText>
                    Sep 2018 - Aug 2022 . 4 yrs
                    </CardText>
                    <CardText>
                  Karachi pakistan
                    </CardText>
                    <hr></hr>

                    <h5>Army Public College</h5>
                    <CardText>
                    Intermediate
                    </CardText>
                    <CardText>
                    Mar 2016 - Mar 2018 . 2 yrs
                    </CardText>
                    <CardText>
                  Karachi pakistan
                    </CardText>
                    <hr></hr>
                    <div className='demo-inline-spacing'>
                        <Button color='primary' onClick={() => {
                            setSendSidebarOpen(true)
                        }}>
                            Add
                        </Button>
                        {/* <Row>
                            <Col lg="12">
                                <Offcanvas direction={canvasPlacement} isOpen={canvasOpen} toggle={toggleCanvasStart} >
                                    <OffcanvasHeader toggle={toggleCanvasStart}>OffCanvas {canvasPlacement}</OffcanvasHeader>
                                </Offcanvas>
                            </Col>
                        </Row> */}
                    </div>
                </CardBody>
            </CardAction>
            <SidebarSendInvoice toggleSidebar={toggleSendSidebar} open={sendSidebarOpen} />
        </Fragment>
        
    )
}
export default Education