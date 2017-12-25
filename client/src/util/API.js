import axios from "axios";

const API = {

    get: (obj)=>{
        const data = {
            title: obj.title,
            start: obj.start,
            end: obj.end
        }
        return axios.post("/api/articles/", data );
    },
    save: (obj)=>{

        return axios.post("/api/articles/save", obj);
    }

}

export default API;