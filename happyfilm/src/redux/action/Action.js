import * as ActionType from './../constants/ActionType';
import Axios from 'axios';


export const actsingUp=(user)=>{

    
        return dispatch=>{

   
        Axios({
            method:"POST",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: user,
          

        })
        .then(result=>{
            console.log(result.data);
            alert('dang ky thanh cong')
            // Chỗ này sai nha, sau khi dk xong 
            // anh phải gọi 1 action nhận kết quả đúng
            // trả về reducer 
            // dispatch(actsingUp(user));
    

          
        })
        .catch(error=>{
            console.log(error);
        })
    }
    
};

export const actLogin =(user)=>{
    return dispatch=>{
        Axios({
            method:"POST",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data:user
        })
        .then(result=>{
            console.log(result.data);
            dispatch({
                type:ActionType.CLIENT_LOGIN,
                user:result.data
            })
            localStorage.setItem('accessToken', result.data.accessToken);
            alert("Dang Nhap Thanh Cong")
            
        })
        .catch(error=>{
            console.log(error);
            alert("Vui long Nhap Lai")
        })
    }
}



export const layDuLieu = ListFilm => {
    return {
        type: ActionType.LAY_DATA,
        ListFilm
    }
}
export const actOnListMovieAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        })
            .then(result => {
                console.log(result)
                dispatch(layDuLieu(result.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const actDetailMovieAPI =(id)=>{
    return dispatch=>{
  
    
     Axios ({
      method:"GET",
      url:`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
  
    })
       .then(result=>{
        dispatch({
          type:ActionType.DETAIL_MOVIE,
         movie: result.data
        });
      })
      .catch(err =>{
        console.log(err);
      })
  
    }
  }

export const layThongTinrap = ListRap => {
    return {
        type: ActionType.LAY_THONG_TIN_RAP,
        ListRap
    }
}
export const layThongTinLichChieu = ListLichChieu => {
    return {
        type: ActionType.LAY_THONG_TIN_LICH_CHIEU,
        ListLichChieu
    }
}
export const layMaRap = CumRap => {
    return {
        type: ActionType.LAY_MA_RAP,
        CumRap
    }
}
export const layDsPhim = danhSachPhim => {
    return {
        type: ActionType.LAY_DS_PHIM,
        danhSachPhim
    }
}
// Thiệt ra k cần export từng cái vậy cho mệt, có thể viết lại = cách thêm export trc các action là được
// export { layDuLieu, layThongTinrap, layThongTinLichChieu, layMaRap, layDsPhim, actOnListMovieAPI,actDetailMovieAPI,actsingUp,actLogin }