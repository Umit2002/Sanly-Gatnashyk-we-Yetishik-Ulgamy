import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function ButtonGroups({Groups}) {
  
  return (
    <DropdownButton id="dropdown-basic-button" title="Topar">
       {Groups.map((item) => (
             <Dropdown.Item  eventKey={item.id}>{item.labele}</Dropdown.Item> 
       ))}
    </DropdownButton>
  );
}

export default ButtonGroups;

