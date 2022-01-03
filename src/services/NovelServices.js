import axios from "axios";




const getAllNovel = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/novels")
      .then((res) => {
        const { data } = res;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllChapNovel = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/chap")
      .then((res) => {
        const { data } = res;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


const getNovelById = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000/novels/${id}`)
    .then((res) => {
        const { data } = res;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


const getAllUser = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        const { data } = res;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


const CreateUser = (data = {}) => {
 
     const res = axios
      .post("http://localhost:3000/users", data)
      return res;
    
}

const addCanDy = (id, data) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`http://localhost:3000/novels/${id}`, data)
      .then((res) => {
        const { data } = res;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });

}




const NovelServices = {
    getAllNovel,
    getNovelById,
    getAllChapNovel,
    CreateUser,
    getAllUser,
    addCanDy
  };

  export default NovelServices;