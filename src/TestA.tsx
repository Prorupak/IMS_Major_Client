import { ProductData } from 'context/ProductContext';
import { ToggleContext } from 'Hooks/useToggle';
import React from 'react'
import { useNavigate } from 'react-router'

const TestA = () => {
     const { toggleHandle, value } = React.useContext(ToggleContext);
     const navigate = useNavigate()
     const [click, setClick] = React.useState(false);


     const onNavigate = () => {
          navigate('/test', { state: { handleClick: true } });

     }
     return (
          <button onClick={onNavigate}>
               {
                    click ? 'clicked' : 'not clicked'
               }
          </button>
     )
}

export default TestA