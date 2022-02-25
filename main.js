var images = ["My Family.jpeg","trixie.jpeg", "vanishka.jpeg" , "varnika.jpeg", "srishhti massi.jpeg" , "mumma.jpeg"];
var names = ["Fmaily Book","Trixie Sharma", "Vanishka Singh", "Varnika Singh", "Srishhti Sharma", "Aparna Sharma"];
var i = 0;
function next()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var the_Image = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var the_Name = names[i] ;
 
    document.getElementById("family_member_image").src = the_Image;
    document.getElementById("family_member_name").innerHTML = the_Name;
}
