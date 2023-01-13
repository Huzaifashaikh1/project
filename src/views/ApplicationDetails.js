// ** React Imports
import { Fragment } from 'react'

import Avatar from '@components/avatar'
import Timeline from '@components/timeline'

// ** Images
// import pdf from '@src/assets/images/icons/file-icons/pdf.png'
// import ceo from '@src/assets/images/portrait/small/avatar-s-7.jpg'

// ** Reactstrap Imports
import { Card, CardHeader, Input, CardTitle, CardBody, CardText, CardFooter, Row, Col, Button, Progress } from 'reactstrap'

const ApplicationDetails = () => {
  const data = [
    {
      title: 'Technical Interview',
      content: 'Invitation Received',
      meta: '12 mins ago',
      customContent: (
        <div className='d-flex align-items-center mb-50'>
          <Row>
            <Col lg="12 d-flex">
              <div className='demo-inline-spacing '>
                <Button color='primary' outline size='sm'>
                  Accept
                </Button>
                <Button color='primary' outline size='sm'>
                  Reject
                </Button>
              </div>
            </Col>

            <Col lg="10">
              <br></br>
              <Input type='textarea' name='text' id='exampleText' rows='2' placeholder='Textarea' />
              <br></br>
              <Button color='primary' outline size='sm'>
                send
              </Button>
            </Col>

          </Row>

        </div>
      )
    },
    {
      title: 'Meeting with john',
      content: 'React Project meeting with john ',
      meta: '45 mins ago',
      color: 'warning'
    },
    {
      title: 'Create a new react project',
      content: 'Add files to new design folder',
      meta: '2 days ago',
      color: 'info'
    }
  ]


  return (
    <Fragment>
      <Card>
        <CardBody>
          <Row>
            <Col lg="7">


              <h5>UI/UX Designer</h5>
              <p>Medcare MSO Global Lahore, Punjab, Pakistan On-site</p><br></br>
              <h5>About this Job </h5>
              <p>Job Type : Full Time</p><br></br>
              <h6>Shift: Morning</h6>
              <p>Experience Required : Min 1yr</p>
              <hr></hr>
              <h5>
                Duties & Responsibilities
              </h5>

              <CardText>
                Creating user-centered designs by understanding business requirements, and user feedback.
                Creating user flows, wireframes, prototypes, and mockups.
                Translating requirements into style guides, design systems, design patterns, and attractive user interfaces.
              </CardText>

              <h5>
                Duties & Responsibilities
              </h5>

              <CardText>
                You have a degree in Design, Fine Arts, Engineering, or a related field.
                You should have at least 1 year of relevant experience along with a strong portfolio.
                You are proficient in Figma, Adobe XD, and other related tools.
              </CardText>

            </Col>

            <Col lg="5">
              <Card color='light'>
                <CardHeader>
                  <CardTitle tag='h2' >Interview Levels</CardTitle>
                </CardHeader>
                <CardBody className='pt-0' size="sm">
                  <Timeline tag="p" data={data} className='ms-50' />
                </CardBody>
              </Card>
            </Col>

          </Row>
        </CardBody>
      </Card>
    </Fragment>

  )
}

export default ApplicationDetails
