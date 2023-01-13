import { Accordion, AccordionBody, AccordionHeader, AccordionItem, CardBody, Row, Col, Button, Card, CardImg, Navbar, Collapse, Nav, NavItem, NavLink, CardText, Badge, TabContent, TabPane, Offcanvas, OffcanvasHeader } from 'reactstrap'

import { Fragment, useState } from "react"
import { User, Lock, Bookmark, Bell, Link, AlignJustify, Rss, Info, Image, Users, Edit } from 'react-feather'
import SkillForm from '../components/SkillForm'

import CardAction from '@components/card-actions'

const Skills = () => {
    // const [canvasPlacement, setCanvasPlacement] = useState('start')
    // const [canvasOpen, setCanvasOpen] = useState(false)
    const [sendSidebarOpen, setSendSidebarOpen] = useState(false)
    const toggleSendSidebar = () => setSendSidebarOpen(!sendSidebarOpen)

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

                    <CardText>
                        Mobile Applicaation Design
                    </CardText>
                    <CardText>
                        level 2
                    </CardText>
                    <hr></hr>
                    <CardText>
                        Web Application Design
                    </CardText>
                    <CardText>
                        level 1
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
            <SkillForm toggleSidebar={toggleSendSidebar} open={sendSidebarOpen} />
        </Fragment>
    )
}
export default Skills