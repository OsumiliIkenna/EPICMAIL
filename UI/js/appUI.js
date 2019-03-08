let inbox = document.querySelector('.container-mail'),
        sentMail = document.querySelector('.sent-mail-container'),
        draftMail = document.querySelector('.draft-mail-container'),
        trashMail = document.querySelector('.trash-mail-container'),
		sentMailEventBtn = document.querySelector('#sent'),
        draftMailEventBtn = document.querySelector('#draft'),
		inboxEventBtn = document.querySelector('#inbox'),
        trashMailEventBtn = document.querySelector('#trash');
		
		
let naviFunction = (() => {
    let inboxEvent = () => {
    	console.log("Inbox Clicked");
        inbox.style.display = 'block';
        sentMail.style.display = 'none'; 
        draftMail.style.display = 'none';  
        trashMail.style.display = 'none';                 
    };  

    let sentMailEvent = () => {
    	console.log("Sent Btn Clicked");
	    inbox.style.display = 'none';
        sentMail.style.display = 'block'; 
        draftMail.style.display = 'none';  
        trashMail.style.display = 'none';            
    };

    let draftMailEvent = () => {
    	console.log("Draft Btn Clicked");
	    inbox.style.display = 'none';
        sentMail.style.display = 'none'; 
        draftMail.style.display = 'block';  
        trashMail.style.display = 'none';            
    };

    let trashMailEvent = () => {
    	console.log("Trash Btn Clicked");
	    inbox.style.display = 'none';
        sentMail.style.display = 'none'; 
        draftMail.style.display = 'none';  
        trashMail.style.display = 'block';            
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
        activeTag
    };

})(inbox, sentMail, trashMail, sentMail);

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
