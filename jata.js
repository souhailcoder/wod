$(document).ready(function(){
            //Let's first setup the redirect
        function redirect(){
            window.location.assign('http://www.example.com');
        }

            //which things we got to check
        function check(){
                if($('#mirt').length === 0){
                    redirect();
                }

                else if($('#mirt').length === 0){
                    redirect();
                }

                else if($("#mirt").attr("href") !== "https://slash-template.blogspot.com/"){
                    redirect();
                }

                else if($('#mirt').text() !== ""){
                    redirect();
                } 
            }
        //execute the function on page load
        check();
        //excute the function at the intervals of 5 seconds.
        setInterval(function () {check()}, 5000);
        });
