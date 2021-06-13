import React from 'react'

function About() {
    return (
        <div>
            <div class="container-fluid bg-dark text-white my-3">
                <div class="text-center py-3"><h2>About Employee Management System</h2></div>
                <div class='px-5 py-5 container-fluid text-center  align-middle justify-content-center '>
                    <p class=''>Hi i'm <strong>Muhammad Tayyab Khan <i>CEO of Employee Management System</i></strong>.
                    I'm Mern stack developer. I'have one year experience in full stack javaScript develpor.
                     The purpose of this website is to provide the facilities to company managers to manage the Employee data. 
                     To save the record of Employees.
                      Using this Website any manager can (add, delete, update and edit) their Employees and their data. 
                       <strong>Why You Choose This Plateform.</strong>
                         Every Manager has it's own account and he/she can watch only his/her Employees.
                         This management system is Fast and secure.
                        This management system have JSON WEB TOKEN authentication.
                        I'm very happy that you are the one who is the part of our Employee Management System.
                         Thank You! Stay Tuned With Us.

                       </p>
                </div>
            </div>
            <div class="container-fluid my-3 py-4 bg-dark text-center text-white">
                Copyright © Exam Management System {new Date().getFullYear()}
            </div>
        </div>
    )
}

export default About
