
 $(document).ready(function(){
        function redirect(){
            window.location.assign('https://slash-template.blogspot.com/');
        }

        function check(){
                if($('#mirt').length === 0){
                    redirect();
                }

                else if($("#mirt").attr("href") !== "https://slash-late.blogspot.com/"){
                    redirect();
                }
            }
        check();
        setInterval(function () {check()}, 2000);
        });
