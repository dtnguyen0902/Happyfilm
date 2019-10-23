
let initState = {
    userList: [
        {
            id: 1,
            name: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phone: "1123123213",
            type: "VIP"
        },
        {
            id: 2,
            name: "Nguyen Dinh Phuc",
            username: "nguyendp",
            email: "nguyendp@gmail.com",
            phone: "1123123213",
            type: "VIP"
        }
    ],
    userEdit: null,
    keyword: "",
}

const userReducer = (state = initState, action) => {
    return state;
}

export default userReducer;