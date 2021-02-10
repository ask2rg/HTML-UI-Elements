// JavaScript source code

var dashboardHomePageHTML = `


   <div class="PageContainer">

        <div class="rowContainer">

            <div class='col-2'>
                <div class="rowCard bgImgCom">
                    <div class="card-box-body" style="margin-top: 54px;">
                        <h1 style="margin-top: 14px;">Welcome, {{hom-basic-pfname}}</h1>
                        <span>Some quick example test to build on the card title and make up the bulk of the card's content.</span>
                    </div>
                </div>
            </div>

            <div class='col-4'>
                <div class="rowCard">
                    <div class="card-box-heading">Card title</div>
                    <div class="card-box-body">Some quick example test to build on the card title and make up the bulk of the card's content.</div>
                </div>
            </div>

            <div class='col-4'>
                <div class="rowCard">
                    <div class="card-box-heading">Card title</div>
                    <div class="card-box-body">Some quick example test to build on the card title and make up the bulk of the card's content.</div>
                </div>
            </div>

        </div>

        <div class="rowContainer" style="">

            <div class='col-3'>
                <div class="rowCard">
                    <div class="card-heading">Card title</div>
                    <div class="card-box-body">Some quick example test to build on the card title and make up the bulk of the card's content.</div>
                </div>
            </div>

            <div class='col-3'>
                <div class="rowCard">
                    <div class="card-box-heading">Card title</div>
                    <div class="card-box-body">Some quick example test to build on the card title and make up the bulk of the card's content.</div>
                </div>
            </div>

            <div class='col-3'>
                <div class="rowCard">
                    <div class="card-box-heading">Card title</div>
                    <div class="card-box-body">Some quick example test to build on the card title and make up the bulk of the card's content.</div>
                </div>
            </div>

        </div>

        <div class="rowContainer" style="">

            <div class='col-1'>
                <div class="rowCard">
                    <div class="card-box-heading">Card title</div>
                    <div class="card-box-body">Some quick example test to build on the card title and make up the bulk of the card's content.</div>
                </div>
            </div>

        </div>

        <div class="rowContainer" style="">

            <div class='col-2'>
                <div class="rowCard" style="color: #fff; background: #7b6ff0;">
                    <div class="card-box-heading" style="color: #fff; background: #7b6ff0;">Card title</div>
                    <div class="card-box-body">Some quick example test to build on the card title and make up the bulk of the card's content.</div>
                </div>
            </div>

        </div>
</div>

`;



var homePageData = {
    basic_nfo: {
        pf_img_src: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg',
        pf_name: 'Sundar piche'       
    },
    informaton: {
        dob: '10 June 1972',
        mob: '+91 9988776655',
        gender: 'Male'
    }
    
}

function showHomePage(homePageData) {
    dashboardHomePageHTML = dashboardHomePageHTML.replace(/{{hom-basic-pfname}}/g, homePageData.basic_nfo.pf_name);

    return dashboardHomePageHTML;
}

