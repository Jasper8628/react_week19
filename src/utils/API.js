let axios =require("axios") ;

const BASEURL = 'https://randomuser.me/api/?results=10';
//const APIKEY = "6Q85-YWJ2-03OF-XZBF";


// Export an object with a "search" method that searches the Giphy API for the passed query

export default {
    search: function() {
      return axios.get(BASEURL);
    }
  };







//  const apiCall= ()=> {
//      axios.get(BASEURL)
//      .then(res=>{
//          console.log(res.data.results[0]);
//      });
// }
// apiCall();
