let inbox = document.querySelector('.container-mail'),
        sentMail = document.querySelector('.sent-mail-container'),
        draftMail = document.querySelector('.draft-mail-container'),
        trashMail = document.querySelector('.trash-mail-container'),
        composeMail = document.querySelector('.compose-mail-container'),
        groupMail = document.querySelector('.group-mail-container'),
        // loginMail = document.querySelector('.login-container'),
		sentMailEventBtn = document.querySelector('#sent'),
        draftMailEventBtn = document.querySelector('#draft'),
		inboxEventBtn = document.querySelector('#inbox'),
        trashMailEventBtn = document.querySelector('#trash'),
        composeMailEventBtn = document.querySelector('.compose'),
        groupMailEventBtn = document.querySelector('#group');
        // loginMailEventBtn = document.querySelector('#btn');

let naviFunction = (() => {

    let inboxEvent = () => {
    	console.log("Inbox Clicked");
        inbox.style.display = 'block';
        sentMail.style.display = 'none'; 
        draftMail.style.display = 'none';  
        trashMail.style.display = 'none';  
        composeMail.style.display = 'none'; 
        groupMail.style.display = 'none';                        
    };  

    let sentMailEvent = () => {
    	console.log("Sent Btn Clicked");
	    inbox.style.display = 'none';
        sentMail.style.display = 'block'; 
        draftMail.style.display = 'none';  
        trashMail.style.display = 'none';
        composeMail.style.display = 'none';
        groupMail.style.display = 'none';           
    };

    let draftMailEvent = () => {
    	console.log("Draft Btn Clicked");
	    inbox.style.display = 'none';
        sentMail.style.display = 'none'; 
        draftMail.style.display = 'block';  
        trashMail.style.display = 'none'; 
        composeMail.style.display = 'none'; 
        groupMail.style.display = 'none';           
    };

    let trashMailEvent = () => {
    	console.log("Trash Btn Clicked");
	    inbox.style.display = 'none';
        sentMail.style.display = 'none'; 
        draftMail.style.display = 'none';  
        trashMail.style.display = 'block';  
        composeMail.style.display = 'none';
        groupMail.style.display = 'none';          
    };

    let composeMailEvent = () => {
    	console.log("Compose Btn Clicked");
	    inbox.style.display = 'none';
        sentMail.style.display = 'none'; 
        draftMail.style.display = 'none';  
        trashMail.style.display = 'none';
        composeMail.style.display = 'block'; 
        groupMail.style.display = 'none';           
    };

    let groupMailEvent = () => {
        console.log("Group Btn Clicked");
        inbox.style.display = 'none';
        sentMail.style.display = 'none'; 
        draftMail.style.display = 'none';  
        trashMail.style.display = 'none';
        composeMail.style.display = 'none';
        groupMail.style.display = 'block';            
    };

    let loginMailEvent = () => {
        console.log("Inbox Clicked");
        inbox.style.display = 'block';
        sentMail.style.display = 'none'; 
        draftMail.style.display = 'none';  
        trashMail.style.display = 'none';  
        composeMail.style.display = 'none'; 
        groupMail.style.display = 'none';                         
    };  

    let activeTag = (event) => {
		const current = document.querySelector('.active');
		current.className = current.className.replace("active", "");
		event.target.className += "active";
    };

    return {
        inboxEvent,
        sentMailEvent,
        draftMailEvent,
        trashMailEvent,
        composeMailEvent,
        groupMailEvent,
        loginMailEvent, 
        activeTag
    };

})();

inboxEventBtn.addEventListener("click", (event) => {
	event.preventDefault();
	naviFunction.activeTag(event);
    naviFunction.inboxEvent();
});

sentMailEventBtn.addEventListener("click", (event) => {
	event.preventDefault();
	naviFunction.activeTag(event);
    naviFunction.sentMailEvent();
});

draftMailEventBtn.addEventListener("click", (event) => {
	event.preventDefault();
	naviFunction.activeTag(event);
    naviFunction.draftMailEvent();
});

trashMailEventBtn.addEventListener("click", (event) => {
	event.preventDefault();
	naviFunction.activeTag(event);
    naviFunction.trashMailEvent(); 
});

composeMailEventBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // naviFunction.activeTag(event);
    naviFunction.composeMailEvent(); 
});

groupMailEventBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // naviFunction.activeTag(event);
    naviFunction.groupMailEvent(); 
});


