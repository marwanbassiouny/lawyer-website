
<?php 
  if(isset($_POST['submit'])){
	  
	$name =$_POST["name"];
	$from =$_POST["email"];
	$subject=$_POST["Subject"];
	$message=$_POST["message"];
	$phone=$_POST["phone"];
	
	// Email Receiver Address
	$receiver="mohamedkhalil@zayan-associates.com";
// 	$subject="Contact form details";

	$message = "
	<html>
	<head>
	<title>HTML email</title>
	</head>
	<body>
	<table width='50%' border='0' align='center' cellpadding='0' cellspacing='0'>
	
	<tr>
	<td width='50%' align='right'>&nbsp;</td>
	<td align='left'>&nbsp;</td>
	</tr>
	<tr>
	<td align='right' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'>Name:</td>
	<td align='left' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>".$name."</td>
	</tr>
	<tr>
	<td align='right' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'>Email:</td>
	<td align='left' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>".$from."</td>
	</tr>
	<tr>
	<td align='right' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'>Subject:</td>
	<td align='left' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>".$subject."</td>
	</tr>
	
	<tr>
	<td align='right' valign='top' style='border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'>Phone:</td>
	<td align='left' valign='top' style='border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>".nl2br($phone)."</td>
	</tr>
	<tr>
	<td align='right' valign='top' style='border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'>Message:</td>
	<td align='left' valign='top' style='border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>".$message."
	</td>
	</tr>
	</table>
	</body>
	</html>
	";
	
    $text = "
    	<html>
    	<head>
    	<title>Thank you</title>
        <style>
        div {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            display:grid;
            justify-items: center;
            border:0.1em solid gold;
         }
         
    a.button{
        padding:0.35em 1.2em;
        border-radius: 25px;
        text-decoration:none;
        font-family:'Roboto',sans-serif;
        font-weight:300;
        color:white;
        transition: all 0.8s;
        background-color:black;
        }
        a.button:hover{
        color:#000000;
        background-color:gold;
        }
        a{
            margin-bottom: 15px;
         }   
        </style>
    	</head>
    	<body>
        <div>
        <h1 style='padding: 20px;'>شكرا لك ، سوف نراسلك قريبا</h1>
        <a href='HomeAr.html' class='button'>الرئيسية</a>	
        </div>
        
        </body>
        </html>
    	";
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// More headers
$headers .= 'From: <'.$from.'>' . "\r\n";
   if(mail($receiver,$subject,$message,$headers))  
   {
	   //Success Message
      echo ".$text";
   }
   else
   {	
   	 //Fail Message
      echo "The message could not been sent!";
   }

}
?>
