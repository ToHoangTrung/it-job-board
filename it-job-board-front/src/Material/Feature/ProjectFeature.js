import axios from "axios";

export const searchProjectCriteria = async (criteria) => {
    const res = await axios.get(`/api/projects/criteria?search=${criteria}`);
    return res.data;
};

export const searchProjectByCustomKeywordAndStatus = async (search) => {
    const res = await axios.get(`/api/projects/criteria-by-custom-keyword-and-status`,
        {
            params:{
                keyword: search.keyword,
                status: search.status,
            }
        });
    console.log(res)
    return res.data;
};

export const getProjectById = async (id) => {
    try{
        const res = await axios.get(`/api/projects/${id}`);
        return res.data;
    }catch (err){
        throw new Object(err.response.data);
    }
};

export const newProject = async (project) => {
    try{
        const res = await axios({
            method: 'POST',
            url: '/api/projects/',
            data: JSON.stringify(project),
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        });
        return res.data;
    }catch(err){
        throw new Object(err.response.data);
    }
};
export const updateProject = async (project) => {
    try{
        const res = await axios.put(`/api/projects/${project.id}`, project);
        return res.data;
    }catch(err){
        throw new Object(err.response.data);
    }
};

export const deleteOneProject = async (id) => {
    try{
        const res = await axios.delete(`/api/projects/one`, {
            params: {
                id: id,
            }
        })
        return res.data;
    }catch (err){
        throw new Object(err.response.data);
    }
};

export const deleteManyProject = async (ids) => {
    try{
        const res = await axios.delete(`/api/projects/many`, {
            params: {
                ids: ids.toString()
            }
        })
        return res.data;
    }catch (err){
        throw new Object(err.response.data);
    }
};

export const getAllProjectStatus = async () => {
    const {data} = await axios.get("/api/projects/status");
    return data;
};




