import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Title = 'Page Title'

function Content() {

  const [response, setResponse] = useState([]);

  //Run once App is mounted
    useEffect(()=> {



      // 1st Way of performing API calls
      // alert('Component mounted!');
      // api.get('/organization/projects').then(res => {
      //   console.log(res.data)
      // })

      const fetchProjects = async () => {
        try {
          const response = await axios.get('http://195.251.210.147:8083/organization/projects', {
            headers: {
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1b21AZ3IiLCJyb2xlcyI6WyJTSU1QTEUiXSwiaXNzIjoiaHR0cDovLzE5NS4yNTEuMjEwLjE0Nzo4MDgzL2xvZ2luIiwibmFtZSI6IlVvTSIsImlkIjoiNDM0MiIsImV4cCI6MTcxODg0OTU0N30.a-l6j3eadSxRmTL4CIA2Cn73yB63rFxbZqNHy_1QwBo'
            },
            params: {
              'name': 'apache'
            }
          });
          const data = response.data;
          setResponse(data);
          // console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

        fetchProjects();
        

    }, [setResponse]);

    const getLatestWeekDebt = (weekDebtArray) => {
      return weekDebtArray.reduce((latest, current) => {
        return (latest.id > current.id) ? latest : current;
      }, weekDebtArray[0]);
    };

  useEffect(() => {
  document.body.style.background = ' #88949c';
  document.getElementById('header').style.display = 'flex'
  document.getElementById('navBar').style.display = 'flex'
},[])


  return (
    <div>
       
     {/* <Header/> */}
      <div id='dashboard'>
        <>
        <Helmet>
          <title>Dashboard</title></Helmet>
        </>
      <table id='dashboardTable'>

      {response.map((index => {
       const latestWeekDebt = getLatestWeekDebt(index.weekDebt);
       return(
      <div key={index.name}>
        <div className='labelcontainer searchable'><Link style={{ textDecoration: 'none' }} to={'/project'}>
          <label>{index.name}</label></Link></div>
          <tr>
            <td>Loc<br></br><br></br>{Intl.NumberFormat('en-US').format(index.linesOfCode)}</td>
          <td>Refactorings<br></br><br></br>{index.refactorings}</td>
          <td>Week's Debt<br></br><br></br>{Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(latestWeekDebt.debt.toFixed(2))} €</td>
          <td>Cumulative Debt<br></br><br></br>{Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(index.cumulativeDebt.toFixed(2))} €</td>
          <td>Interest Rate<br></br><br></br><div className='progressbarContainer'><CircularProgressbar value={((index.interestRateAvg * 100).toFixed(2))} text={`${(index.interestRateAvg * 100).toFixed(2)}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 1,
        
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        
            // Text size
            textSize: '20px',
        
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
        
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',
        
            // Colors
            pathColor: `rgba(12, 52, 84, 0.8247)`,
            textColor: '#164e72',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })} /></div></td>
          </tr>
          </div>)}))}
      
        <tr>
          
        </tr>
        
      </table>
      <div id='projectgraphContainer'>
      <button id='retrainButton'>1 Git URL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" 
  d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd" />
</svg>
</button>
    </div>
      </div>
    </div>
  )
}

export default Content