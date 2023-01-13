// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, CardFooter, Row, Col, Button, Progress } from 'reactstrap'

const CardHeaderFooter = () => {
  const data = [
    {
      header: 'UI/UX Designer',
      title: "Medcare MSO Global Lahore, Punjab, Pakistan On-site"
    },
    {
      header: 'UI/UX Designer',
      title: "Medcare MSO Global Lahore, Punjab, Pakistan On-site"
    },
    {
      header: 'UI/UX Designer',
      title: "Medcare MSO Global Lahore, Punjab, Pakistan On-site"
    }
  ]

  return (
    <Fragment>
      {/* <h6 className='text-muted my-2'>Header and footer</h6> */}
      <Row>
        {data.map((v) => (
         
          <Col md='6' lg='4' className='rounded'>
            <Card>
              <CardHeader>{v.header}</CardHeader>
              <CardBody>
                <CardTitle tag='p'>{v.title}</CardTitle>
                <Button color='primary' outline>
                  Full Time
                </Button>
                <CardHeader>Job Match</CardHeader>

                <Progress animated striped className='progress-bar-success' value={50} />
                <CardText className='mt-2'>
                  1 day ago
                </CardText>

                <Col lg="12 d-flex">
                <div className='demo-inline-spacing'>
                  <Button color='primary' outline>
                    Apply
                  </Button>
                  <Button color='primary' outline>
                    Save
                  </Button>
                  </div>
                </Col>

              </CardBody>
            </Card>
          </Col>
        ))}


      </Row>
    </Fragment>

  )
}

export default CardHeaderFooter
