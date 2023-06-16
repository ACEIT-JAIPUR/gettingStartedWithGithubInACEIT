import React from 'react'
import './Complaint.css'

function Complaint(props) {
  return (
    <form action="" class="form">
    <div class="fir-head">
        <h1>FIR information Report</h1>
    </div>
        <div class="first-box">
            <div class="first-box1" id="bg-black">Details of Occurence</div>
            <div class="first-box1">List of the Case</div>
            <div class="first-box1">Complaint</div>
        </div>
        <div class="second-box">
            <div class="fir-number second-box2">
                <label for="FIR Number">FIR Number</label>
                <input type="text" placeholder="83794574748" name="firNumber"/>
            </div>
            <div class="report-time second-box2">
                <div class="report-text">
                    <label for="report date">Report Date</label>
                    <label for="report time">Report Time</label>
                </div>
                <div class="report-date">
                    <input type="date" id="report"/>
                    <input type="date" id="report"/>
                </div>
            </div>
            <div class="law second-box2">
                <label for="section & law">Section & Law</label>
                <select id="lawlist" name="lawlist" form="select">
                    <option value="Act & Section">Section 375</option>
                    <option value="Act & Section">Section 144</option>
                    <option value="Act & Section">Section 01</option>
                  </select>
            </div>
        </div>
        <div class="third-box">
            <label for="" class="thid-box-heading">Date and Time of Occurence</label>
            <div class="on-off">
                <select id="on" name="" form="select">
                    <option value="select time">ON</option>
                    <option value="select time">Before</option>
                    <option value="select time">Between</option>
                    <option value="select time">After</option>
                </select>
            </div>

            <div class="table1">
                <div class="table-with-text1">
                    <div class="context1">
                        <label for="report date">Report Date</label>
                        <input type="date" id="report"/>
                    </div>
                    <div class="context2">
                        <label for="report date">Report Date</label>
                        <input type="date" id="report"/>
                    </div>
                </div>
                <div class="table-with-text1 table-with-text2">
                    <div class="context1">
                        <label for="report date">Report Date</label>
                        <input type="date" id="report"/>
                    </div>
                    <div class="context2">
                        <label for="report date">Report Date</label>
                        <input type="date" id="report"/>
                    </div>
                </div>
                <div class="side-context">
                    <div class="context1">
                        <input type="checkbox" id="" value="Days" class="checkbox"/>
                        <label for="vehicle1"> Days </label><br/>
                        <input type="checkbox" id="" value="Weeks" class="checkbox"/>
                        <label for="vehicle1"> Weeks </label><br/>
                        <input type="checkbox" id="" value="Months" class="checkbox"/>
                        <label for="vehicle1"> Months </label><br/>
                        <div class="counts">
                            <label for="vehicle1"> Counts </label><br/>
                            <input type="Text" id="count-text" value=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fourth-box">
            <div class="type1 part1">
                <label for="types of information">Types of Information</label>
                <select id="Written" name="" form="select">
                    <option value="Written">Written</option>
                    <option value="Oral">Oral</option>
                    <option value="Court Endorsement">Court Endorsement</option>
                </select>
            </div>
            <div class="type1 part2">
                <label for="Case Types">Case Types</label>
                <select id="Written" name="" form="select">
                    <option value="Crime">Crime</option>
                    <option value="Accident">Accident</option>
                    <option value="Prohibition">Prohibition</option>
                    <option value="L&O">L&O</option>
                    <option value="Others/SLL">Others/SLL</option>
                </select>
            </div>
        </div>

        <div class="fifth-box">
            <dov class="side-input-section">
                <label for="report date">Place of Occurence</label>
                <input type="text" id="report"/>
            </dov>
        </div>

        <div class="sixth-box">
            <div class="direction">
                <label for="report date">Direction</label>
                <div class="direc-input">
                <input type="text" id="report"/>
                <select id="Written" name="" form="select">
                    <option value="km">KM</option>
                </select>
                </div>
            </div>
            <dov class="side-bar-option">
                <label for="report date">District</label>
                <input type="text" id="report"/>
            </dov>
            <dov class="side-bar-option">
                <label for="report date">Police Station</label>
                <input type="text" id="report"/>
            </dov>
            <dov class="side-bar-option">
                <label for="report date">village</label>
                <input type="text" id="report"/>
            </dov>
        </div>
</form>
  )
}

export default Complaint