const watson = require('watson-developer-cloud');


const conversation = watson.conversation({
    username: '1c7dc479-334f-42b6-bf6d-f1cf74d0055a',
    password: 'k6L7vEaPOuSg',
    version: 'v1',
    version_date: '2017-05-26'
});

//
// conversation.listWorkspaces(function (err, response) {
//     if (err) {
//         return console.error(err)
//     }
//
//     console.log(JSON.stringify(response,undefined,2))
// });


conversation.message({
    workspace_id: 'a13baecf-4946-4656-acad-e37ef04f68ea',
    input: {'text': 'Hello'}
},  function(err, response) {
    if (err)
        console.log('error:', err);
    else
        console.log(JSON.stringify(response, null, 2));
});