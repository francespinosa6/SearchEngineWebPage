$( document ).ready(function() {

    $('#giphy-button').on('click', () => {       //when search button its clicked, then do the following code
      
      if($('#search-request').val()=="")         //If the search button is clicked but search field is empty, throw alert
      {
        alert("Please enter what you would like to search inside the search box!")
      }
      else{

        let search_request = $('#search-request').val();  //if search field is not empty, grab the value here

        let api = "https://api.giphy.com/v1/gifs/search?api_key=qzQ9uQA24CMHpHJ2owdjodKLbHvJBDKP&q=" + search_request; //api_key + search value
                                                                //api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q="    professor's API key for backup
        $.get(api, function(giphyResponse) {      //.get function

          let gif_results = '';
          for (let image of giphyResponse.data) {               //Looping the results, "appending them into the HTML"     
            let images_result = `<img src=${image.images.original.url} class="col-sm-12 col-md-4 col-lg-2" />` //Parsing data and adding boostrap grid structure
                gif_results = gif_results + images_result;          
          }
          $('#gif-container').html(gif_results);    //Appending it to the HTML here
        });
      }
    })
  });