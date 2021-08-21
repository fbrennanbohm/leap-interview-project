import './App.scss';
import Header from "./components/Header/Header";
import {useRef, useState} from "react";
import ClientHeader from "./components/Client/ClientHeader/ClientHeader";
import ClientForm from "./components/Client/ClientForm/ClientForm";
import Divider from "./components/Divider/Divider";

function App() {
    const [isEdit, setIsEdit] = useState(false);

    const formRef = useRef();

    const [user, setUser] = useState({
        firstName: 'Bruce',
        lastName: 'Banner',
        email: 'bruce.banner@marvel.com',
        phoneNumber: '02 0000 0000',
        postcode: '2000',
        state: 'NSW',
        companyName: 'Marvel',
        abn: '12 123 123 123',
        hourlyRate: '379.00',
        dateOfBirth: '21 May 1970'
    });

    const changePageState = () =>{
        if(isEdit){
            formRef.current.handleSubmit();
        }
        if((Object.keys(formRef.current.errors).length === 0)){
            setIsEdit(!isEdit);
        }
    }

    const onBack = () =>{
        formRef.current.resetForm();
        setIsEdit(!isEdit);
    }

    const onSubmit = (user) =>{
        setUser(user)
    }

    return (
    <div className="App">
        <Header isEdit={isEdit}  onBack={onBack} setEditable={() => setIsEdit(true)} onClick={changePageState}/>
        <div className='main'>
            <div className ='content'>
                <ClientHeader user={user} setUser={(user) => setUser(user)}/>
                <Divider/>
                <ClientForm user={user} isEdit={isEdit} onSubmit={onSubmit} formRef={formRef} setEditable={() => setIsEdit(false)}/>
            </div>
        </div>
    </div>
  );
}

export default App;
