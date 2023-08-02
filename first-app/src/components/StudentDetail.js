import "./StudentDetail.css";

let StudentDeatil=({id,sname,enrollNo,course,batch})=>{
    return(
        <>
        <table>
            
            <tr>
                <td>{id}</td>
                <td>{sname}</td>
                <td>{enrollNo}</td>
                <td>{course}</td>
                <td>{batch}</td>
            </tr>
        </table>
        </>
    );
}

export default StudentDeatil;   