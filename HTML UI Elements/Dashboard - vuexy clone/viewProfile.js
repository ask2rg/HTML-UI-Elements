// JavaScript source code

var dashboardViewProfilePageHTML = `

    <div class="PageContainer">
            
        <div class="rowContainer" style="">

            <div class='col-1'>
                <div class="rowCard">
                    <div class="card-box-heading">Account</div>
                    <div class="card-box-body">

                        <div class="divProfileInfoView">
                            <div class="profileImg">
                                <img src="{{vpf-account-pfImg}}" />
                            </div>
                            <div class="profileInfo">
                                <div class="pfInfo-col pfCol2">
                                    <div class="col-row">
                                        <div class="title">Employee id</div>
                                        <div class="text-moreWarp"> {{vpf-account-empid}} </div>
                                    </div>
                                    <div class="col-row">
                                        <div class="title">Name</div>
                                        <div class="text-moreWarp"> {{vpf-account-name}} </div>
                                    </div>
                                    <div class="col-row">
                                        <div class="title">Email</div>
                                        <div class="text-moreWarp"> {{vpf-account-email}} </div>
                                    </div>
                                </div>
                                <div class="pfInfo-col pfCol2">
                                    <div class="col-row">
                                        <div class="title">Designation</div>
                                        <div  class="text-moreWarp">{{vpf-account-desg}}</div>
                                    </div>
                                    <div class="col-row">
                                        <div class="title">Role</div>
                                        <div class="text-moreWarp">{{vpf-account-role}}</div>
                                    </div>
                                    <div class="col-row">
                                        <div class="title">Branch</div>
                                        <div  class="text-moreWarp">{{vpf-account-branch}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button class="btn-outline" style="margin-right: 0.56rem;" onclick="accountSettingsPg()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                <span style="margin-left: .5rem; vertical-align: middle;">Edit</span>
                            </button>
                            <button class="btn-outline red">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                <span style="margin-left: .5rem; vertical-align: middle;">Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="rowContainer" style="">

            <div class='col-2'>
                <div class="rowCard">
                    <div class="card-box-heading" style="text-transform: none;">Informaton</div>
                    <div class="card-box-body">

                        <div class="pfInfo-col">
                            <div class="col-row">
                                <div class="title">Birth Date</div>
                                <div class="text-moreWarp"> {{vpf-info-dob}} </div>
                            </div>
                            <div class="col-row">
                                <div class="title">Mobile</div>
                                <div  class="text-moreWarp"> {{vpf-info-mob}} </div>
                            </div>
                            <div class="col-row">
                                <div class="title">Gender</div>
                                <div class="text-moreWarp"> {{vpf-info-gender}} </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class='col-2'>
                <div class="rowCard">
                    <div class="card-box-heading" style="text-transform: none;">Social Links</div>
                    <div class="card-box-body">

                        <div class="pfInfo-col">
                            <div class="col-row">
                                <div class="title">Github</div>
                                <div class="text-moreWarp"> {{vpf-sl-github}} </div>
                            </div>
                            <div class="col-row">
                                <div class="title">CodePen</div>
                                <div class="text-moreWarp"> {{vpf-sl-codepen}} </div>
                            </div>
                            <div class="col-row">
                                <div class="title">Twitter</div>
                                <div  class="text-moreWarp"> {{vpf-sl-twitter}} </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
 </div>
`;



var viewProfilePageData = {
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
        github: 'Not available',
        codepen: 'Not available',
        twitter: 'Not available'
    }
}

function showViewProfilePage(viewProfilePageData) {

    dashboardViewProfilePageHTML = dashboardViewProfilePageHTML.replace(/{{vpf-account-pfImg}}/g, viewProfilePageData.account.imgsrc);
    dashboardViewProfilePageHTML = dashboardViewProfilePageHTML.replace(/{{vpf-account-empid}}/g, viewProfilePageData.account.employeeid);
    dashboardViewProfilePageHTML = dashboardViewProfilePageHTML.replace(/{{vpf-account-name}}/g, viewProfilePageData.account.name);
    dashboardViewProfilePageHTML = dashboardViewProfilePageHTML.replace(/{{vpf-account-email/g, viewProfilePageData.account.email);
    dashboardViewProfilePageHTML = dashboardViewProfilePageHTML.replace(/{{vpf-account-desg}}/g, viewProfilePageData.account.designation);
    dashboardViewProfilePageHTML = dashboardViewProfilePageHTML.replace(/{{vpf-account-role}}/g, viewProfilePageData.account.role);
    dashboardViewProfilePageHTML = dashboardViewProfilePageHTML.replace(/{{vpf-account-branch}}/g, viewProfilePageData.account.branch);
                                   
    dashboardViewProfilePageHTML = dashboardViewProfilePageHTML.replace(/{{vpf-info-dob}}/g, viewProfilePageData.informaton.dob);
    dashboardViewProfilePageHTML = dashboardViewProfilePageHTML.replace(/{{vpf-info-mob}}/g, viewProfilePageData.informaton.mob);
    dashboardViewProfilePageHTML = dashboardViewProfilePageHTML.replace(/{{vpf-info-gender}}/g, viewProfilePageData.informaton.gender);
                                      
    dashboardViewProfilePageHTML = dashboardViewProfilePageHTML.replace(/{{vpf-sl-github}}/g, viewProfilePageData.sociallinks.github);
    dashboardViewProfilePageHTML = dashboardViewProfilePageHTML.replace(/{{vpf-sl-codepen}}/g, viewProfilePageData.sociallinks.codepen);
    dashboardViewProfilePageHTML = dashboardViewProfilePageHTML.replace(/{{vpf-sl-twitter}}/g, viewProfilePageData.sociallinks.twitter);

    return dashboardViewProfilePageHTML;
}

