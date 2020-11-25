'use strict'

function getDogImage() {
  const breedName = $("#js-dog-type").val();
  fetch("https://dog.ceo/api/breed/" + breedName + "/images/random")
    .then(response => response.json())
    .then(responseJson => showDogImage(responseJson))
    .catch(error => alert("Sorry, there has been an error. Try again later."))
}

function watchForm() {
  $('form').submit(event => {
    console.log('submit clicked');
    event.preventDefault();
    getDogImage();
    $("#js-dog-type").val("");
  });
}

function showDogImage(responseJson){
  console.log(responseJson)
  if (responseJson.status === 'success'){
    $("#js-dog-image").html("")
    $("#js-dog-image").append(`<img src="${responseJson.message}" alt="Dog Image">`)
  }
  else if (responseJson.status === 'error'){
    alert("Sorry, no dogs of that breed were found! Try a different search term.")
  }
}

$(function(){
  console.log('function called');
  watchForm();
})
