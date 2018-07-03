module.exports = function(student, sessionDateTime) {
let emailContentSubject = `Coding Boot Camp - Tutorial Confirmation - ${sessionDateTime.date} at ${sessionDateTime.time} ${sessionDateTime.timezone}`

let emailContentBody = 

`<p>Hi ${student}!
<p>Thank you for scheduling your session with me. I am looking forward to our session on <b>${sessionDateTime.date} at ${sessionDateTime.time} ${sessionDateTime.timezone}.</b></p>
<p>If something comes up and the scheduled time will not work, <b>let me know a minimum of 6 hours before the appointment time</b> and we’ll figure something out.</p>
<p>This session will take place here: <a href="https://zoom.us/j/7344437905">https://zoom.us/j/7344437905</a></p>
<p style="margin-left: 0.5in">(If you have not used zoom before please join the meeting at least 15 minutes early for it may have you download and install some software.)</p>
<p>Again, all I need from you:</p>
<ul>
	<li>Be on Tutors & Students Slack 5 minutes before your time slot.</li>
	<li>Make sure your computer/mic/internet connection are working.</li>
	<li>Make sure your workspace is quiet and free from interruptions.</li>
	<li>At the end of the session, I will provide you with a link to a 2 minute evaluation form that you are required to complete.</li>
</ul>
<br>
<p>Slack or email me with any questions.  I’m looking forward to our meeting!</p>
<p><b>CC Central Support on all email by always using REPLY ALL.</b></p>
<br>
<p>Sincerely,</p>
<p>Stephen</p>`

return { 
	subject: emailContentSubject, 
	body: emailContentBody 
};

}