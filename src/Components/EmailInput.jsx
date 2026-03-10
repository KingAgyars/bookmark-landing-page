import React from "react";
import { Form ,Input, Button} from "antd";



const EmailInput = () => {

    
    return(
        <>
        <Form.Item
        name='email'
        rules={
            [{
                type : 'email',
                message : 'please enter a vail email'
            },
                {required :true}]
        }
        >
            <Input/>
        </Form.Item>
        </>
    )
}

export default EmailInput