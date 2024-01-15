import React,{useEffect} from 'react'
import { Helmet } from 'react-helmet';

function SimilarClasses() {

    useEffect(() => {
        document.body.style.background = '#88949c';
        document.getElementById('header').style.display = 'flex'
        document.getElementById('navBar').style.display = 'flex'
        const selectAllCheckbox = document.getElementById('selectAll');
        const checkboxes = document.querySelectorAll('table input[type="checkbox"]');

    selectAllCheckbox.addEventListener('change', function () {
     checkboxes.forEach((checkbox) => {
     const closestTr = checkbox.closest('tr');

     checkbox.checked = selectAllCheckbox.checked;
     if(checkbox.checked){
     closestTr.style.backgroundColor = '#d8e4fc';}
     else{
     closestTr.style.backgroundColor = 'white'; 
     }

  });
});

checkboxes.forEach((checkbox) => {
    const closestTr = checkbox.closest('tr');
  checkbox.addEventListener('change', function () {
    if(checkbox.checked){
        closestTr.style.backgroundColor = '#d8e4fc';}
        else{
        closestTr.style.backgroundColor = 'white'; 
        }
  });
});
      },[])


      const checkboxes = document.querySelectorAll('table input[type="checkbox"]');

      // Function to handle checkbox change
      const handleCheckboxChange = (event) => {
        const checkbox = event.target;
        if (checkbox.checked) {
          const closestTr = checkbox.closest('tr');
          if (closestTr) {
            closestTr.style.backgroundColor = '#d8e4fc';
          }
        }

      };
      
      // Add event listener to each checkbox
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', handleCheckboxChange);
      });

      // Metrics Reasons Column Function
      function showMetricsReasons() {
        const table = document.getElementById('similarClassesTable');
        const lastColumn = table.rows[0].cells[table.rows[0].cells.length - 1];
        const metricsReasonsClass = document.getElementById('metricsReasonsClass');
        const colTitle = document.getElementById('metricsReasonsCol');
        const urgencyGraphContainer = document.getElementById('urgencyGraphContainer');
      
        // Function to update dimensions
        const updateDimensions = () => {
          if (metricsReasonsClass.style.display === 'block') {
            // If currently visible, hide it
            metricsReasonsClass.style.display = 'none';
            colTitle.textContent = '';
          } else {
            // If currently hidden, show it
            colTitle.textContent = 'Metrics Reasons';
            metricsReasonsClass.style.display = 'block';
            metricsReasonsClass.style.width = `${lastColumn.offsetWidth}px`;
            const height = table.offsetHeight - 90;
            metricsReasonsClass.style.height = `${height}px`;
            const top = table.offsetTop + 90;
            metricsReasonsClass.style.top = `${top}px`;
            metricsReasonsClass.style.left = `${lastColumn.offsetLeft + table.offsetLeft}px`;
      
            // Hide urgency graph container if visible
            if (urgencyGraphContainer.style.display === 'block') {
              urgencyGraphContainer.style.display = 'none';
            }
          }
        };
      
        // Initial dimensions
        updateDimensions();
      
        // Event listener for window resize
        window.addEventListener('resize', updateDimensions);
      }
      
      
      
// Urgency Graph Function
      function showUrgencyGraph() {
        const table = document.getElementById('similarClassesTable');
        const lastColumn = table.rows[0].cells[table.rows[0].cells.length - 1];
        const urgencyGraphContainer = document.getElementById('urgencyGraphContainer');
        const colTitle = document.getElementById('metricsReasonsCol');
        const metricsReasonsClass = document.getElementById('metricsReasonsClass');
      
        // Function to update dimensions
        const updateDimensions = () => {
          const computedDisplayStyle = window.getComputedStyle(urgencyGraphContainer).getPropertyValue('display');
      
          if (computedDisplayStyle === 'none') {
            urgencyGraphContainer.style.display = 'block';
            urgencyGraphContainer.style.width = `${lastColumn.offsetWidth}px`;
            const height = table.offsetHeight - 2;
            urgencyGraphContainer.style.height = `${height}px`;
            const top = table.offsetTop + 2;
            urgencyGraphContainer.style.top = `${top}px`;
            urgencyGraphContainer.style.left = `${lastColumn.offsetLeft + table.offsetLeft}px`;
      
            if (metricsReasonsClass.style.display === 'block') {
              metricsReasonsClass.style.display = 'none';
              colTitle.textContent = '';
            }
          } else {
            urgencyGraphContainer.style.display = 'none';
          }
        };
      
        // Initial dimensions
        updateDimensions();
      
        // Event listener for window resize
        window.addEventListener('resize', updateDimensions);
      }
      

  return (
    <div id='dashboard'>
         <>
        <Helmet>
          <title>Similar Classes</title>
        </Helmet>
        </>
    <h1>Name of Class</h1>
    <div id='projectgraphContainer'>
    <table id='similarClassesTable'>
        <tr id='titles'>
            <td><input type='checkbox' id="selectAll" onChange={handleCheckboxChange}/></td>
            <th>Class Name</th>
            <th>Metrics</th>
            <th>Similarity</th>
            <th>Urgency</th>
            <th>Agreement</th>
            <th id='metricsReasonsCol' colSpan={2}></th>
        </tr>
        <tr>
            <td><input type='checkbox'/></td>
            <td>ClassName</td>
            <td>CBO 100 | WMC 500 | DIT 600</td>
            <td className='bold'>100%<button id='expand' onClick={showMetricsReasons}>···</button></td>
            <td className='bold'>80%<button id='expand' onClick={showUrgencyGraph}>···</button></td>
            <td className='bold'>20%</td>
            <td  colSpan={2} className='metricsColumnTd'></td>

        </tr>
        <tr>
            <td><input type='checkbox'/></td>
            <td>ClassName</td>
            <td>CBO 100 | WMC 500 | DIT 600</td>
            <td className='bold'>100%<button id='expand' onClick={showMetricsReasons}>···</button></td>
            <td className='bold'>80%<button id='expand' onClick={showUrgencyGraph}>···</button></td>
            <td className='bold'>20%</td>
            <td  colSpan={2} className='metricsColumnTd'></td>

        </tr>
        <tr>
            <td><input type='checkbox'/></td>
            <td>ClassName</td>
            <td>CBO 100 | WMC 500 | DIT 600</td>
            <td className='bold'>100%<button id='expand' onClick={showMetricsReasons}>···</button></td>
            <td className='bold'>80%<button id='expand' onClick={showUrgencyGraph}>···</button></td>
            <td className='bold'>20%</td>
            <td  colSpan={2} className='metricsColumnTd'></td>

        </tr>
        <tr>
            <td><input type='checkbox'/></td>
            <td>ClassName</td>
            <td>CBO 100 | WMC 500 | DIT 600</td>
            <td className='bold'>100%<button id='expand' onClick={showMetricsReasons}>···</button></td>
            <td className='bold'>80%<button id='expand' onClick={showUrgencyGraph}>···</button></td>
            <td className='bold'>20%</td>
            <td  colSpan={2} className='metricsColumnTd'></td>

        </tr>
        <tr>
            <td><input type='checkbox'/></td>
            <td>ClassName</td>
            <td>CBO 100 | WMC 500 | DIT 600</td>
            <td className='bold'>100%<button id='expand' onClick={showMetricsReasons}>···</button></td>
            <td className='bold'>80%<button id='expand' onClick={showUrgencyGraph}>···</button></td>
            <td className='bold'>20%</td>
            <td  colSpan={2} className='metricsColumnTd'></td>

        </tr>
        <tr>
            <td><input type='checkbox'/></td>
            <td>ClassName</td>
            <td>CBO 100 | WMC 500 | DIT 600</td>
            <td className='bold'>100%<button id='expand' onClick={showMetricsReasons}>···</button></td>
            <td className='bold'>80%<button id='expand' onClick={showUrgencyGraph}>···</button></td>
            <td className='bold'>20%</td>
            <td  colSpan={2} className='metricsColumnTd'></td>

        </tr>
        <tr>
            <td><input type='checkbox'/></td>
            <td>ClassName</td>
            <td>CBO 100 | WMC 500 | DIT 600</td>
            <td className='bold'>100%<button id='expand' onClick={showMetricsReasons}>···</button></td>
            <td className='bold'>80%<button id='expand' onClick={showUrgencyGraph}>···</button></td>
            <td className='bold'>20%</td>
            <td  colSpan={2} className='metricsColumnTd'></td>

        </tr>
        <tr>
            <td><input type='checkbox'/></td>
            <td>ClassName</td>
            <td>CBO 100 | WMC 500 | DIT 600</td>
            <td className='bold'>100%<button id='expand' onClick={showMetricsReasons}>···</button></td>
            <td className='bold'>80%<button id='expand' onClick={showUrgencyGraph}>···</button></td>
            <td className='bold'>20%</td>
            <td  colSpan={2} className='metricsColumnTd'></td>

        </tr>
        <tr>
            <td><input type='checkbox'/></td>
            <td>ClassName</td>
            <td>CBO 100 | WMC 500 | DIT 600</td>
            <td className='bold'>100%<button id='expand' onClick={showMetricsReasons}>···</button></td>
            <td className='bold'>80%<button id='expand' onClick={showUrgencyGraph}>···</button></td>
            <td className='bold'>20%</td>
            <td  colSpan={2} className='metricsColumnTd'></td>

        </tr>
        <tr>
            <td><input type='checkbox'/></td>
            <td>ClassName</td>
            <td>CBO 100 | WMC 500 | DIT 600</td>
            <td className='bold'>100%<button id='expand' onClick={showMetricsReasons}>···</button></td>
            <td className='bold'>80%<button id='expand' onClick={showUrgencyGraph}>···</button></td>
            <td className='bold'>20%</td>
            <td  colSpan={2} className='metricsColumnTd'></td>

        </tr>
    </table>
    <table id='metricsReasonsClass'>
        <tr>
            <td>
                CBO(Coupling Between Objects)
                <li>Ανασχεδίαση των κλάσεων για να μειωθεί ο βαθμός σύζευξης μεταξύ</li>
            </td>
        </tr>
        <tr>
        <td>
                CBO(Coupling Between Objects)
                <li>Ανασχεδίαση των κλάσεων για να μειωθεί ο βαθμός σύζευξης μεταξύ</li>
            </td>
        </tr>
        <tr>
        <td>
                NOM(Number of Methods)
                <li>Ανασχεδίαση μεγάλων μεθόδων σε μικρότερες, πιο εστιασμένες μεθόδους</li>
                <li>Εξέταση του ενδεχομένου χρήσης της Αρχής Ενιαίας Ευθύνης (SRP)</li>
            </td>
        </tr>
        <tr>
        <td>
               DIT(Depth of Inheritance Tree)
                <li>Χρήση της αρχής Composition Over Inheritance, η οποία δηλώνει οτι είναι προτιμότερο να επιτυγχάνεται πολυμορφισμός μέσω σύνθεσης</li>
            </td>
        </tr>
    </table>

    <div id='urgencyGraphContainer'>
        <h1>Title</h1>
        <div id='center'>
        <div id='urgencyGraph'></div>
        <div>
            <ul id='graphInfo'>
                <li id='myClass'>My Class</li>
                <li id='yesClasses'>Yes Classes</li>
                <li id='noClasses'>No Classes</li>
            </ul>
        </div>
        </div>
    </div>
    <button id='retrainButton'>Retrain Model <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd" />
</svg>
</button>
    </div>
    </div>

  )
}

export default SimilarClasses