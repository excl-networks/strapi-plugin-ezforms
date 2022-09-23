# Submitting Data

Submit data to the `/api/ezforms/submit/` endpoint (or `/ezforms/submit` if you are not use the `/api/` prefix)

Submit data as a JSON object with this format:

```
{
  token: 'your-recaptcha-token',
  formName: 'Test Form' // Optional, need to set enableFormName to true in your config to attatch this to database record. 
  formData:{
    name: 'John Doe',
    email: 'test@gmail.com'
    message: 'Hello World'
  }
}
```

Everything within the formData object will be sent as a notification and stored in the database.

## Axios Example

```js
  let form = {
      fname: 'John',
      lname: 'Doe',
  }
  let token = 'recaptcha token',

  axios.post('http://localhost:1337/api/ezforms/submit', {token, formData: form})
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      // error.response.status Check status code
    }).finally(() => {
    //Perform action in always
  });
```
