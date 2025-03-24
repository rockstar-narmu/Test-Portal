import React from 'react'
import Header from '../Components/header';
import "../styles/landingPage.css";

export const LandingPage = () => {
  return (
    <div>
      < Header />
      <div className='landingPage'>
        <div className='take-test-container'>
          <div className='take-test'>Take a Test</div>
          <div className='plus-button'>+</div>
        </div>

        <div className='tests-cards-container'>
          <div className='tests-card'>
            <div className='test-name'>
              Polymorphism
            </div>
            <div className='progress-bar-container'>
              <div className='progress-bar'>
                <div className='completed'></div>
              </div>
              <div className='percentage'>70%</div>
            </div>
            <div className='details'>
              <div className='no-of-ques'>
                <img src="/assets/icons/list.png" height={25} width={25} alt="no-of-ques-icon" />
                <p>No of. Questions: 25</p>
              </div>
              <div className='score'>
                <img src="/assets/icons/speedometer.png" height={25} width={25} alt="score-icon" />
                <p>Score: 20/25</p>
              </div>
              <div className='time-taken'>
                <img src="/assets/icons/time-left.png" height={25} width={25} alt="time-taken-icon" />
                <p>Time Taken: 32 mins</p>
              </div>
            </div>
          </div>

          <div className='tests-card'>
            <div className='test-name'>
              Value Added Tax
            </div>
            <div className='progress-bar-container'>
              <div className='progress-bar'>
                <div className='completed'></div>
              </div>
              <div className='percentage'>61%</div>
            </div>
            <div className='details'>
              <div className='no-of-ques'>
                <img src="/assets/icons/list.png" height={25} width={25} alt="no-of-ques-icon" />
                <p>No of. Questions: 70</p>
              </div>
              <div className='score'>
                <img src="/assets/icons/speedometer.png" height={25} width={25} alt="score-icon" />
                <p>Score: 43/70</p>
              </div>
              <div className='time-taken'>
                <img src="/assets/icons/time-left.png" height={25} width={25} alt="time-taken-icon" />
                <p>Time Taken: 1 hr 26 mins</p>
              </div>
            </div>
          </div>

          <div className='tests-card'></div>
          <div className='tests-card'></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
