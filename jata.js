$(document).ready(function(){
        function redirect(){
            window.location.assign('http://www.example.com');
        }

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
        check();
        setInterval(function () {check()}, 2000);
        });
