// import { Card, CardHeader, CardBody, CardTitle, CardText, Row, Col} from "reactstrap"
// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import CardAction from '@components/card-actions'

// ** Icons Imports
import { ChevronDown, RotateCw, X, Star } from 'react-feather'

// ** Reactstrap Imports
import { CardBody, CardText, Row, Col, Table, Button, CardHeader, CardTitle } from 'reactstrap'

const SecondPage = () => {
  return (
    <Fragment>
      <Row>
      <Col >
        <Col md='5' sm='12' lg="12">
          <CardAction title='UI/UX Designer' actions='collapse'>
            <CardBody className='pt-0'>
              <CardText>
                Medcare MSO Global Lahore, Punjab, Pakistan On-site
              </CardText>
              <CardText className='mb-0'>
                Click on <ChevronDown size={15} /> to see card collapse in action
              </CardText>
            </CardBody>
          </CardAction>
        </Col>
        <Col md='5' sm='12' lg="12">
          <CardAction title='UI/UX Designer' actions='collapse'>
            <CardBody className='pt-0'>
              <CardText>
                Medcare MSO Global Lahore, Punjab, Pakistan On-site
              </CardText>
              <CardText className='mb-0'>
                Click on <ChevronDown size={15} /> to see card collapse in action
              </CardText>
            </CardBody>
          </CardAction>
        </Col>
        <Col md='5' sm='12' lg="12">
          <CardAction title='UI/UX Designer' actions='collapse'>
            <CardBody className='pt-0'>
              <CardText>
                Medcare MSO Global Lahore, Punjab, Pakistan On-site
              </CardText>
              <CardText className='mb-0'>
                Click on <ChevronDown size={15} /> to see card collapse in action
              </CardText>
            </CardBody>
          </CardAction>
        </Col>
        </Col>
        

        <Col md='5' sm='12' lg="7">
          <CardAction title='UI/UX Designer' actions='collapse'>
            <CardBody className='pt-0'>
              <CardText>
                Medcare MSO Global Lahore, Punjab, Pakistan On-site
              </CardText>
              <CardText>
                About this Job
              </CardText>
              <CardText>
                Job Type : Full TIme
              </CardText>
              <CardText>
                Shift: Morning
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
              <hr></hr>

             
                <CardTitle>
                  Duties & Responsibilities
                </CardTitle>
              
              <CardText>
                 Creating user-centered designs by understanding business requirements, and user feedback.
                 Creating user flows, wireframes, prototypes, and mockups.
                 Translating requirements into style guides, design systems, design patterns, and attractive user interfaces.
              </CardText>

              
                <CardTitle>
                  Requirement and skill:
                </CardTitle>
              
              <CardText>
                 Creating user-centered designs by understanding business requirements, and user feedback.
                 Creating user flows, wireframes, prototypes, and mockups.
                 Translating requirements into style guides, design systems, design patterns, and attractive user interfaces.
              </CardText>

            </CardBody>
          </CardAction>
        </Col>
        </Row>


        {/* <Col md='7' xs='12'>
        <h4>Apple</h4>
        <CardText tag='span' className='item-company'>
          By
          <a className='company-name' href='/' onClick={e => e.preventDefault()}>
            Apple
          </a>
        </CardText>
        <div className='ecommerce-details-price d-flex flex-wrap mt-1'>
          <h4 className='item-price me-1'>$20</h4>
          <ul className='unstyled-list list-inline'>
          </ul>
        </div>
        <CardText>
          Available -<span className='text-success ms-25'>In stock</span>
        </CardText>
        <CardText>sdfnskjdfnks</CardText>
        <hr />
        <div className='product-color-options'>
          <h6>Colors</h6>
          <ul className='list-unstyled mb-0'></ul>
        </div>
        <hr />
        
      </Col> */}

      
    </Fragment>
  )
}

export default SecondPage
