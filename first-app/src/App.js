// import logo from './logo.svg';
import './App.css';
import StudentDeatil from './components/StudentDetail';

function App() {

  let studentData=[{
    id:1,
    sname:"Lokesh Kumar",
    enrollNo:"E001",
    course:"React Js",
    batch:"B001"
  },
  {
    id:2,
    sname:"Kishan Kumar",
    enrollNo:"E002",
    course:"Angular js",
    batch:"B001"
  },{
    id:3,
    sname:"Raju Kumar",
    enrollNo:"E003",
    course:"Angular Js",
    batch:"B001"
  },{
    id:4,
    sname:"Tinky Kumari",
    enrollNo:"E004",
    course:"Devops",
    batch:"B001"
  },{
    id:5,
    sname:"Ramesh Kumar",
    enrollNo:"E005",
    course:"React Js",
    batch:"B001"
  }
]
  return (
    <div className="App">
      <p>Hello This Is First App In React</p>


      {/* // using Map function iterate object data. */}
              <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Enrollment No.</th>
                    <th>Course</th>
                    <th>Batch No.</th>                    
                </tr>
              </thead>
      {studentData.map(sdata=><StudentDeatil id={sdata.id} sname={sdata.sname} enrollNo={sdata.enrollNo} course={sdata.course} batch={sdata.batch}></StudentDeatil>
      )}
      
    </div>
  );
}

function Demo() {
  return (
    <div className="App">
      <p>Demo App</p>
    </div>
  );
}

export default App;
