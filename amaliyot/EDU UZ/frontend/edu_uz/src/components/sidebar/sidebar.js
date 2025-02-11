import './sidebar.css'
import dashboard from './speedometer.png'
import Dashboard1 from '../dashboard/dashboard'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function Sidebar() {
    return (
        <>
            <BrowserRouter>
                <div className='col-2 position-fixed start-0 top-0 h-100 bg-dark p-0'>
                    <div className='logo'>
                        <h1 className='fw-bolder ms-2 text-white h3'>EDU.UZ</h1>
                    </div>
                    <ul className='mt-2 ps-2 text-white list-unstyled d-flex flex-column  gap-1'>
                        <li className='list-item d-flex align-items-center'><Link to="/dashboard" className='nav-link'><img className='me-2 mt-0' width={25} src={dashboard} alt='d' />Dashboard</Link></li>
                        <li className='list-item d-flex align-items-center'><a href='#' className='nav-link'><img className='me-2 mt-0' width={25} src={dashboard} alt='d' />Filial</a></li>
                        <li className='list-item d-flex align-items-center'><a data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample" className='nav-link '><img className='me-2 mt-0' width={25} src={dashboard} alt='d' />O'quv Markazi</a></li>
                        <div class="collapse p-0" id="collapseExample">
                            <div class="card card-body bg-dark p-0">
                                <ul className='list-unstyled'>
                                    <li class='list-item ms-4 mb-1'><a href='' className='nav-link'>Kurs</a></li>
                                    <li class='list-item ms-4 mb-1'><a href='' className='nav-link'>Gruh</a></li>
                                    <li class='list-item ms-4 mb-1'><a href='' className='nav-link'>O'qituvchi</a></li>
                                    <li class='list-item ms-4 mb-1'><a href='' className='nav-link'>Jurnal</a></li>
                                    <li class='list-item ms-4 mb-1'><a href='' className='nav-link'>Sms habarnoma</a></li>
                                </ul>
                            </div>
                        </div>
                        <li className='list-item d-flex align-items-center'><a href='#' className='nav-link'><img className='me-2' width={25} src={dashboard} alt='d' />Xisobot</a></li>
                    </ul>

                </div>
                <div className='col-10 position-absolute top-0 end-0'>

                    <Routes>
                        <Route path='/dashboard' element={<Dashboard1></Dashboard1>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default Sidebar;