const Discord = require("discord.js");
const myid = ['347787991650926594'];
const prefix = ['$'];
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


client.on('message', message => {
  if (message.content === 'd21') {
message.channel.send('#daily')
  }
  if(message.content === 'c21'){
message.channel.send('#credits')
  }
  if(message.content === 'r21'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p21') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s21")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client2.on('message', message => {
  if (message.content === 'd22') {
message.channel.send('#daily')
  }
  if(message.content === 'c22'){
message.channel.send('#credits')
  }
   if(message.content === 'r22'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p22') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s22")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client3.on('message', message => {
  if (message.content === 'd23') {
message.channel.send('#daily')
  }
  if(message.content === 'c23'){
message.channel.send('#credits')
  }
  if(message.content === 'r23'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p23') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s23")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client4.on('message', message => {
  if (message.content === 'd24') {
message.channel.send('#daily')
  }
  if(message.content === 'c24'){
message.channel.send('#credits')
  }
  if(message.content === 'r24'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p24') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s24")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client5.on('message', message => {
  if (message.content === 'd25') {
message.channel.send('#daily')
  }
  if(message.content === 'c25'){
message.channel.send('#credits')
  }
  if(message.content === 'r25'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p25') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s25")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
  if (message.content === 'd26') {
message.channel.send('#daily')
  }
  if(message.content === 'c26'){
message.channel.send('#credits')
  }
  if(message.content === 'r26'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p26') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s26")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


client.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``1`` ")
    }
});

client2.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``2`` ")
    }
});

client3.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``3`` ")
    }
});

client4.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``4`` ")
    }
});

client5.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``5`` ")
    }
});

client6.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``6`` ")
    }
});


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client.on('message', message => {
if (message.content === prefix+'fast1') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send('world Should live in peace...M')
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
if (message.content === prefix+'fast1') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send('world Should live in peace...M')
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
if (message.content === prefix+'fast1') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send('world Should live in peace...M')
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => {
if (message.content === prefix+'fast1') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send('world Should live in peace...M')
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => {
if (message.content === prefix+'fast1') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send('world Should live in peace...M')
          .then(m => {
            count++;
          })
          
        }
      }
});

client6.on('message', message => {
if (message.content === prefix+'fast1') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send('world Should live in peace...M')
          .then(m => {
            count++;
          })
          
        }
      }
});
