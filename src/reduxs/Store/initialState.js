export const LoginStates = () => {
    const userName = localStorage.getItem("user");
    return userName === null ? {isLogedIn: false, userName: userName, session: true} : 
    {isLogedIn: true, userName: userName, session: true}
}

const initialState = {
    request: {
        isLoadings: false,
        isSuccess: false,
        errMsg: ""
    },
    room: {
        name: "",
        title: "",
        owner: "",
        vote: 0,
        favorite: false,
        storys: [],
        users: [],
        userMsg: ""
    },
    roomlist: {
        roomList: []
    },

};

export default initialState