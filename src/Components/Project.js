import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'

function Project() {
  const [VisibleElement, setVisibleElement] = useState(false);
  const [Toggle, setToggle] = useState(true);


  // const showGraph = () => {
  //     setVisibleElement(true);
  //     alert('Changed to True!');

  // return(
  // <div id='projectgraph'></div>
  // )
  // }

  const toggleState = () => {
    const toggle = document.getElementsByClassName('slider');

    // if(toggle.style.content = 'ON')
    if(!Toggle){
    setToggle(true);
    // alert('Toggle set to On!');
    const hiddenClasses = Array.from(document.getElementsByClassName('ref1'));
      hiddenClasses.forEach((td) => {
        td.style.display = 'none';
    })
    }
    else{
    setToggle(false);
    // alert('Toggle set to Off!');
    
    const hiddenClasses = Array.from(document.getElementsByClassName('ref1'));
    hiddenClasses.forEach((td) => {
      td.style.display = 'table-cell';})
    }
  }


  useEffect(() => {
    document.body.style.background = '#88949c';
    document.getElementById('header').style.display = 'flex'
    document.getElementById('navBar').style.display = 'flex'
    const tdElements = document.querySelectorAll('#classList td');
    tdElements.forEach((td) => {
      td.addEventListener('click', (event) => {
       const projectContent = document.getElementById('projectContent')
       const projectgraph = document.getElementById('projectgraph')
       projectContent.style.display = 'none'
       projectgraph.style.display = 'block'
      //  td.style.background ='#124875';
       
      });
    });

    const hiddenClasses = Array.from(document.getElementsByClassName('ref1'));
    hiddenClasses.forEach((td) => {
      td.style.display = 'none';})

      
  },[]);

  function classTable() {
    
   }


  return (

    <div>
      <>
        <Helmet>
          <title>Project</title></Helmet>
        </>
      {/* <Header/> */}
    <div id='dashboard'>
  <h1>Name of Project</h1>
    <div id="overview">
        <h2 id='title'>Not analyzed Commits</h2><h2 id='commits'>12</h2><br/>
        <p>Progress</p><div id='progressbar'>
        <div id="myBar"><div id='circle'></div></div>
        </div>

   
    </div>
    <div id='classesContainer'>
    <table id='classList' className='hover'>
        <tr>
        <td><h1>DIT</h1><h1 className='amount'>150</h1></td>    
        <td><h1>DIT</h1><h1 className='amount'>150</h1></td>    
        <td><h1>DIT</h1><h1 className='amount'>150</h1></td>    
        <td><h1>DIT</h1><h1 className='amount'>150</h1></td>    
        <td><h1>DIT</h1><h1 className='amount'>150</h1></td>    
        <td><h1>DIT</h1><h1 className='amount'>150</h1></td>    
        <td><h1>DIT</h1><h1 className='amount'>150</h1></td>    
        <td><h1>DIT</h1><h1 className='amount'>150</h1></td>    
        <td><h1>DIT</h1><h1 className='amount'>150</h1></td>    
        <td><h1>DIT</h1><h1 className='amount'>150</h1></td>    
        </tr>
    </table>
    </div>

    <div id='projectgraphContainer'>
      {/* Class graph */}
      <div id='projectgraph'></div>
    

{/* Table - Default view - projectContent div to align bar, table and switch horizontally(inline) */}
<div id='projectContent'>
<table id='classTable'>
  {/* <tr> */}
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref0'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref4'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref3'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref4'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc3 ref0'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
  <Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref0'>C1</td></Link>
  {/* </tr>
<tr> */}
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc2 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc2 ref2'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc2 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref2'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref2'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
  {/* </tr>
<tr> */}
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref4'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc2 ref3'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc2 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref2'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc2 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc3 ref3'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc3 ref3'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
  {/* </tr>
  <tr> */}
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc3 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc3 ref0'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc2 ref3'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc2 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref4'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref4'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc2 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
  {/* </tr>
  <tr> */}
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref2'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc3 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref0'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc3 ref4'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref0'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>

  {/* </tr>
  <tr> */}
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref4'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc2 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc2 ref3'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc3 ref0'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc2 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref3'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref2'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc1 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>
<Link style={{ textDecoration: 'none' }} to={'class'}><td className='loc0 ref1'>C1</td></Link>

  {/* </tr> */}
</table>

<div id='vertical'>
<label class="switch">
  <input type="checkbox" onChange={toggleState}/>
  <span class="slider round"></span>
</label>
<div id='bar'></div>

</div>
</div>


{/* Retrain Button */}
<button id='retrainButton'>Retrain Model <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd" />
</svg>
</button> 

    </div>


    </div>
    
    
    
    </div>
  )
}

export default Project