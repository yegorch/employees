import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Yegor" salary={1200}/>
            <EmployeesListItem name="Yegor" salary={1200}/>
            <EmployeesListItem name="Yegor" salary={1200}/>
        </ul>
    )
}

export default EmployeesList;
