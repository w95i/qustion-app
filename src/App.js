import {React,useState}  from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import Inputs from './component/Inputs';
import ListAnswer from './component/ListAnswer';
import { qustion } from './Data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App=()=> {
  const [qdata, setqdata] = useState(qustion)
  //to add a new item
  const additem=()=>{
    localStorage.setItem("items",JSON.stringify([...qustion]))
    setqdata([...qustion])
    notify("تم الاضافة بنجاح", "success")
  }

  //to delete all item
  const deleteallitem=()=>{
    localStorage.removeItem("items")
    qustion.splice(0,qustion.length);
    setqdata([]);
    notify("تم حذف الكل بنجاح", "success")
  }
  //to delete one item from array
  const deleteitem=(items)=>{
    localStorage.setItem("items",JSON.stringify([...items]))
    setqdata([...items])
    if(items.length <=0)
    deleteallitem();
    notify("تم حذف السؤال بنجاح", "success")
  }
  //to get notifiction
  const notify = (message,type) =>{ 
    if (type==="error")
    toast.error(message)
    else if(type==="success")
    toast.success(message)
  };

  return (
    <div className="font text-center color-body">
      <Container className='p-5'>
        <Row className='justify-content-center'>
          <Col className='sm=4'>
            <div className='fs-3 text-center py-2'>اسئلة واجوبة شائعة</div>
          </Col>
          <Col className='sm=8'>
            <Inputs onadd={additem} notify={notify}/>
            <ListAnswer qdata={qdata} deleteitem={deleteitem}/>
            {
              localStorage.getItem("items")!=null ? (<button onClick={deleteallitem} className='btn-color w-100 my-2'>مسح الكل</button>) : null
            }
          </Col>
        </Row>
        <ToastContainer />
      </Container>
     
    </div>
  );
}

export default App;
