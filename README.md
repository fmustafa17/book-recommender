# Book Recommender by farhana
React web app using the NYTimes Book API to recommend the user a random best selling book based on the current date.

README Under Construction

### **Don't** have your sensitive data exposed!
Good practice is to have senstive data (passwords, API keys, etc) in a config file and adding the config file to the .gitignore file. If you do accidently add sensitive data to your repo, consider it compromised and generate a new API key.

Make a config.js file  
Add the following to the file

``var config = {
    MY_KEY : 'YOUR_KEY_HERE'
}
export default config
``

Locate or make a .gitignore file and add the following  
``
/src/config.js``

## Resources
- [Learn React.js - Full Course for Beginners - Tutorial 2019](https://www.youtube.com/watch?v=DLX62G4lc44&feature=youtu.be)
- [Reactjs Docs - AJAX and APIs](https://reactjs.org/docs/faq-ajax.html)
- [NYTimes Books API](https://developer.nytimes.com/docs/books-product/1/overview)
- [Hide API Keys](https://gist.github.com/derzorngottes/3b57edc1f996dddcab25)