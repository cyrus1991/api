class ApiCall {
  constructor() {
    // Do not remove the next line - this is a needed workaround!
    this.addCorsHeader();

    $.getJSON("https://api.chucknorris.io/jokes/random")
      .done((data) => {
        console.log(data )
      })
  }


  addCorsHeader() {
    jQuery.ajaxPrefilter(function(options) {
      if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
      }
    });
  }
}

var instance_of_api_call = new ApiCall();
