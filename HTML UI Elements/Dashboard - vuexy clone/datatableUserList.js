// JavaScript source code

var datatableViewUserListPageHTML = `


    
        <div class="PageContainer">
            <div class="rowContainer" style="">

                <div class='col-1'>
                    <div class="rowCard">
                        <div class="card-box-body">

                            <button type="button" class=" btn-outline regular" style="float: right; margin-right: 1.2rem;">Export as CSV</button>
                            <button type="button" class="btn-shadow" style="float: right; margin-top: 1rem;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            </button>

                            <table id="userManagementDataTable" class="table1 nowrap noSelect" cellspacing="0" style="width:100%">
                                <thead>
                                    <tr>
                                        <th class="th-sm" onclick="document.querySelectorAll('.dataTables_scrollHead table th')[0].click()">
                                            Employee id
                                        </th>
                                        <th class="th-sm" onclick="document.querySelectorAll('.dataTables_scrollHead table th')[1].click()">
                                            Name
                                        </th>
                                        <th class="th-sm" onclick="document.querySelectorAll('.dataTables_scrollHead table th')[2].click()">
                                            Email
                                        </th>
                                        <th class="th-sm" onclick="document.querySelectorAll('.dataTables_scrollHead table th')[3].click()">
                                            Designation
                                        </th>
                                        <th class="th-sm" onclick="document.querySelectorAll('.dataTables_scrollHead table th')[4].click()">
                                            Role
                                        </th>
                                        <th class="th-sm" onclick="document.querySelectorAll('.dataTables_scrollHead table th')[5].click()">
                                            Status
                                        </th>
                                        <th class="th-sm" onclick="document.querySelectorAll('.dataTables_scrollHead table th')[6].click()">
                                            Verified
                                        </th>                                        
                                        <th class="th-sm" onclick="document.querySelectorAll('.dataTables_scrollHead table th')[7].click()">
                                            Branch
                                        </th>
                                        <th class="th-sm" onclick="">
                                            Acctions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                     {{{{datatableBodyHTML}}}}
                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>

            </div>
        </div>

`;



var viewDatatableUserListTableData = {
    dataSet: [
        ["EM5628E7839", "Sundar Pichai", "sundarpsundarpicheiche@google.com", "Assistant programme", "Admin", "active", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7840", "Airi Satou", "airisatou@google.com", "Informatic Assistant", "User", "pending", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7841", "Brielle Williamson", "briellewilliamson@google.com", "Informatic Assistant", "User", "active", "F", "Java", "action=Edit,Delete"],
        ["EM5628E7842", "Jena Gaines", "jenagaines@google.com", "Software Engineer", "Admin", "active", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7843", "Martena Mccray", "MartenaMccray@google.com", "Informatic Assistant", "User", "blocked", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7844", "Haley Kennedy", "HaleyKennedy@google.com", "Informatic Assistant", "User", "active", "F", "Java", "action=Edit,Delete"],
        ["EM5628E7845", "Sundar Pichai", "sundarpsundarpicheiche@google.com", "Assistant programme", "Admin", "active", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7846", "Airi Satou", "airisatou@google.com", "Informatic Assistant", "User", "pending", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7847", "Brielle Williamson", "briellewilliamson@google.com", "Informatic Assistant", "User", "active", "F", "Java", "action=Edit,Delete"],
        ["EM5628E7848", "Jena Gaines", "jenagaines@google.com", "Software Engineer", "Admin", "active", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7849", "Martena Mccray", "MartenaMccray@google.com", "Informatic Assistant", "User", "blocked", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7850", "Haley Kennedy", "HaleyKennedy@google.com", "Informatic Assistant", "User", "active", "F", "Java", "action=Edit,Delete"],
        ["EM5628E7851", "Sundar Pichai", "sundarpsundarpicheiche@google.com", "Assistant programme", "Admin", "active", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7852", "Airi Satou", "airisatou@google.com", "Informatic Assistant", "User", "pending", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7853", "Brielle Williamson", "briellewilliamson@google.com", "Informatic Assistant", "User", "Active", "F", "Java", "action=Edit,Delete"],
        ["EM5628E7854", "Jena Gaines", "jenagaines@google.com", "Software Engineer", "Admin", "active", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7855", "Martena Mccray", "MartenaMccray@google.com", "Informatic Assistant", "User", "blocked", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7856", "Haley Kennedy", "HaleyKennedy@google.com", "Informatic Assistant", "User", "active", "F", "Java", "action=Edit,Delete"],
        ["EM5628E7857", "Sundar Pichai", "sundarpsundarpicheiche@google.com", "Assistant programme", "Admin", "active", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7858", "Airi Satou", "airisatou@google.com", "Informatic Assistant", "User", "pending", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7859", "Brielle Williamson", "briellewilliamson@google.com", "Informatic Assistant", "User", "active", "F", "Java", "action=Edit,Delete"],
        ["EM5628E7860", "Jena Gaines", "jenagaines@google.com", "Software Engineer", "Admin", "active", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7861", "Martena Mccray", "MartenaMccray@google.com", "Informatic Assistant", "User", "blocked", "T", "Java", "action=Edit,Delete"],
        ["EM5628E7862", "Haley Kennedy", "HaleyKennedy@google.com", "Informatic Assistant", "User", "active", "F", "Java", "action=Edit,Delete"],
    ],
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


var elementsDatatableListPage = {
    actionBtn:{
        edit: ` 
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </span>
            `,
        delete: ` 
            <span>
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
             </span>
            `
    },
    statusBadge: {
        active: `<td class= "text-Cn"> <span class="status-badge"> Active </span></td>`,
        pending: `<td class="text-Cn"> <span class="status-badge yel"> Pending </span></td>`,
        blocked: `<td class="text-Cn"> <span class="status-badge red"> blocked </span> </td>`,
        none: `<td class="text-Cn"> <span class="status-badge yel"> none </span> </td>`
    },
    verifiedDot: {
        t: `<td class="text-Cn"><span class="bullet-dot"> T </span></td>`,
        f: `<td class= "text-Cn"><span class="bullet-dot bgc-gray"> F </span></td>`,
        n:`<td class= "text-Cn"> - </td>`
    },

}


function datatableRecordUpdate(viewDatatableUserListTableData) {
    let datatableBodyHTML = '';
    
    for (let r = 0; r < viewDatatableUserListTableData.dataSet.length; r++) {

        let rowData = viewDatatableUserListTableData.dataSet[r];

        let verifiedDot, statusBadge, actionBtnGroup;
        actionBtnGroup = '';

        let allowActionList = rowData[8].split('=')[1].split(',');
        
        allowActionList.forEach(function (act) {            
            if (act.trim() == "Edit") {
                actionBtnGroup += elementsDatatableListPage.actionBtn.edit;
            }
            if (act.trim() == "Delete") {
                actionBtnGroup += elementsDatatableListPage.actionBtn.delete;
            }
        });

        switch (rowData[6]) {
            case 'T':
                verifiedDot = elementsDatatableListPage.verifiedDot.t;
                break;
            case 'F':
                verifiedDot = elementsDatatableListPage.verifiedDot.f;
                break;
            default:
                verifiedDot = elementsDatatableListPage.verifiedDot.n;
        }


        switch (rowData[5]) {
            case 'active':
                statusBadge = elementsDatatableListPage.statusBadge.active;
                break;
            case 'pending':
                statusBadge = elementsDatatableListPage.statusBadge.pending;
                break;
            case 'blocked':
                statusBadge = elementsDatatableListPage.statusBadge.blocked;
                break;
            default:
                statusBadge = elementsDatatableListPage.statusBadge.none;
        }


        let rowhtml = `<tr onclick='this.classList.toggle("chk")'>
                            <td>
                                <label class="icon-cb">`+rowData[0]+`</label>
                            </td >
                            <td>`+ rowData[1] +`</td>
                            <td>`+ rowData[2] +`</td>
                            <td>`+ rowData[3] +`</td>
                            <td>`+ rowData[4] +`</td>
                            `+ statusBadge +`
                            `+ verifiedDot +`
                            <td>`+ rowData[7] +`</td>
                            <td class="actionCell">
                               `+ actionBtnGroup +`
                            </td>
                       </tr>`;
        
        datatableBodyHTML = datatableBodyHTML + rowhtml;
    }
    
    datatableViewUserListPageHTML = datatableViewUserListPageHTML.replace('{{{{datatableBodyHTML}}}}', datatableBodyHTML); 
    return datatableViewUserListPageHTML;
    
}



//function showDataTableListPage(viewDatatableUserListTableData) {

    //datatableViewUserListPageHTML = datatableViewUserListPageHTML.replace(/{{vpf-account-pfImg}}/g, viewProfilePageData.account.imgsrc);
    //datatableViewUserListPageHTML = datatableViewUserListPageHTML.replace(/{{vpf-account-empid}}/g, viewProfilePageData.account.employeeid);
    //return datatableViewUserListPageHTML;
//}

