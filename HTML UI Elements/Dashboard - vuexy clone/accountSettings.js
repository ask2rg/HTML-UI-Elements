// JavaScript source code

var dashboardAccSettingsPageHTML = `

    <div class="PageContainer">


            <div class="rowContainer" style="">


                <div class="pageHeader col-1 noSelect">
                    <div class="tittle">Account Settings</div>
                    <div class="titleMore"></div>
                </div>

                <div class="v-nav-Page-body col-1">
                    <ul id="accSettingsPgTabs" class="page-vert-menu">
                        <li>
                            <a href="#" class="active" onclick="accountSettingsPgSwitchTab(this,'formEditGeneralInfo')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                <span>General</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" onclick="accountSettingsPgSwitchTab(this,'formEditAdditionalInfo')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>
                                <span>Info</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" onclick="accountSettingsPgSwitchTab(this,'formEditLinksInfo')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                <span>Social Links</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" onclick="accountSettingsPgSwitchTab(this,'formChangeAccPassword')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                <span>Change Password</span>
                            </a>
                        </li>
                    </ul>


                    <div class="rowCard">
                        
                        <div class="card-box-body">
                                                        

                            <form id="formEditGeneralInfo" class="edit-profile-details-box">

                                <div class="edit-profile-pic-box" style="margin-bottom: 2rem;">
                                    <img src="{{vpf-account-pfImg}}">
                                    <div style="display:inline-block; vertical-align:middle;">
                                        <div>
                                            <button class="btn-outline" style="margin-right: 0.56rem;">
                                                <span style="vertical-align: middle;">Change</span>
                                            </button>
                                            <button class="btn-outline red" style="border:none;">
                                                <span style="vertical-align: middle;">Remove Avatar</span>
                                            </button>
                                        </div>
                                        <p style="font-size:.9rem;color:#989898; ">Allowed JPG, GIF or PNG. Max size of 1MB</p>
                                    </div>
                                </div>

                                <div class="col-row">
                                    <label for="userName" class="title">Name</label>
                                    <input id="userName" type="text" value="{{vpf-account-name}}">
                                </div>

                                <div class="col-row">
                                    <label for="userName" class="title">Employee id</label>
                                    <input id="userName" type="text" value="{{vpf-account-empid}}">
                                </div>

                                <div class="col-row">
                                    <label for="userName" class="title">Email</label>
                                    <input id="userName" type="text" value="{{vpf-account-empid}}">
                                </div>

                                <div class="col-row">
                                    <label for="userName" class="title">Designation</label>
                                    <input id="userName" type="text" value="{{vpf-account-desg}}">
                                </div>

                                <div class="col-row">
                                    <label for="userName" class="title">Branch</label>
                                    <input id="userName" type="text" value="{{vpf-account-branch}}">
                                </div>

                                <div>
                                    <button class="btn-outline" style="margin-right: 0.56rem;">
                                        <span style="vertical-align: middle;">Save Changes</span>
                                    </button>
                                    <button class="btn-outline red" style="border:none;">
                                        <span style="vertical-align: middle;">Cancel</span>
                                    </button>
                                </div>

                            </form>

                            <form id="formEditAdditionalInfo" class="edit-profile-details-box" style="display:none">

                                <div class="col-row">
                                    <label for="userName" class="title">Birth Date</label>
                                    <input id="userName" type="text" value="{{vpf-info-dob}}">
                                </div>

                                <div class="col-row">
                                    <label for="userName" class="title">Mobile</label>
                                    <input id="userName" type="text" value="{{vpf-info-mob}}">
                                </div>

                                <div class="col-row">
                                    <label for="userName" class="title">Gender</label>
                                    <input id="userName" type="text" value="{{vpf-info-gender}}">
                                </div>


                                <div>
                                    <button class="btn-outline" style="margin-right: 0.56rem;">
                                        <span style="vertical-align: middle;">Save Changes</span>
                                    </button>
                                    <button class="btn-outline red" style="border:none;">
                                        <span style="vertical-align: middle;">Cancel</span>
                                    </button>
                                </div>

                            </form>

                            <form id="formEditLinksInfo" class="edit-profile-details-box" style="display:none">

                                <div class="col-row">
                                    <label for="userName" class="title">Github</label>
                                    <input id="userName" type="text" value="{{vpf-sl-github}}">
                                </div>

                                <div class="col-row">
                                    <label for="userName" class="title">Codepen</label>
                                    <input id="userName" type="text" value="{{vpf-sl-codepen}}">
                                </div>

                                <div class="col-row">
                                    <label for="userName" class="title">Twitter</label>
                                    <input id="userName" type="text" value="{{vpf-sl-twitter}}">
                                </div>


                                <div>
                                    <button class="btn-outline" style="margin-right: 0.56rem;">
                                        <span style="vertical-align: middle;">Save Changes</span>
                                    </button>
                                    <button class="btn-outline red" style="border:none;">
                                        <span style="vertical-align: middle;">Cancel</span>
                                    </button>
                                </div>

                            </form>

                            <form id="formChangeAccPassword" class="edit-profile-details-box" style="display:none; margin: 2rem;">

                                <div class="col-row">                                    
                                    <input id="userName" type="password" placeholder="Old Password">
                                </div>

                                <div class="col-row">                                    
                                    <input id="userName" type="password" placeholder="New Password">
                                </div>

                                <div class="col-row">
                                    <input id="userName" type="password" placeholder="Confirm Password">
                                </div>


                                <div>
                                    <button class="btn-outline" style="margin-right: 0.56rem;">
                                        <span style="vertical-align: middle;">Save Changes</span>
                                    </button>
                                    <button class="btn-outline green" style="border:none;" onclick="accSetNewPassShowHide();">
                                        <span id="showHidePassToggle" style="vertical-align: middle;">Show Password</span>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                   
                </div>

            </div>
        </div>

       
`;



var changeAccSettingsPageData = {
    account: {
        imgsrc: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg',
        employeeid: 'EM5628E7843',
        name: 'Sundar piche',
        email: 'sundarpiche@google.com',
        designation: 'Assistant programme',
        role: 'Admin',
        branch: 'JAVA'
    },
    informaton: {
        dob: '10 June 1972',
        mob: '+91 9988776655',
        gender: 'Male'
    },
    sociallinks: {
        github: '',
        codepen: '',
        twitter: ''
    }
}

function showAccountSettingsPage(changeAccSettingsPageData) {

    dashboardAccSettingsPageHTML = dashboardAccSettingsPageHTML.replace(/{{vpf-account-pfImg}}/g, changeAccSettingsPageData.account.imgsrc);
    dashboardAccSettingsPageHTML = dashboardAccSettingsPageHTML.replace(/{{vpf-account-empid}}/g, changeAccSettingsPageData.account.employeeid);
    dashboardAccSettingsPageHTML = dashboardAccSettingsPageHTML.replace(/{{vpf-account-name}}/g, changeAccSettingsPageData.account.name);
    dashboardAccSettingsPageHTML = dashboardAccSettingsPageHTML.replace(/{{vpf-account-email/g, changeAccSettingsPageData.account.email);
    dashboardAccSettingsPageHTML = dashboardAccSettingsPageHTML.replace(/{{vpf-account-desg}}/g, changeAccSettingsPageData.account.designation);    
    dashboardAccSettingsPageHTML = dashboardAccSettingsPageHTML.replace(/{{vpf-account-branch}}/g, changeAccSettingsPageData.account.branch);
                                   
    dashboardAccSettingsPageHTML = dashboardAccSettingsPageHTML.replace(/{{vpf-info-dob}}/g, changeAccSettingsPageData.informaton.dob);
    dashboardAccSettingsPageHTML = dashboardAccSettingsPageHTML.replace(/{{vpf-info-mob}}/g, changeAccSettingsPageData.informaton.mob);
    dashboardAccSettingsPageHTML = dashboardAccSettingsPageHTML.replace(/{{vpf-info-gender}}/g, changeAccSettingsPageData.informaton.gender);
                                      
    dashboardAccSettingsPageHTML = dashboardAccSettingsPageHTML.replace(/{{vpf-sl-github}}/g, changeAccSettingsPageData.sociallinks.github);
    dashboardAccSettingsPageHTML = dashboardAccSettingsPageHTML.replace(/{{vpf-sl-codepen}}/g, changeAccSettingsPageData.sociallinks.codepen);
    dashboardAccSettingsPageHTML = dashboardAccSettingsPageHTML.replace(/{{vpf-sl-twitter}}/g, changeAccSettingsPageData.sociallinks.twitter);

    return dashboardAccSettingsPageHTML;
}


function accountSettingsPgSwitchTab(curTab, tabWindowId) {
    accSettingsPgTabs
    var tabMenu = document.getElementById('accSettingsPgTabs');
    var tabWind = document.querySelectorAll('form.edit-profile-details-box');
    var tabs = tabMenu.querySelectorAll('li>a');
    tabs.forEach(function (tabElm) {
        if (tabElm.classList.contains('active')) {
            tabElm.classList.remove('active');
        }
    });
    tabWind.forEach(function (tabWin) {
        tabWin.style.display = "none";
    });
    curTab.classList.add('active');
    document.getElementById(tabWindowId).style.display = 'block';
}



function accSetNewPassShowHide() {
    var x = document.querySelectorAll("#formChangeAccPassword input");
    x.forEach(function (xElm) {
        if (xElm.type === "password") {
            xElm.type = "text";
            document.getElementById('showHidePassToggle').innerHTML = "Hide Password";
        } else {
            xElm.type = "password";
            document.getElementById('showHidePassToggle').innerHTML = "Show Password";
        }
    });
}
