import axios from "axios";

const API_URL =
    "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow";

class Questions {
    getAllQuestions() {
        return axios
            .get(API_URL)
            .then((res) => {
                console.log(res.data)
                return res.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }

}
export default new Questions();