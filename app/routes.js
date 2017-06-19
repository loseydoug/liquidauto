'use strict';
const nodemailer = require('nodemailer');

module.exports = function(app) {


// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});


// send mail with defined transport object

	// api ---------------------------------------------------------------------

    app.get('/', function(req, res) {
        res.render('form');// if jade
        // You should use one of line depending on type of frontend you are with
        res.sendFile(__dirname + '/form.html'); //if html file is root directory
        res.sendFile("index.html"); //if html file is within public directory
    });

	app.post('/sendMail', (function(req, res) {
        // setup email data with unicode symbols
        var data = req.body;
        var subject = data.first + ' ' + data.last + ' Résumé'
        var mailOptions = {
            from: 'liquidResumes@gmail.com', // sender address
            to: 'admin@liquidautomationinc.com, kirsten@liquidautomationinc.com', // list of receivers
            replyTo: data.email,
            subject: subject,   // Subject line
            html: '<p>' + data.first + ' ' + data.last + ' has sent you their résumé for review.<br>' +
                '<b>Phone Number</b>: ' + data.phone + '<br>' +
                '<b>Address</b>: ' + data.address + ', '+ data.city + ', ' + data.state + ' ' + data.zip + '<br>' +
                '<br><b>Replies to this email will go to</b>: ' + data.email + '</p>',
            attachments: [
                {
                    filename: data.resume.filename,
                    path: data.resume.content
                }
            ]
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).send(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            res.status(200).send('Sent');
        });
    }));
};
