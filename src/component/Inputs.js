import React,{useState} from "react";
import { Col, Form, Row } from "react-bootstrap";
import { qustion } from "../Data";

const Inputs=({onadd,notify})=>{
    const [qustionn, setqustion] = useState('')
    const [answer, setanswer] = useState('')

    //to add data to array
    const addnewitem =()=>{
        if(qustion==="" || answer===""){
            notify("اكمل البيانات","error");
            return;
        }
        qustion.push({id:Math.random(),q:qustionn,a:answer});
        setqustion('')
        setanswer('')
        onadd();
    }

    return(
        <Row className="my-3">
            <Col sm="5">
                <Form.Control value={qustionn} onChange={(e)=>setqustion(e.target.value)} type="text" placeholder="ادخل السؤال" />
            </Col>
            <Col sm="5">
                <Form.Control value={answer} onChange={(e)=>setanswer(e.target.value)} type="text" placeholder="ادخل الجواب" />
            </Col>
            <Col sm="2">
                <button onClick={addnewitem} className="btn-color w-100" type="submit"> أضافة </button>
            </Col>
        </Row>
    )
}
export default Inputs;