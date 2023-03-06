import { Col, Container, Row, Tab,Nav } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
// import { ProjectCards } from "./ProjectCards"
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import Masonry,{ResponsiveMasonry} from "react-responsive-masonry"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/src/modal.js'
import React,{useState} from 'react'


export const Speakers = ()=>{

  const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3
        },
      ];

      const [data,setData] = useState({img:'',i:0})
      const viewImage = (img,i) =>{
        console.log(img,i)
        setData({img,i})
      }

      const imgAction = (action) =>{
        let i = data.i
        if (action==='next-img'){
          setData({img: projects[i+1].imgUrl,i:i+1})
        }
        else if(action==='close'){
          setData({img:'',i:0})
        }
        else{

            setData({img: projects[i-1].imgUrl,i:i-1})          
        }
        if(!action){
          setData({img:'',i:0})
        }
      }


      return (
        // className="project" id="project"
        <section className="project" id="project">
          {
            data.img &&
            <div style={{
              opacity:'0.9',
              width:'100%',
              height:'100%',
              background:'black',
              top:'0px',
              zIndex:'1000',
              position:'fixed',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              overflow:'hidden'

            }}> 
              <button onClick={() => imgAction('close')} style={{position: 'absolute', top:'10px',right:'10px', color:'white'  }}>X</button>
              {/* <button onClick={() => imgAction('prev-img')} style={{color:'white',left:'0',marginLeft:'0'}} >Back</button> */}
              <div className="mb-2 ml-0">
        <Button variant="primary" size="lg" style={{position:"fixed",left:'0',margin:'10px',backgroundColor:'red'}} onClick={() => imgAction('prev-img')}>Back</Button>{' '}
            </div>
            <div style={{width:'80%',height:'70%'}}>

              <img src={data.img} alt="error" style={{width:'100%', height:'100%',opacity:'1'}}/>
            </div>
              {/* <button onClick={() => imgAction('next-img')} style={{color:'white',right:'0',}} className="" >Next</button> */}
              <div className="mb-2 mr-0">
        <Button variant="primary" size="lg" style={{position:"fixed",right:'0',margin:'10px',backgroundColor:'red'}} onClick={() => imgAction('next-img')} >Next</Button>{' '}
            </div>

            </div>
          }
            <Container>
                <Row  >
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, incidunt veritatis? Consequatur voluptas iure natus laboriosam culpa. Et, illo vitae. Sapiente adipisci deleniti minus laudantium.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>

                          <ResponsiveMasonry columnsCountBreakPoints={{350:1,250:2,900:3}}>
                            <Masonry >

                                {
                                    projects.map((project,index) => (

                                      <img src={project.imgUrl} alt="" style={{padding:'10px'}} onClick={()=> viewImage(project.imgUrl,index)}  />

                                    ))
                                }

                            </Masonry>

                          </ResponsiveMasonry>
                        </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <p>Lorem, ipsum.</p>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <p>Lorem, ipsum.</p>

                    </Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="backgroung-image-right" src={colorSharp2} />

        </section>
    )
}