import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Uploadimage from '../assets/uploadimg.png'
import { ToastContainer, toast } from 'react-toastify';
import { addProjectAPI } from '../services/allAPI';
import { addResponseContext } from '../context/ContextAPI';


function Add() {
 const {addResponse,setAddResponse} = useContext(addResponseContext)
  const [preview, setPreview] = useState("")
  const [imageFileStatus, setimageFileStatus] = useState(false)
  const [projectDetails, setprojectDetails] = useState({
    title: "", language: "", overview: "", github: "", website: "", projectImage: ""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setprojectDetails({ title: "", language: "", overview: "", github: "", website: "", projectImage: "" })
  }

  const handleShow = () => setShow(true);
  console.log(projectDetails);

  useEffect(() => {
    if (projectDetails.projectImage.type == "image/png" || projectDetails.projectImage.type == "image/jpg" || projectDetails.projectImage.type == "image/jpeg") {
      setimageFileStatus(true)
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    } else {
      setPreview(Uploadimage)
      setimageFileStatus(false)
      setprojectDetails({ ...projectDetails, projectImage: "" })
    }
  }, [projectDetails.projectImage])

  const handleUploadProject = async () => {
    const { title, language, overview, github, website, projectImage } = projectDetails
    if (!title || !language || !overview || !github || !website || !projectImage) {
      toast.warning("Please fill the form completely!!!")
    } else {
      //api call
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("overview", overview)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("projectImage", projectImage)

      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        // api call
        try {
          const result = await addProjectAPI(reqBody, reqHeader)
          console.log(result);
          if (result.status == 200) {
           setAddResponse(result)
            handleClose()
          } else {
            toast.warning(result.respones.data)
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
  return (
    <>

      <button onClick={handleShow} className='btn'><i className="da-solid fa-plus me1"></i>Add New</button>
      <Modal
        size='lg'
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{ display: 'none' }} onChange={(e) => setprojectDetails({
                  ...projectDetails, projectImage: e.target.files[0]
                })} />
                <img height={'200px'} className='img-fluid' src={preview} alt="" />
              </label>
              {!imageFileStatus && <div className="text-danger fw-bolder my-2">*Upload only the following file types(png , jpg , jpeg) here!!!</div>}
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='Project Title' value={projectDetails.title} onChange={(e) => setprojectDetails({ ...projectDetails, title: e.target.value })} />
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='Language used in the Project' value={projectDetails.language} onChange={(e) => setprojectDetails({ ...projectDetails, language: e.target.value })} />
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='Project GITHUB Link' value={projectDetails.github} onChange={(e) => setprojectDetails({ ...projectDetails, github: e.target.value })} />
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='Project WEBSITE Link' value={projectDetails.website} onChange={(e) => setprojectDetails({ ...projectDetails, website: e.target.value })} />
              </div>
            </div>
          </div>
          <div>
            <input type="text" className="form-control" placeholder='Project Overview' value={projectDetails.overview} onChange={(e) => setprojectDetails({ ...projectDetails, overview: e.target.value })} />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUploadProject} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Add