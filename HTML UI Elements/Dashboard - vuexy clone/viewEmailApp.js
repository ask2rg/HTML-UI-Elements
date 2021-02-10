// JavaScript source code

var viewEmailAppPageHTML = `

<div class="PageContainer">            
    <div class="rowContainer" style="">

        <div class='col-1'>
            <div id="emailAppPg" class="rowCard email-App">

                <div class="emailAppOverlay active" onclick="document.getElementById('emailAppPg').classList.toggle('nav-collapsed');"></div>

                <div class="email-App-nav noSelect">
                    <div class="closeEmailAppMenu">
                        <div class="a-itm btn" style="float: right; margin: .2rem; padding: .4rem;" onclick="document.getElementById('emailAppPg').classList.toggle('nav-collapsed');">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                    </div>
                    <div style=" text-align: right; margin: 1.4rem auto;">
                        <div class=" btn-outline regular" style="width:140px;" onclick="document.querySelector('.email-App-content.composeNewEmail').classList.toggle('show')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            Compose
                        </div>
                    </div>

                    <div class="menu-list scrollbar">
                        <ul class="mailAppMenu">
                            <li onclick="emailAppChangeMenu(this)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span class="txt">Inbox</span>
                                <div class="new-r-badge">
                                    <span>5</span>
                                </div>
                            </li>

                            <li onclick="emailAppChangeMenu(this)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                <span class="txt">Sent</span>
                            </li>
                            <li onclick="emailAppChangeMenu(this)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <span class="txt">Starred</span>
                            </li>
                            <li onclick="emailAppChangeMenu(this)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span class="txt">Spam</span>
                                <div class="new-r-badge" style="background:#ea5455">
                                    <span>2</span>
                                </div>
                            </li>
                            <li onclick="emailAppChangeMenu(this)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                <span class="txt">Delete</span>
                            </li>
                        </ul>

                        <hr />
                        <div class="menu-sec-title">
                            Labels
                        </div>

                        <ul class="mailAppMenu">
                            <li onclick="emailAppChangeMenu(this)">
                                <span class="labels-Email" style="border-color:#28c76f"></span>
                                <span class="txt">Personal</span>
                            </li>

                            <li onclick="emailAppChangeMenu(this)">
                                <span class="labels-Email" style="border-color:#ff9f43"></span>
                                <span class="txt">Important</span>
                            </li>
                            <li onclick="emailAppChangeMenu(this)">
                                <span class="labels-Email" style="border-color:#ea5455"></span>
                                <span class="txt">Private</span>
                            </li>

                            <li onclick="emailAppChangeMenu(this)">
                                <span class="labels-Email" style="border-color:#7367f0"></span>
                                <span class="txt">Updates</span>
                            </li>
                        </ul>

                    </div>
                </div>

                <div class="email-App-content mailInbox">

                    <div class="search-top-full noSelect">
                        <div class="appNavOpener" onclick="document.getElementById('emailAppPg').classList.toggle('nav-collapsed');">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </div>
                        <div class="appSearchBox">
                            <input placeholder="Search Emails" type="text" value="">
                            <div class="S-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                        </div>
                    </div>

                    <div class="appActionBar noSelect">
                        <div class="leftside">
                            <div class="a-itm btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div class="a-itm btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                            </div>
                        </div>

                        <div class="rightside">
                            <div class="a-itm">
                                0-10 of 200
                            </div>

                            <div class="a-itm btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-toggle-icon"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </div>

                            <div class="a-itm btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-toggle-icon"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </div>
                        </div>
                    </div>

                    <div class="emailAppInboxList scrollbar">
                        <div class="inboxListContainer">

                            <div class="inboxItem" onclick="document.querySelector('.email-App-content.readMailMsg').classList.toggle('show')">

                                <div class="block1">
                                    <div class="avatar">
                                        <img src="https://d3g9pb5nvr3u7.cloudfront.net/authors/539a28913f3c0fd71ed4e43d/2131300937/256.jpg" />
                                    </div>
                                    <div class="action">
                                        <span class="chkBox" onclick="this.parentNode.parentNode.parentNode.classList.toggle('chk');event.stopPropagation();">
                                            <label class="icon-cb"></label>
                                        </span>
                                    </div>
                                </div>

                                <div class="block2">
                                    <div class="mailDetails">
                                        <div class="mailSub">
                                            <div class="senderName">Elon Musk</div>
                                            <div class="subject">Focused impactful open system 📷 😃</div>
                                        </div>
                                        <div class="mailMeta">
                                            <span class="labelsDot mr-1">
                                                <span class="bullet-dot">Updates</span>
                                            </span>
                                            <span class="mailDate">Aug 26</span>
                                        </div>
                                    </div>
                                    <div class="mail-message">
                                        Hey Modestine, Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological.
                                    </div>
                                </div>

                            </div>

                            <!-- -->

                            <div class="inboxItem" onclick="document.querySelector('.email-App-content.readMailMsg').classList.toggle('show')">

                                <div class="block1">
                                    <div class="avatar">
                                        <img src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg" />
                                    </div>
                                    <div class="action">
                                        <span class="chkBox" onclick="this.parentNode.parentNode.parentNode.classList.toggle('chk')">
                                            <label class="icon-cb"></label>
                                        </span>
                                    </div>
                                </div>

                                <div class="block2">
                                    <div class="mailDetails">
                                        <div class="mailSub">
                                            <div class="senderName">Jeff Bezos</div>
                                            <div class="subject">Focused impactful open system 📷 😃</div>
                                        </div>
                                        <div class="mailMeta">
                                            <span class="labelsDot mr-1">
                                                <span class="bullet-dot">Updates</span>
                                            </span>
                                            <span class="mailDate">Aug 26</span>
                                        </div>
                                    </div>
                                    <div class="mail-message">
                                        Hey Modestine, Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological.
                                    </div>
                                </div>

                            </div>

                            <div class="inboxItem" onclick="document.querySelector('.email-App-content.readMailMsg').classList.toggle('show')">

                                <div class="block1">
                                    <div class="avatar">
                                        <img src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg" />
                                    </div>
                                    <div class="action">
                                        <span class="chkBox" onclick="this.parentNode.parentNode.parentNode.classList.toggle('chk')">
                                            <label class="icon-cb"></label>
                                        </span>
                                    </div>
                                </div>

                                <div class="block2">
                                    <div class="mailDetails">
                                        <div class="mailSub">
                                            <div class="senderName">Bill Gates</div>
                                            <div class="subject">Focused impactful open system 📷 😃</div>
                                        </div>
                                        <div class="mailMeta">
                                            <span class="labelsDot mr-1">
                                                <span class="bullet-dot">Updates</span>
                                            </span>
                                            <span class="mailDate">Aug 26</span>
                                        </div>
                                    </div>
                                    <div class="mail-message">
                                        Hey Modestine, Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological.
                                    </div>
                                </div>

                            </div>


                            <div class="inboxItem" onclick="document.querySelector('.email-App-content.readMailMsg').classList.toggle('show')">

                                <div class="block1">
                                    <div class="avatar">
                                        <img src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_small.jpg" />
                                    </div>
                                    <div class="action">
                                        <span class="chkBox" onclick="this.parentNode.parentNode.parentNode.classList.toggle('chk')">
                                            <label class="icon-cb"></label>
                                        </span>
                                    </div>
                                </div>

                                <div class="block2">
                                    <div class="mailDetails">
                                        <div class="mailSub">
                                            <div class="senderName">Jack Dorsey</div>
                                            <div class="subject">Focused impactful open system 📷 😃</div>
                                        </div>
                                        <div class="mailMeta">
                                            <span class="labelsDot mr-1">
                                                <span class="bullet-dot">Updates</span>
                                            </span>
                                            <span class="mailDate">Aug 26</span>
                                        </div>
                                    </div>
                                    <div class="mail-message">
                                        Hey Modestine, Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological.
                                    </div>
                                </div>

                            </div>


                            <div class="inboxItem" onclick="document.querySelector('.email-App-content.readMailMsg').classList.toggle('show')">

                                <div class="block1">
                                    <div class="avatar">
                                        <img src="https://d3g9pb5nvr3u7.cloudfront.net/authors/539a28913f3c0fd71ed4e43d/2131300937/256.jpg" />
                                    </div>
                                    <div class="action">
                                        <span class="chkBox" onclick="this.parentNode.parentNode.parentNode.classList.toggle('chk')">
                                            <label class="icon-cb"></label>
                                        </span>
                                    </div>
                                </div>

                                <div class="block2">
                                    <div class="mailDetails">
                                        <div class="mailSub">
                                            <div class="senderName">Elon Musk</div>
                                            <div class="subject">Focused impactful open system 📷 😃</div>
                                        </div>
                                        <div class="mailMeta">
                                            <span class="labelsDot mr-1">
                                                <span class="bullet-dot">Updates</span>
                                            </span>
                                            <span class="mailDate">Aug 26</span>
                                        </div>
                                    </div>
                                    <div class="mail-message">
                                        Hey Modestine, Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological.
                                    </div>
                                </div>

                            </div>

                            <!-- -->
                        </div>
                    </div>

                </div>


                <div class="email-App-content readMailMsg">

                    <div class="readMailMsg-header">
                        <div class="readMailMsg-hd-left">
                            <span class="a-btn" onclick="document.querySelector('.email-App-content.readMailMsg').classList.toggle('show')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                            </span>
                            <span class="title">
                                Focused impactful open system 📷 😃
                            </span>
                        </div>
                        <div class="readMailMsg-hd-right">
                            <ul>
                                <li class="a-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                </li>
                                <li class="a-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
                                </li>
                                <li class="a-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="readMailMsg-MsgArea scrollbar">
                        <div class="msgArea-container">

                            <div class="mailLabels">
                                <div class="lableItem">
                                    <span class="bullet-dot" style="background:#28c76f;"></span>
                                    <span>Personal</span>
                                </div>
                                <div class="lableItem">
                                    <span class="bullet-dot"></span>
                                    <span>Updates</span>
                                </div>
                            </div>

                            <div class="rowCrd mailBody">
                                <div class="rcBody">
                                    <div class="mailBody-header">
                                        <div class="senderInfo">
                                            <div class="avatar">
                                                <img src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg" />
                                            </div>
                                            <div class="txtInfo">
                                                <div class="name title-txt">Sundar Pichai</div>
                                                <div class="emailAddr">sundarpichai@gmail.com</div>
                                            </div>
                                        </div>
                                        <div class="mailReceived">
                                            <div class="time">4:45 PM</div>
                                            <div class="date">Wed, Mar 20, 2019</div>
                                        </div>
                                    </div>

                                    <div class="mailBody-Message">
                                        Hey Ardis, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto CheloniaFreudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey Satyrinae outfreeman melebiose
                                    </div>
                                </div>
                            </div>

                            <div class="rowCrd">
                                <div class="rcBody">
                                    <span style="font-size:.98rem">
                                        Click here to
                                        <span class="txt-link"> Reply</span> or
                                        <span class="txt-link"> Forward</span>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="email-App-content composeNewEmail">

                    <div class="readMailMsg-header">
                        <div class="readMailMsg-hd-left">                                    
                            <span class="title">New Message</span>
                        </div>
                        <div class="readMailMsg-hd-right">
                            <span class="a-btn" onclick="document.querySelector('.email-App-content.composeNewEmail').classList.toggle('show')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </span>
                        </div>
                    </div>

                    <div class="readMailMsg-MsgArea scrollbar">
                        <div class="msgArea-container">

                            <div class="mailLabels">
                                
                            </div>

                            <form style="width: 100%;">
                                <div class="rowCrd mailBody">
                                    <div class="rcBody">
                                        <input class="composeMail-row form-input-txt shiftPlaceholder" type="text" placeholder="To:">

                                        <input class="composeMail-row form-input-txt shiftPlaceholder" type="text" placeholder="Subject">

                                        <textarea class="input-email-message" placeholder="message..."></textarea>
                                    </div>
                                </div>

                                <div class="rowCrd">
                                    <div class="rcBody" style="display:block!important;">
                                        <span class="composeMailLabels">
                                            <input type="checkbox" class="inputChk" id="compose-label-personal" style="display:none;">
                                            <label for="compose-label-personal">Personal</label>
                                        </span>

                                        <span class="composeMailLabels">
                                            <input type="checkbox" class="inputChk" id="compose-label-important" style="display:none;">
                                            <label for="compose-label-important">Important</label>
                                        </span>

                                        <span class="composeMailLabels">
                                            <input type="checkbox" class="inputChk" id="compose-label-private" style="display:none;">
                                            <label for="compose-label-private">Private</label>
                                        </span>

                                        <span class="composeMailLabels">
                                            <input type="checkbox" class="inputChk" id="compose-label-updates" style="display:none;">
                                            <label for="compose-label-updates">Updates</label>
                                        </span>

                                        <div style="text-align:center;">
                                            <div class=" btn-outline regular" style="width: calc(100% - 3.5rem); max-width: 220px;"  onclick="document.querySelector('.email-App-content.composeNewEmail').classList.toggle('show')">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                                Send
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
         </div>

    </div>
</div>`;





function emailAppChangeMenu(curSelect) {
    var allListItem = document.querySelectorAll('ul.mailAppMenu li');
    allListItem.forEach(function (li) {
        if (li.classList.contains('active')){
            li.classList.remove('active');
        }
    });
    curSelect.classList.add('active');
}

function showEmailAppPage() {
    // Incomplete - add data like datatableUserList.js
    return viewEmailAppPageHTML;
}



