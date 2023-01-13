import { Accordion, AccordionBody, AccordionHeader, AccordionItem, CardBody, Row, Col, Button, Card, CardImg, Navbar, Collapse, Nav, NavItem, NavLink, CardText, Badge, TabContent, TabPane, Offcanvas, OffcanvasHeader } from 'reactstrap'

import { Fragment, useState } from "react"
import { User, Lock, Bookmark, Bell, Link, AlignJustify, Rss, Info, Image, Users, Edit } from 'react-feather'

import SidebarSendInvoice from '../components/SidebarSendInvoice'
import CardAction from '@components/card-actions'

const Education = () => {

    const [sendSidebarOpen, setSendSidebarOpen] = useState(false)
    const toggleSendSidebar = () => setSendSidebarOpen(!sendSidebarOpen)

    return (
        <Fragment>

            <CardAction title='Experience' actions='collapse'>
                <CardBody className='pt-0'>

                    <CardText>
                        UI/UX Developer
                    </CardText>
                    <CardText>
                        KAISPE - Full-Time
                    </CardText>
                    <CardText>
                        Oct 2022 - Present
                    </CardText>
                    <hr></hr>

                    <CardText>
                        Mobile Applications · UI/UX · Web Application Design · User Interface Prototyping · User Experience Design (UED) · Wireframing · Figma (Software)
                    </CardText>
                    <CardText>
                        Karachi, Sindh, Pakistan.
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