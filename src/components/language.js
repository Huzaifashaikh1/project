import { Accordion, AccordionBody, AccordionHeader, AccordionItem, CardBody, Row, Col, Button, Card, CardImg, Navbar, Collapse, Nav, NavItem, NavLink, CardText, Badge, TabContent, TabPane, Offcanvas, OffcanvasHeader } from 'reactstrap'

import { Fragment, useState } from "react"
import { User, Lock, Bookmark, Bell, Link, AlignJustify, Rss, Info, Image, Users, Edit } from 'react-feather'


import CardAction from '@components/card-actions'

const Skills = () => {
    const [canvasPlacement, setCanvasPlacement] = useState('start')
    const [canvasOpen, setCanvasOpen] = useState(false)

    const toggleCanvasStart = () => {
        setCanvasPlacement('start')
        setCanvasOpen(!canvasOpen)
    }

    const toggleCanvasEnd = () => {
        setCanvasPlacement('end')
        setCanvasOpen(!canvasOpen)
    }

    return (
        <Fragment>
            <CardAction title='Language' actions='collapse'>
                <CardBody className='pt-0'>

                   <h5>English</h5>
                    <CardText>
                    Speaking Proficiency : Intermediate
                    </CardText>
                    
                    <CardText>
                    Reading Proficiency : Intermediate
                    </CardText>
                    <hr></hr>

                    <h5>Chineese</h5>
                    <CardText>
                    Speaking Proficiency : Intermediate
                    </CardText>
                    
                    <CardText>
                    Reading Proficiency : Intermediate
                    </CardText>
                    <hr></hr>

                    <div className='demo-inline-spacing'>
                        <Button color='primary' onClick={toggleCanvasEnd}>
                            Add
                        </Button>
                        <Row>
                            <Col lg="12">
                                <Offcanvas direction={canvasPlacement} isOpen={canvasOpen} toggle={toggleCanvasStart} >

                                    <OffcanvasHeader toggle={toggleCanvasStart}>OffCanvas {canvasPlacement}</OffcanvasHeader>
                                </Offcanvas>

                            </Col>
                        </Row>

                    </div>
                </CardBody>
            </CardAction>
        </Fragment>
    )
}
export default Skills