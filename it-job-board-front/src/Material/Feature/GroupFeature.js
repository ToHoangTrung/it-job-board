import axios from "axios";

export const getAllGroup = async () => {
    const {data} = await axios.get("/api/groups/");
    return data;
};
