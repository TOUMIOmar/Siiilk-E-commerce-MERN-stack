import React from 'react'
import '../Partenair/Dashbordpar.css'
import Navdashboardpar from './Navdashboard-par'
const Dashboardparview3 = () => {
  return (
      <div className='dash-board-partenaire'>
         <Navdashboardpar/>
        
        <div className="cards-0 card-0">
          <table className="table-0">
            <thead>
              <tr>
                <th>T</th>
                <th>Nom</th>
                <th>Adresse</th>
                <th>Pour</th>
                <th>V</th>
                <th>B</th>
                <th>C</th>
                <th>A</th>
                <th>W</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" id="row1-0" className="table-row-0" />
                  <span className="time-0">17.00</span>
                </td>
                <td>John D</td>
                <td>Sudbury Station</td>
                <td>Center Plaza</td>
                <td>N</td>
                <td />
                <td>DT</td>
                <td />
                <td><svg viewBox="-22 0 134 134.06032" fill="currentColor">
                    <path d="M23.347656 134.058594C8.445312 84.953125 39.933594 67.023438 39.933594 67.023438c-2.203125 26.203124 12.6875 46.617187 12.6875 46.617187 5.476562-1.652344 15.929687-9.375 15.929687-9.375 0 9.375-5.515625 29.78125-5.515625 29.78125s19.308594-14.929687 25.386719-39.726563c6.070313-24.796874-11.5625-49.691406-11.5625-49.691406 1.0625 17.550782-4.875 34.8125-16.507813 48 .582032-.671875 1.070313-1.417968 1.445313-2.226562 2.089844-4.179688 5.445313-15.042969 3.480469-40.199219C62.511719 14.890625 30.515625 0 30.515625 0c2.757813 21.515625-5.511719 26.472656-24.882813 67.3125-19.371093 40.832031 17.714844 66.746094 17.714844 66.746094zm0 0" />
                  </svg></td>
                <td>
                  <div className="status-0 is-green-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Active
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" id="row2-0" className="table-row-0" />
                  <span className="time-0">17.00</span>
                </td>
                <td>Rufi</td>
                <td>One Beacon</td>
                <td>Los Angeles</td>
                <td>N</td>
                <td />
                <td>DT</td>
                <td />
                <td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather-0 feather-activity-0">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg></td>
                <td>
                  <div className="status-0 is-red-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    Rejetée
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" id="row3-0" className="table-row-0" />
                  <span className="time-0 is-wait-0">17.00</span>
                </td>
                <td>Alfred</td>
                <td>5 Main High</td>
                <td>Center Plaza</td>
                <td>N</td>
                <td />
                <td>DT</td>
                <td />
                <td><svg viewBox="-22 0 134 134.06032" fill="currentColor">
                    <path d="M23.347656 134.058594C8.445312 84.953125 39.933594 67.023438 39.933594 67.023438c-2.203125 26.203124 12.6875 46.617187 12.6875 46.617187 5.476562-1.652344 15.929687-9.375 15.929687-9.375 0 9.375-5.515625 29.78125-5.515625 29.78125s19.308594-14.929687 25.386719-39.726563c6.070313-24.796874-11.5625-49.691406-11.5625-49.691406 1.0625 17.550782-4.875 34.8125-16.507813 48 .582032-.671875 1.070313-1.417968 1.445313-2.226562 2.089844-4.179688 5.445313-15.042969 3.480469-40.199219C62.511719 14.890625 30.515625 0 30.515625 0c2.757813 21.515625-5.511719 26.472656-24.882813 67.3125-19.371093 40.832031 17.714844 66.746094 17.714844 66.746094zm0 0" />
                  </svg></td>
                <td>
                  <div className="status-0 is-wait-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather-0 feather-loader-0">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Attendre
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" id="row5-0" className="table-row-0" />
                  <span className="time-0">17.00</span>
                </td>
                <td>Hermann B.</td>
                <td>Janburg Station</td>
                <td>Center Park</td>
                <td>N</td>
                <td />
                <td>DT</td>
                <td />
                <td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather-0 feather-activity-0">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg></td>
                <td>
                  <div className="status-0 is-green-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Active
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
    
   

   
        
        
  )
}
export default Dashboardparview3