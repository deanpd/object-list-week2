$("document").ready(function(){

var bandData = []; //Holds the submitted data.

showData();  

$('#new-data').on('click', addNewData); //Fires off addNewData function when New Band button is clicked.
  
function addNewData(){
  
  //Get the Band Name and Band Genre
  $('#band-name').val('');
  $('#band-genre').val('');
  
  //Fire off functions when Submit and Reset buttons are clicked.
  $('#submit').on('click', addData)
  $('#reset').on('click', showData);
  
  //Hide table and show input form.
  $('#band-info').hide();
  $('#data-values').show();
  
  function addData(evt){
    //Holds form data from Band Name and Band Genre input fields.
    var newData = {
      name: $('#band-name').val(),
      genre: $('#band-genre').val()
    };
    
    bandData.push(newData);
    
    evt.preventDefault();
    
    showData();
  }//End of addData
}//End of addNewData
  
  
function showData(){
  var i, len, data;
  var tr, td;

  $('#results').empty();//Tried .remove() but it would delete <tbody id="results"> entirely. 

  for (i = 0, len = bandData.length; i < len; ++i){
    data = bandData[i];

    tr = $('<tr>');

    td = $('<td>');
    td.text(data.name);
    tr.append(td);

    td = $('<td>');
    td.text(data.genre);
    tr.append(td);

    $('#results').append(tr);
  }

  $('#band-info').show();
  $('#data-values').hide();
}
  
});