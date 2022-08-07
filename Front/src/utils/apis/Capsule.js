import Axios from "axios"


const CoffreAxios=Axios.create({
    baseURL:"http://localhost:8000/api/v1/project"
})
const capsuleAxios=Axios.create({
    baseURL:"http://localhost:8000/api/v1/member"
})


export{
    CoffreAxios,
    capsuleAxios,

}
