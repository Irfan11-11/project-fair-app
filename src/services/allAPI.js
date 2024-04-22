import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"

// redister api called by Auth componet
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVER_URL}/register`, reqBody)
}

// login api called by Auth componet
export const loginAPI = async (reqBody) => {
    return await commonAPI("POSt", `${SERVER_URL}/login`, reqBody)
}

// add projects
export const addProjectAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVER_URL}/add-project`, reqBody, reqHeader)
}

//getAllProjects
export const getAllProjectsAPI = async (searchKey, reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/all-projects?search=${searchKey}`, "", reqHeader)
}


//user projects
export const getUserProjectsAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/user-projects`, "", reqHeader)
}


//home projects
export const getHomeProjectsAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/home-projects`, "")
}

// editProject
export const editProjectAPI = async (projectId, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/edit-project/${projectId}`, reqBody, reqHeader)
}

//delete project
export const removeProjectAPI = async (projectId, reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_URL}/remove-project/${projectId}`, {},
        reqHeader)
}

// update profile
export const updateUserAPI = async (reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/edit-user`, reqBody, reqHeader)
}
