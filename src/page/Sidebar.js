import React, { useState } from 'react';
import './Sidebar.css';
import image1 from './assest/image1.png'
import image2 from './assest/image2.png'
import image3 from './assest/image3.png'
import image4 from './assest/image4.png'
import image5 from './assest/image5.png'
import image6 from './assest/image6.png'
import image7 from './assest/image7.png'
import left from './assest/left.png'
import right from './assest/right.png'
import Income from './assest/Income.jpeg'
import Expense from './assest/Expense.jpeg'
import BarChart from './BarChart'
import BarChart1 from './BarChart1'


function Sidebar() {
  return (
    <div>
      <div className="sidenav">
        <img className="nav-logo" src={image2} />
        <div className="Manage">MANAGE</div>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <div className="Manage">SUPPORT</div>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <div className='sidenav-block'>
          <div className='h'>Help Center</div>
          <div className='pa'>Visit our help center</div>
          <img className='img1' src={image1} />
        </div>
      </div>

      <div className='Chart'>
      <div className="bar">
          <BarChart1/>
        </div>
        <div className="pie">
          <BarChart/>
        </div>
        </div>

      <div class="rt-container">
        <div class="col-rt-12">
          <div class='demo-container'>
            <div class='carousel'>
              <input checked='checked' class='carousel__activator' id='carousel-slide-activator-1' name='carousel' type='radio' />
              <input class='carousel__activator' id='carousel-slide-activator-2' name='carousel' type='radio' />
              <div class='carousel__controls'>
                <label class='carousel__control carousel__control--forward' for='carousel-slide-activator-2'>
                  <img className="imx" src={right} />
                </label>
              </div>
              <div class='carousel__controls'>
                <label class='carousel__control carousel__control--backward smile' for='carousel-slide-activator-1'>
                  <img className="imx" src={left} />
                </label>
              </div>

              <div class='carousel__screen'>
                <div class='carousel__track'>
                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                    <div class='demo-content'>
                      <img className="img4" src={image3} />
                    </div>
                  </div>
                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                    <div class='demo-content'>
                      <img className="img4" src={image4} />
                    </div>
                  </div>
                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                    <div class='demo-content'>
                      <img className="img4" src={image5} />
                    </div>
                  </div>
                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                    <div class='demo-content'>
                      <img className="img4" src={image7} />
                    </div>
                  </div>
                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                    <div class='demo-content'>
                      <img className="img4" src={image6} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='table'>
        <div className="table-item">
          <div className="time">
            <ra>Transaction</ra>
            <re>Today</re>
            <re>This Week</re>
            <re>This Month</re>
          </div>

          <table style={{ borderCollapse: 'collapse', width: '90%' }}>
            <thead>
              <tr>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Data and time</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Payment method</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Status</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Amount($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>17 Feb 2020, 16:30</td>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>Mastercard</td>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>Pending</td>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>-400.00$</td>
              </tr>
              <tr>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>17 Feb 2020, 16:30</td>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>Mastercard</td>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>Pending</td>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>-400.00$</td>
              </tr>
              <tr>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>17 Feb 2020, 16:30</td>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>Mastercard</td>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>Pending</td>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>-400.00$</td>
              </tr>
              <tr>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>17 Feb 2020, 16:30</td>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>Mastercard</td>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>Pending</td>
                <td style={{ borderBottom: '1.5px solid #ddd', padding: '8px' }}>-400.00$</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="In-En">
          <div className='Income'>
            <img  className="imgr" src={Income} />
            <div className='amount'>
            <d>$22,578.00</d>
            <fg>Total amount Expense</fg>
            </div>
          </div>
          <div className='Income'>
            <img src={Expense} />
            <div className="amount">
            <d>$5783.00</d>
            <fg>Total amount Income</fg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;
