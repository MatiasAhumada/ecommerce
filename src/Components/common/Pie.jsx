import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../css/pie.css";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { MdEmail, MdPhonelinkRing } from "react-icons/md";

const Pie = () => {

 
 
  
  
  return (
    <MDBFooter className="text-center text-lg-start text-muted">
      <section
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        className="pt-1"
      >
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="5" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase text-center fs-2 fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Tecno Más
              </h6>
              <p className="text-center">
                Somos una pequeña empresa dedicada a la venta OnLine de
                SmartPhones reacondicionados, en la ciudad de San Miguel de
                Tucumán, Tucumán.
              </p>
            </MDBCol>

         
          

            <MDBCol md="4" lg="3" xl="3" className="mx-auto   mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 ">Contacto</h6>
              <p>
                <BsFillHouseDoorFill
                  color="secondary"
                  icon="home"
                  className="me-2"
                />
                San Miguel de Tucumán, Tucumán, Argentina.
              </p>
              <p>
                <MdEmail color="secondary" icon="envelope" className="me-3" />
                 mahumada486@gmail.com
              </p>

              <p>
                <MdPhonelinkRing
                  color="secondary"
                  
                  className="me-3"
                />
                + 54 381 352 8658
              </p>
            </MDBCol>
            <MDBCol md="6" lg="2" xl="2" className="mx-auto text-center mb-4">
              <h6 className="text-uppercase fw-bold mb-4 ">Nuestras Redes</h6>

              <Link to="/" className="me-4 text-reset fs-4">
                <AiFillFacebook></AiFillFacebook>
              </Link>

              <Link to="" className="me-4 text-reset fs-4">
                <AiOutlineTwitter></AiOutlineTwitter>
              </Link>

              <Link to="" className="me-4 text-reset fs-4">
                <AiOutlineInstagram></AiOutlineInstagram>
              </Link>

              <Link to="" className="me-4 text-reset fs-4">
                <AiOutlineLinkedin></AiOutlineLinkedin>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <p>
          {" "}
          © 2023 Copyright:{" "}
          <Link className="text-reset fw-bold" to="/">
            TecnoMás.com
          </Link>{" "}
        </p>
      </div>
    </MDBFooter>
  );
};

export default Pie;
