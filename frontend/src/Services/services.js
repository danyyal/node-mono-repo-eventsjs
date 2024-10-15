import axiosClient from "../axiosClient";


const MessagesServices = {

  fetchMessage: async () => {
    const response = await axiosClient.post(`/sendEmail`,{
      userEmail: "johnDoe@gmail.com"
    });
    if (!response.data) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response;
  },
  askQuestion: async (payload) => {
    const response = await axiosClient.post(`/ask`, { message: payload });
    if (!response.data) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response;
  },
};

export default MessagesServices;
