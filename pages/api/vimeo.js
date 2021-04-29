let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo("{client_id}", "{client_secret}", "{access_token}");

client.request({
  method: 'PATCH',
  path: 'uri',
  query: {
    'name': '{new video title}',
    'description': '{new video description}'
  }
}, function (error, body, status_code, headers) {
  if (error, status_code) {
    console.log(error, status_code);
} else {
    console.log("The title and description for ' + uri + ' has been edited.")
}
  console.log(body);
})