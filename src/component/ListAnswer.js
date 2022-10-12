import React from 'react'
import { Row ,Accordion} from 'react-bootstrap';
import { qustion } from '../Data';

const ListAnswer = ({qdata,deleteitem}) => {
  const datalocal = JSON.parse(localStorage.getItem("items"))
//delete one item from array
  const ondeleteitem=(ID)=>{
    if (localStorage.getItem("items")!=null) {
        const index = qustion.findIndex((item)=> item.id===ID);
      qustion.splice(index,1)
      deleteitem(qustion);
    }
  }
  return (
    <Row>
        <Accordion>
            {
              localStorage.getItem("items")!=null ? (datalocal.map((item,index)=>{
                return(
                  <Accordion.Item key={index} eventKey={item.id}>
                    <Accordion.Header>
                      <div className='m-auto'>{item.q}</div>
                    </Accordion.Header>
                    <Accordion.Body>
                       <div className='px-3 d-inline'> {item.a}</div>
                       <button onClick={() => ondeleteitem(item.id)} className='btn-color'>مسح السؤال</button>
                    </Accordion.Body>
              </Accordion.Item>
                )
              })) : <h2 className='fs-4 text-center p-5'> لا توجد اسئلة الأن</h2>
            }
           
        </Accordion>
    </Row>
  )
}
export default ListAnswer;
