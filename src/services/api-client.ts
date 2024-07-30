import axios from "axios";

export default  axios.create({
    baseURL: "https://api.rawg.io/api",
    headers: { "Content-Type": "application/json"},
    params: {
        key: "459cb701bc9c4256bc40b32ddb0a3649",
    },

        
}
)