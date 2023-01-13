// ** React Imports
// import { Fragment, useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, CardBody, Row, Col, Button, Card, CardImg, Navbar, Collapse, Nav, NavItem, NavLink, CardText, Badge, TabContent, TabPane, Offcanvas, OffcanvasHeader } from 'reactstrap'

import { Fragment, useState } from "react"
import { User, Lock, Bookmark, Bell, Link, AlignJustify, Rss, Info, Image, Users, Edit } from 'react-feather'

import Education from '../components/Education'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Language from '../components/language'
import ProfileForm from '../components/ProfileForm'
import Select from 'react-select'

// import img from '../assets/images/portrait/small/avatar-s-11.jpg'
import coverImg from '../assets/images/portrait/small/state.jpg'
// import CardAction from '@components/card-actions'
import { right } from '@popperjs/core'

// ** Reactstrap Imports
// import { Offcanvas, OffcanvasHeader, OffcanvasBody, CardBody, CardText, CardTitle, Card, CardImg, Navbar, Nav, NavItem, NavLink, Button, Row, Col, TabContent, TabPane } from 'reactstrap'


const Profile = () => {
    const [sendSidebarOpen, setSendSidebarOpen] = useState(false)
    const [active, setActive] = useState('1')
    const toggleSendSidebar = () => setSendSidebarOpen(!sendSidebarOpen)

    const data = [
        {
            // avatar: img,
            username: "Kitty Allanson",
            designation: "UI/UX Designer"
            // coverImg: "/static/media/timeline.91041dd4.jpg"
        }
    ]

    // const [isOpen, setIsOpen] = useState(false)

    // const toggle = () => setIsOpen(!isOpen)

    const toggleTab = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }

    return (
        // <Fragment>
        //     <Row>
        //         <Col>
        //             <CardAction title='Experience' actions='collapse'>
        //                 <Button color='primary'>
        //                     Add
        //                 </Button>
        //                 <CardBody className='pt-0'>
        //                     <Accordion className='accordion-border' open={open} toggle={toggle}>
        //                         <AccordionItem>
        //                             <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
        //                             <AccordionBody accordionId='1'>
        //                                 Gummi bears toffee soufflé jelly carrot cake pudding sweet roll bear claw. Sweet roll gingerbread wafer
        //                                 liquorice cake tiramisu. Gummi bears caramels bonbon icing croissant lollipop topping lollipop danish.
        //                                 Marzipan tootsie roll bonbon toffee icing lollipop cotton candy pie gummies. Gingerbread bear claw chocolate
        //                                 cake bonbon. Liquorice marzipan cotton candy liquorice tootsie roll macaroon marzipan danish.
        //                             </AccordionBody>
        //                         </AccordionItem>
        //                         <AccordionItem>
        //                             <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>
        //                             <AccordionBody accordionId='2'>
        //                                 Soufflé sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer
        //                                 cookie. Soufflé fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping
        //                                 toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon soufflé apple pie cake.
        //                             </AccordionBody>
        //                         </AccordionItem>
        //                         <AccordionItem>
        //                             <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>
        //                             <AccordionBody accordionId='3'>
        //                                 Soufflé sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer
        //                                 cookie. Soufflé fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping
        //                                 toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon soufflé apple pie cake.
        //                             </AccordionBody>
        //                         </AccordionItem>
        //                         <AccordionItem>
        //                             <AccordionHeader targetId='4'>Accordion Item 4</AccordionHeader>
        //                             <AccordionBody accordionId='4'>
        //                                 Marzipan candy apple pie icing. Sweet roll pudding dragée icing icing cookie pie fruitcake caramels. Bonbon
        //                                 candy canes candy canes. Dragée jelly beans chocolate bar dragée biscuit fruitcake gingerbread toffee apple
        //                                 pie. Gingerbread donut powder ice cream sesame snaps jelly beans oat cake. Candy wafer pudding dragée gummies.
        //                                 Carrot cake macaroon cake sesame snaps caramels.
        //                             </AccordionBody>
        //                         </AccordionItem>
        //                     </Accordion>
        //                 </CardBody>
        //             </CardAction>
        //         </Col>
        //     </Row>

        // // </Fragment>

        <Fragment>

            <Fragment>
                <div id='user-profile'>
                    <Row>
                        <Col sm='12'>
                            <Card className='profile-header mb-2'>
                                <CardImg src={coverImg} alt='User Profile Image' top />
                                <div className='position-relative'>
                                    <div className='profile-img-container d-flex align-items-center'>

                                        {/* <div className='profile-img'>
                                        <img className='rounded img-fluid' src={img} alt='Card image' />
                                    </div> */}
                                        <div className='profile-title ms-3'>
                                            <h2 className='text-white'>{data.username}</h2>
                                            <p className='text-white'>{data.designation}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='profile-header-nav ps-5 p-2'>

                                    <h5>Hamza Bin Arif</h5>
                                    <CardText>
                                        UI/UX Designer
                                    </CardText>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col lg="4">
                        <Card title='Profile Detail' actions='collapse' >
                            {/* <Col lg='2' className='end'>
                            <Button size='sm'>Edit</Button>
                            </Col> */}
                            {/* <Row>

                            </Row> */}

                            <Col>
                                <Button.Ripple outline color='primary' className='align-center' style={{ float: right, margin: 10 }} size='sm' 
                                onClick={() => {
                                    setSendSidebarOpen(true)
                                }}
                                >
                                    Edit
                                </Button.Ripple>
                                  {/* <Button color='primary' onClick={() => {
                            setSendSidebarOpen(true)
                        }}>
                            Add
                        </Button> */}
                            </Col>
            <ProfileForm toggleSidebar={toggleSendSidebar} open={sendSidebarOpen} />
                            <CardBody className='pt-0'>
                                <div className='info-container'>

                                    <ul className='list-unstyled'>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Username:</span>
                                            <span>username</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Billing Email:</span>
                                            <span>email</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Status:</span>
                                            <Badge className='text-capitalize'>
                                                status
                                            </Badge>
                                        </li>
                                        <li className='mb-75'>F
                                            <span className='fw-bolder me-25'>Role:</span>
                                            <span className='text-capitalize'>role</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Tax ID:</span>
                                            <span>Tax-12345</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Contact:</span>
                                            <span>8238947323232</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Language:</span>
                                            <span>English</span>
                                        </li>
                                        <li className='mb-75'>
                                            <span className='fw-bolder me-25'>Country:</span>
                                            <span>England</span>
                                        </li>
                                    </ul>

                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md='5' sm='12' lg="8">
                        <Nav pills className='mb-2'>
                            <NavItem>
                                <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
                                    <User className='font-medium-3 me-50' />
                                    <span className='fw-bold'>Experience</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
                                    <Lock className='font-medium-3 me-50' />
                                    <span className='fw-bold'>Education</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
                                    <Bookmark className='font-medium-3 me-50' />
                                    <span className='fw-bold'>Skills</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={active === '4'} onClick={() => toggleTab('4')}>
                                    <Bell className='font-medium-3 me-50' />
                                    <span className='fw-bold'>Language</span>
                                </NavLink>
                            </NavItem>

                        </Nav>
                        <TabContent activeTab={active}>
                            <TabPane tabId='1'>
                                <Experience />
                            </TabPane>
                            <TabPane tabId='2'>
                                <Education />
                            </TabPane>
                            <TabPane tabId='3'>
                                <Skills />
                            </TabPane>
                            <TabPane tabId='4'>
                                <Language />
                            </TabPane>
                        </TabContent>


                    </Col>
                </Row>

            </Fragment>
        </Fragment>

    )
}

export default Profile
