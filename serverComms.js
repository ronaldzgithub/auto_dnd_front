

// NEW - generic send with callback

export async function sendMessage(endpoint, message) {
    //const base_url = 'http://127.0.0.1:8000' // local
    const base_url = 'https://auto-dnd-e6db93336cd9.herokuapp.com'
    console.log(`sending message ${message}, to ${base_url}/${endpoint}`)
    const resp = await fetch(`${base_url}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
    if (resp.ok) {
        const data = await resp.json();
        return data;
    } else {
        console.log('sendMessage error:', resp.status, resp.statusText);
    }
}



// OLD - send for play.html

// async function sendMessage(message, endpoint) {
//     const base_url = 'http://127.0.0.1:8000' // local
//     // const base_url = 'https://auto-dnd-e6db93336cd9.herokuapp.com'
    
//     console.log(`sending message to ${base_url}/${endpoint}`)
//     toggleInputs(false)
//     const resp = await fetch(`${base_url}/${endpoint}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ 
//             'campaign_id': campaignId,
//             'content': message
//         })
//     });
//     if (resp.ok) {
//         const data = await resp.json();
//         setNewNotes("charSheetText", formatCharSheet(data.response.char_sheet));
//         setNewNotes("campaignNotesText", formatCampaignNotes(data.response.campaign_notes));
//         setNewMessages("chatLog", data.response.messages);

//         // tool used mode
//         if (data.response.messages.length > 0 && data.response.messages[data.response.messages.length - 1].role === 'tool'){
//             let messageInput = document.getElementById("messageInput");
//             let sendButton = document.querySelector("button");
//             toggleInputs(true, "Continue...")
//             messageInput.value = ' ';
//             messageInput.disabled = true;
//             messageInput.style.backgroundColor = "lightgray";
//         } else {
//             toggleInputs(true, "Send");
//         }
//     }
// }
