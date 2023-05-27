require('dotenv').config();

const {App} = require('@slack/bolt');

const app = new App({
    token:process.env.SLACK_APP_BOT_TOKEN,
    socketMode:true,
    appToken:process.env.SLACK_APP_TOKEN,
    signingSecret:process.env.SLACK_APP_SIGNING_SECRET
    
})




app.message('@1y', async ({ message, say }) => {
    const mentionedUsers = [
      message.user, // Mentioning the user who sent the message
      'anshul240903', // Replace with the user ID of the person you want to tag
    ];
  
    const userTags = mentionedUsers.map(userId => `<@${userId}>`).join(' ');
  
    const channelId = message.channel; // Get the channel ID where the message was received
    const triggerWord = '@1y'; // The trigger word used to call the bot 
  
    const text = message.text.trim().toLowerCase();
    if (text.includes(triggerWord)) {
      await say({
        text: `Hello, ${userTags}`,
        channel: channelId,
      });
    }
  });
  

  app.message('@2y', async ({ message, say }) => {
    const mentionedUsers = [
      message.user, // Mentioning the user who sent the message
      'anshul240903', // Replace with the user ID of the person you want to tag
    ];
  
    const userTags = mentionedUsers.map(userId => `<@${userId}>`).join(' ');
  
    const channelId = message.channel; // Get the channel ID where the message was received
    const triggerWord = '@2y'; // The trigger word used to call the bot
  
    const text = message.text.trim().toLowerCase();
    if (text.includes(triggerWord)) {
      await say({
        text: `Hello, ${userTags}`,
        channel: channelId,
      });
    }
  });


  app.message('@3y', async ({ message, say }) => {
    const mentionedUsers = [
      message.user, // Mentioning the user who sent the message
      'anshul240903', // Replace with the user ID of the person you want to tag
    ];
  
    const userTags = mentionedUsers.map(userId => `<@${userId}>`).join(' ');
  
    const channelId = message.channel; // Get the channel ID where the message was received
    const triggerWord = '@3y'; // The trigger word used to call the bot
  
    const text = message.text.trim().toLowerCase();
    if (text.includes(triggerWord)) {
      await say({
        text: `Hello, ${userTags}`,
        channel: channelId,
      });
    }
  });
  
  app.message('@4y', async ({ message, say }) => {
    const mentionedUsers = [
      message.user, // Mentioning the user who sent the message
      'anshul240903', // Replace with the user ID of the person you want to tag
    ];
  
    const userTags = mentionedUsers.map(userId => `<@${userId}>`).join(' ');
  
    const channelId = message.channel; // Get the channel ID where the message was received
    const triggerWord = '@4y'; // The trigger word used to call the bot
  
    const text = message.text.trim().toLowerCase();
    if (text.includes(triggerWord)) {
      await say({
        text: `Hello, ${userTags}`,
        channel: channelId,
      });
    }
  });




(async () => {
    console.log("Working")
    await app.start(3000)

})();


app.event('app_home_opened',async ({event,say,client}) =>{
    

    try {
        /* view.publish is the method that your app uses to push a view to the Home tab */
        await client.views.publish({
    
          /* the user that opened your app's app home */
          user_id: event.user,
    
          /* the view object that appears in the app home*/
          view: {
            type: 'home',
            callback_id: 'home_view',
    
            /* body of the view */
            blocks: [
              {
                "type": "section",
                "text": {
                  "type": "mrkdwn",
                  "text": "*Welcome to your _TikTags's Home_* :tada:"
                }
              },
              {
                "type": "divider"
              },
              {
                "type": "section",
                "text": {
                  "type": "mrkdwn",
                  "text": "This bot tags members of IMG according to their year"
                }
              },
            //   {
            //     "type": "actions",
            //     "elements": [
            //       {
            //         "type": "button",
            //         "text": {
            //           "type": "plain_text",
            //           "text": "Click me!",
            //         }
            //         "action_id": "button_click",
            
            //       }
            //     ]
            //   }
            ]
          }
        });
      }
      
      catch (error) {
        console.error(error);
      }
    
    })

  