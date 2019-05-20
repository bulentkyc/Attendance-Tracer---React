import React from 'react';
import Swiper from '../Components/Swiper';

const register = () => {
    return(
        <main className="container">
            <Swiper imgArr={[
                "/assets/role-img/student.png",
                "/assets/role-img/teacher.png",
                "/assets/role-img/manager.png",
                "/assets/role-img/observer.png",
                ]}/>
            <form id="register-form" action={process.env.ROOT_PATH_ON_DEV+"/registration"} method="POST" enctype="multipart/form-data">
                <h1 id="authType">Register</h1>
                <div id="firstNameDiv" class="form-group">
                    <label for="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" class="form-control" placeholder="Enter your first name"/>
                </div>
                <div id="lastNameDiv" class="form-group">
                    <label for="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" class="form-control" placeholder="Enter your last name"/>
                </div>

                <input id="role" name="role" type="text" class="form-control" hidden/>

                <div id="classCodeDiv" class="form-group">
                    <label for="classCode">Class Code</label>
                    <input id="classCode" name="classCode" type="text" class="form-control" placeholder="Enter your class code"/>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label> 
                        <input type="mail" class="form-control" id="email" name="email" placeholder="Enter username"/>
                        <small id="emailHelp" class="form-text text-muted">This email will be your user name also.</small>
                </div>
                <div class="form-group">
                    <label for="pass">Password</label>
                    <input type="password" class="form-control" id="pass" name="pass" placeholder="Password"/>
                </div>
                <div class="input-group mb-1">
                    <input type="file" class="custom-file-input" id="avatar" name="avatar"/>
                    <label class="custom-file-label" for="avatar">Choose file</label>
                </div>
                <button id="logInRegBtn" class="btn btn-primary">Submit</button>

            </form>
        </main>
    );
}

export default register;