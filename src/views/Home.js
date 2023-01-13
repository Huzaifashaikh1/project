import { AlignCenter } from "react-feather"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Row,
  Col,
  Button
} from "reactstrap"
import CardHeaderFooter from './CardHeaderFooter'
const Home = () => {
  return (
    <div>
      <Card>
        <Row>
          <Col lg="12" className="text-center">
            <CardHeader>
              <CardTitle>Kick start your project 🚀</CardTitle>
            </CardHeader>
          </Col>

          <Col lg="12" style={{padding: '20px'}} className="text-center">
         
            <UncontrolledButtonDropdown className="">
              <DropdownToggle outline color='primary' caret>
                Primary
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Option 1
                </DropdownItem>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Option 2
                </DropdownItem>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Option 3
                </DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Separated Link
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown>
              <DropdownToggle outline color='primary' caret>
                Primary
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Option 1
                </DropdownItem>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Option 2
                </DropdownItem>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Option 3
                </DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Separated Link
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown>
              <DropdownToggle outline color='primary' caret>
                Primary
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Option 1
                </DropdownItem>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Option 2
                </DropdownItem>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Option 3
                </DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem href='/' tag='a' onClick={e => e.preventDefault()}>
                  Separated Link
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>

            <Button.Ripple className='round' color='primary' outline>
              Primary
            </Button.Ripple>
          </Col>
        </Row>
      </Card>

      {/* <Card>
        <CardHeader>
          <CardTitle>Want to integrate JWT? 🔒</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            We carefully crafted JWT flow so you can implement JWT with ease and
            with minimum efforts.
          </CardText>
          <CardText>
            Please read our{" "}
            <CardLink
              href="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/docs/development/auth"
              target="_blank"
            >
              JWT Documentation
            </CardLink>{" "}
            to get more out of JWT authentication.
          </CardText>
        </CardBody>
      </Card> */}
      <CardHeaderFooter/>
    </div>
  )
}

export default Home
