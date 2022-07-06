$(document).ready(function(){
         
    var currentActivePage = localStorage.getItem("activePageNumber");

    if(currentActivePage == null || typeof currentActivePage == 'undefined'){
        var activePageNumber = 1;
        localStorage.setItem("activePageNumber",activePageNumber);
        
        $("#page-1").removeClass("d-none");
        $("#page-number-1").addClass("active-page");
    }
    else{

        var previousActivePage = parseInt(localStorage.getItem("activePageNumber"));
        var nextActivePage;
        if(previousActivePage == 1){
            nextActivePage = 2;
            localStorage.setItem("activePageNumber",nextActivePage);

            $("#page-2").removeClass("d-none");
            $("#page-number-2").addClass("active-page");

            $("page-1").addClass("d-none");
            $("page-3").addClass("d-none");
            $("page-4").addClass("d-none");

            $("#page-number-1").removeClass("active-page");
            $("#page-number-3").removeClass("active-page");
            $("#page-number-4").removeClass("active-page");


        }
        else if(previousActivePage == 2){
            nextActivePage = 3;
            localStorage.setItem("activePageNumber",nextActivePage);
            $("#page-3").removeClass("d-none");
            $("#page-number-3").addClass("active-page");

            $("page-1").addClass("d-none");
            $("page-2").addClass("d-none");
            $("page-4").addClass("d-none");
            $("#page-number-1").removeClass("active-page");
            $("#page-number-2").removeClass("active-page");
            $("#page-number-4").removeClass("active-page");

        }
        else if(previousActivePage == 3){
            nextActivePage = 4;
            localStorage.setItem("activePageNumber",nextActivePage);
            $("#page-4").removeClass("d-none");
            $("#page-number-4").addClass("active-page");


            $("page-1").addClass("d-none");
            $("page-2").addClass("d-none");
            $("page-3").addClass("d-none");
            $("#page-number-1").removeClass("active-page");
            $("#page-number-2").removeClass("active-page");
            $("#page-number-3").removeClass("active-page");

        }
        else if(previousActivePage == 4){
            nextActivePage = 1;
            localStorage.setItem("activePageNumber",nextActivePage);
            $("#page-1").removeClass("d-none");
            $("#page-number-1").addClass("active-page");


            $("page-4").addClass("d-none");
            $("page-2").addClass("d-none");
            $("page-3").addClass("d-none");
            $("#page-number-4").removeClass("active-page");
            $("#page-number-2").removeClass("active-page");
            $("#page-number-3").removeClass("active-page");
        }


    }

    

    var activeJobsDivNumber = localStorage.getItem("activeJobsDivNumber");

    if(activeJobsDivNumber == null || typeof activeJobsDivNumber == 'undefined'){
        var activeJobsDivNumber = 1;
        localStorage.setItem("activeJobsDivNumber",activeJobsDivNumber);
        
        $("#job-div-1").removeClass("d-none");
       
    }
    else{

        var previousActiveDiv = parseInt(localStorage.getItem("activeJobsDivNumber"));
        var nextActiveDiv;
        if(previousActiveDiv == 1){
            nextActiveDiv = 2;
            localStorage.setItem("activeJobsDivNumber",nextActiveDiv);

            $("#job-div-2").removeClass("d-none");

            $("#job-div-1").addClass("d-none");
            $("#job-div-3").addClass("d-none");
            $("#job-div-4").addClass("d-none");



        }
        else if(previousActivePage == 2){
            nextActiveDiv = 3;
            localStorage.setItem("activeJobsDivNumber",nextActiveDiv);
            $("#job-div-3").removeClass("d-none");

            $("#job-div-1").addClass("d-none");
            $("#job-div-2").addClass("d-none");
            $("#job-div-4").addClass("d-none");

        }
        else if(previousActivePage == 3){
            nextActiveDiv = 4;
            localStorage.setItem("activeJobsDivNumber",nextActiveDiv);
            $("#job-div-4").removeClass("d-none");

            $("#job-div-1").addClass("d-none");
            $("#job-div-2").addClass("d-none");
            $("#job-div-3").addClass("d-none");

        }
        else if(previousActivePage == 4){
            nextActiveDiv = 1;
            localStorage.setItem("activeJobsDivNumber",nextActiveDiv);
            $("#job-div-1").removeClass("d-none");

            $("#job-div-4").addClass("d-none");
            $("#job-div-2").addClass("d-none");
            $("#job-div-3").addClass("d-none");
        }


    }




});



function nextPage(elem){
    debugger;
    var nextActivePage = parseInt($(elem).html());
    var currentActivePage = parseInt(localStorage.getItem("activePageNumber"));
    if(currentActivePage == 1){
        
            $("#page-1").addClass("d-none");
            $("#page-number-1").removeClass("active-page");
    
        }
        else if(currentActivePage == 2){
         
            $("#page-2").addClass("d-none");
            $("#page-number-2").removeClass("active-page");

        }
        else if(currentActivePage == 3){
           
          
         

          
            $("#page-3").addClass("d-none");
            $("#page-number-3").removeClass("active-page");

        }
        else if(currentActivePage == 4){
     
            $("#page-4").addClass("d-none");
          
            $("#page-number-4").removeClass("active-page");
     
        }
        
        if(nextActivePage == 1){
        localStorage.setItem("activePageNumber",nextActivePage);
        $("#page-1").removeClass("d-none");
        $("#page-number-1").addClass("active-page");

    }
    else if(nextActivePage == 2){
        localStorage.setItem("activePageNumber",nextActivePage);

        $("#page-2").removeClass("d-none");
        $("#page-number-2").addClass("active-page");

    }
    else if(nextActivePage == 3){
        localStorage.setItem("activePageNumber",nextActivePage);

        $("#page-3").removeClass("d-none");
        $("#page-number-3").addClass("active-page");

    }
    else if(nextActivePage == 4){
        localStorage.setItem("activePageNumber",nextActivePage);

        $("#page-4").removeClass("d-none");
      
        $("#page-number-4").addClass("active-page");
 
    }
    
}
